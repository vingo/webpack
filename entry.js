//method 1
//require('!style!css!./style.css');

// require('./style.css'); //webpack ./entry.js bundle.js --module-bind 'css=style!css'
// document.write(require('./content'));
// document.write('<br>hello world again...');

'use strict';
let getData1 = () => {
    return new Promise((resolve, reject) => {

        let getA = new Promise((ok, no) => {
            return ok({
                id: 1,
                message: 'world'
            });
        });

        let getB = (obj) => {

            return new Promise((ok, no) => {
                if (obj) {
                    obj.status = false;
                    return ok(obj);
                }
                return ok({
                    message: 'get data',
                    data: obj,
                    status: true
                });

            });
        };

        return getA.then((data) => {
                console.log('getA executed:', data);
                if (!data.status) {
                    reject(new Error('get getA occur an error'));
                }
                //return data;
                return resolve(data);

            })
            //.then(getB)
            .then((data) => {
                console.log('getB executed:', data);
                return resolve(data);
            })
            .catch((err) => {
                console.error(err, err.stack);
                reject(err);
            });
    });

};
// getData1().then((data) => {
//     console.log('result:', data);
// })
//

// 1: 对同一个promise对象同时调用 `then`
var aPromise = new Promise(function(resolve) {
    resolve(100);
});
aPromise.then(function(value) {
    return value * 2;
});
aPromise.then(function(value) {
    console.log("1: " + value); // => 100 不变
});

// 2: 链式调用，对一个promise对象同时调用 `then`
var aPromise2 = new Promise(function(resolve) {
    resolve(100);
});
aPromise2.then((value) => {
    return value * 2;
}).then((value) => {
    return value * 3;
}).then((value) => {
    console.log('2:', value); //=> 600
});

function timerPromisefy(delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delayTime);
        }, delayTime)

    })
};
//Promise.all
//*Promise.race  有任意一个resolve就停止
var startDate = Date.now();
Promise.all([timerPromisefy(1), timerPromisefy(2), timerPromisefy(4)]).then((d) => {
    console.log(Date.now() - startDate + 'ms');
    console.log(d);
}).catch((s) => {
    console.log('error:', s);
})