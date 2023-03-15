const debounce = (f, ms) => {

    let isIdle = false;

    return function() {
        if (isIdle) return;

        f.apply(this, arguments);

        isIdle = true;

        setTimeout(() => isIdle = false, ms);
    };

}

let f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);