const throttle = (func, ms) => {

    let isIdle = false,
        savedArgs,
        savedContext;

    function wrapper() {

        if (isIdle) {
            savedArgs = arguments;
            savedContext = this;
            return;
        }

        func.apply(this, arguments);

        isIdle = true;

        setTimeout(()=> {
            isIdle = false;
            if (savedArgs) {
                wrapper.apply(savedContext, savedArgs);
                savedArgs = savedContext = null;
            }
        }, ms);
    }

    return wrapper;
}

function f(a) {
    console.log(a)
}


let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);

