#include <atomic>
#include <functional>
std::atomic<bool> flag(true);

class Foo {
private:
    std::atomic<bool> fn1,fn2; // 在多线程环境中安全地读写布尔值的方法。原子操作确保了在并发环境中对变量的读写操作不会被其他线程的操作打断，从而避免了竞态条件和数据不一致的问题。
public:
    Foo() {
        fn1 = false;
        fn2 = false;
    }

    void first(std::function<void()> printFirst) {
        
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        fn1 = true;
    }

    void second(std::function<void()> printSecond) {
        while(!fn1) {
            // return; // 阻塞执行，但不能不输出结果
        }
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        fn2 = true;
    }

    void third(std::function<void()> printThird) {
        while(!fn2) { 
            // return;
        }
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};