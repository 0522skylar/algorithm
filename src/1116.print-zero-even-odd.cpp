
#include <atomic>
#include <functional>
#include <thread>
std::atomic<bool> flag(true);

class ZeroEvenOdd {
private:
    int n;
    std::atomic<int> flag = 0;

public:
    ZeroEvenOdd(int n) {
        this->n = n;
    }

    // printNumber(x) outputs "x", where x is an integer.
    void zero(std::function<void(int)> printNumber) {
        for (int i = 1; i <= n; i++) {
            while(flag != 0) {
                std::this_thread::yield(); // 用于提示操作系统当前线程愿意让出 CPU，从而给其他线程以运行的机会。这个函数并不会导致当前线程立即放弃执行，而是会给调度器一个提示，表明当前线程在逻辑上已经完成了一些工作，并且暂时不需要处理其他紧急任务。
            }
            printNumber(0);
            if (i % 2 == 0) {
                flag = 2;
            } else {
                flag = 1;
            }
        }
    }

    void even(std::function<void(int)> printNumber) {
        for(int i = 2; i <= n; i+=2) {
            while(flag != 2) {
                std::this_thread::yield();
            }
            printNumber(i);
            flag = 0;
        }
    }

    void odd(std::function<void(int)> printNumber) {
        for (int i = 1; i <= n; i+=2) {
            while(flag != 1) {
                std::this_thread::yield();
            }
            printNumber(i);
            flag = 0;
        }
    }
};