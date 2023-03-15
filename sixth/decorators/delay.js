const delay = (func, ms) => function() {
        setTimeout(() => func.apply(this, arguments), ms);
    };


let f1000 = delay(console.log, 1000);

f1000("test");