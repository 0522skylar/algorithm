
class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined;
    this.error = undefined;
    this.onFulfilled = [];
    this.onRejected = [];

    try {
      executor(this._resolve, this._reject);
      // excutor(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve = (value) => { // 为什么是箭头函数，因为resolve是外部调用，会找不到this，否则里面的constructor要绑定this
    
    if (this.state !== 'pending') return;
      this.value = value;
      this.state = 'fulfilled';
      this.onFulfilled.forEach(cb => cb(value));
  }

  _reject = (error) => {
    if (this.state !== 'pending') return;
    this.error = error;
    this.state = 'rejected';
    this.onRejected.forEach(cb => cb(error));
  }
  
  
  then(onFulfilled, onRejected) {
    const newPromise = new MyPromise((resolve, reject) => {
      console.log(this.state)
      if (this.state === 'fulfilled') {
        // onFulfilled(this.value)
        try {
          let result = onFulfilled ? onFulfilled(this.value) : this.value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      } else if (this.state === 'rejected') {
        // onRejected(this.error)
        try {
          if (onRejected) {
            let result = onRejected(this.error);
            resolve(result);
          } else {
            reject(error);
          }
        } catch (err) {
          reject(err);
        }
      } else {
        this.onFulfilled.push(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
        this.onRejected.push(() => {
          try {
            const result = onRejected(this.error);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      }
       
    });
    return newPromise;
  }
  
 /*
  then(onFulfilled, onRejected) {
    const wrapper = {
      promise: new MyPromise((resolve, reject) => {
        const fulfill = (value) => {
          try {
            let result = onFulfilled ? onFulfilled(value) : value;
            resolve(result);
          } catch (err) {
            reject(err);
          }
        };
  
        const rejectWrapper = (error) => {
          try {
            if (onRejected) {
              let result = onRejected(error);
              resolve(result);
            } else {
              reject(error);
            }
          } catch (err) {
            reject(err);
          }
        };

        if (this.state === 'fulfilled') {
          fulfill(this.value);
        } else if (this.state === 'rejected') {
          rejectWrapper(this.error);
        } else {
          this.onFulfilled.push(fulfill);
          this.onRejected.push(rejectWrapper);
        }
      })
    };
  
    return wrapper.promise;
  }*/
  



  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(callback) {
    return this.then(
      value => MyPromise.resolve(value).then(() => {
        callback();
        return value;
      }),
      error => MyPromise.reject(error).then(() => {
        callback();
        return error;
      })
    );
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(error) {
    return new MyPromise((resolve, reject) => {
      reject(error);
    });
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let count = 0;

      promises.forEach((promise, index) => {
        promise.then(
          value => {
            results[index] = value;
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          },
          error => {
            reject(error);
          }
        );
      });
    });
  }
}

// new MyPromise((reslove, reject) => {
//    setTimeout(() => {
//     console.log(`Start learning after 1000 seconds`)
//       reslove(123)
//    }, 1000)
  
// }).then(res => {
//   console.log(res)
// })

// -----------------1.正常调用----------------------------
// new MyPromise((resolve, reject) => {
//   resolve('Success');
// }).then(value=> {
//   console.log('Resolved with:', value); // 应该打印 "Resolved with: Success"
// });
// -----------------2.出错----------------------------
// const myPromise = new MyPromise((resolve, reject) => {
//   reject(new Error('Failure'));
// });

// myPromise.catch((error) => {
//   console.error('Rejected with:', error.message); // 应该打印 "Rejected with: Failure"
// });
// // -----------------3.链式调用----------------------------
// new MyPromise((resolve, reject) => {
//   resolve(1);
// })
// .then((value) => {
//   console.log(value + 1); // 应该打印 2
//   return value + 2; // 要调用resolve转换状态
// })
// .then((value) => {
//   console.log(value); // 应该打印 3
//   return value + 2
// }, err => {
//   console.log(err)
// }).then(res => {
//   console.log(res) // 应该打印 5
// })

// -----------------4.异步----------------------------
// const promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve('First'), 100);
// });
// const promise2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve('Second'), 200);
// });

// MyPromise.all([promise1, promise2]).then((values) => {
//   console.log(values); // 应该按顺序打印 ["First", "Second"]
// });

// -----------------5。race------------
// const promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve('First'), 200);
// });
// const promise2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve('Second'), 100);
// });

// MyPromise.race([promise1, promise2]).then((value) => {
//   console.log(value); // 应该打印 "Second"
// });
// const promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve('First'), 100);
// });

// const promise2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve('Second'), 200);
// });

// MyPromise.race([promise1, promise2]).then((value) => {
//   console.log(value); // "First"
// });

// -------------6------------
// new MyPromise((resolve, reject) => {
//   throw new Error('Sync Error');
// })
// .catch((error) => {
//   console.error('Caught error:', error.message); // 应该打印 "Caught error: Sync Error"
// });

//--------------7---------------
// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('Async Error'));
//   }, 100);
// })
// .catch((error) => {
//   console.error('Caught async error:', error.message); // 应该打印 "Caught async error: Async Error"
// });

//------------8---------------
const myPromise = new MyPromise((resolve, reject) => {
  resolve('Hello');
});

const returnedValue = myPromise.then((value) => {
  console.log(value); // 应该打印 "Hello"
  return 'World';
});

console.assert(returnedValue instanceof MyPromise); // 应该断言通过