#include <functional>
#include <mutex>

class FooBar {
private:
    int n;
    std::mutex mtx1, mtx2; // 互斥锁

public:
    FooBar(int n) {
        this->n = n;
        mtx2.lock();
    }

    void foo(std::function<void()> printFoo) {
        
        for (int i = 0; i < n; i++) {
            mtx1.lock();
            printFoo();
            mtx2.unlock();
        	// printFoo() outputs "foo". Do not change or remove this line.
        	
        }
    }

    void bar(std::function<void()> printBar) {
        
        for (int i = 0; i < n; i++) {
            mtx2.lock();
            printBar();
            mtx1.unlock();
        	// printBar() outputs "bar". Do not change or remove this line.
        }
    }
};