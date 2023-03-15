function work(a, b) {
    console.log( a + b );
}

const spy = (func)=> {

    const wrapper = (...args) => {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log( 'call:' + args.join() );
}