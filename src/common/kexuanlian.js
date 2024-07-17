/**
 * 实现一个 QQMan:
QQMan("jack") 
输出:
I am jack
 
QQMan("jack").rest(10).learn("computer") 
输出:
I am jack
//等待10秒
Start learning after 10 seconds
Learning computer
 
QQMan("jack").restFirst(5).learn("chinese") 
输出:
//等待5秒
Start learning after 5 seconds
I am jack
Learning chinese
 */

class QQMan{
  curText = null
  list = []
  constructor(text) {
    this.curText = text
    // console.log(text)
    return this
  }

  sleep(time) {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        console.log(`Start learning after ${time} seconds`)
        reslove()
      }, time * 1000)
    })
  }
  rest(time) {
    this.list.push(() => {
      console.log(`I am ${this.curText}`)
    })
    this.list.push(async() => {
      await this.sleep(time)
    })
    return this
  }
  restFirst(time) {
    this.list.push(async () => {
      await this.sleep(time)
    })
    this.list.push(() => {
      console.log(`I am ${this.curText}`)
    })
    return this
  }
  learn(subject) {
    this.list.push(() => {
      console.log(`Learning ${subject}`)
    })
    this.run()
    return this
  }
  async run () {
    if (this.list.length === 0) {
      this.list.push(() => {
        console.log(`I am ${this.curText}`)
      })
    } else {
      for (let i = 0; i < this.list.length; i++) {
        await this.list[i]()
      }
    }
  }
}


// 使用示例

// new QQMan("I am jack").restFirst(5).learn("chinese")
// new QQMan("I am jack").rest(10).learn("computer")
