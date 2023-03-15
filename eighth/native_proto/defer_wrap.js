Function.prototype.defer = function(ms) {
    const context = this
    return function (...args) {
        setTimeout(()=>context.call(this, args), ms);
    }
};

const f = () => {
    console.log("Hello!");
}

f.defer(1000);