#include <functional>
#include <mutex>

class H2O {

  
public:
  int cnt_h = 0;
  std::condition_variable cv;
  std::mutex mu;
    H2O() {}

    void hydrogen(std::function<void()> releaseHydrogen) {
      std::unique_lock<std::mutex> lock(mu); // unique_lock是一个模板类，用于提供独占所有权的互斥访问。当unique_lock对象被创建时，它会自动锁定互斥锁，当对象被销毁时，互斥锁会自动释放。

      //条件变量cv来等待某个条件成立。cv.wait函数会释放互斥锁lock，然后等待条件变量cv被通知。这里的条件是一个lambda表达式，它检查类成员变量cnt_h（假设是一个记录已释放氢原子数量的计数器）是否小于2。如果条件为真（即cnt_h小于2），线程将继续执行；如果条件为假，线程会阻塞等待。
      cv.wait(lock, [this] {
        return this->cnt_h < 2;
      });
        // releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen();
        cnt_h++;
        if(cnt_h == 2) { 
          cv.notify_all(); // cv.notify_all()来唤醒所有正在条件变量cv上等待的线程。这样，其他可能正在等待氢原子释放的线程可以继续执行。
        }

    }

    void oxygen(std::function<void()> releaseOxygen) {
        std::unique_lock<std::mutex> lock(mu);
        cv.wait(lock, [this] {
          return this->cnt_h == 2;
        });
        
        // releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen();
        cnt_h = 0;
        cv.notify_all();
    }
};