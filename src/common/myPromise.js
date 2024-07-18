
class MyPromise {
  state = 'pending'
  constructor(executor) {
    this.value = undefined;
    this.error = undefined;
    this.onFulfilled = [];
    this.onRejected = [];

    try {
      executor(this._resolve, this._reject);
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve = (value) => {
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
    });

    return newPromise;
  }

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

new MyPromise((reslove, reject) => {
  setTimeout(() => {
    console.log(`Start learning after 1000 seconds`)
    reslove(123)
  }, 1000)
}).then(res => {
  console.log(res)
})

