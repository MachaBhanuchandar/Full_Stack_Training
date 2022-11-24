console.log(1);
console.log(2)
setTimeout(() => {
    console.log(3);
}, 2000)
console.log(4);

// call back

function placeorder(fn) {
    console.log("placing order")
    setTimeout(() => {
        console.log("order placed")
        fn();
    }, 4000)
}
function orderagain() {
    console.log("order again")
}
function makepayment() {
    console.log("payment done")
}
placeorder(makepayment);
orderagain();

//promise

function placeorder() {
    return new Promise(function (resolve, reject) {
        console.log("placing order")
        setTimeout(() => {
            console.log("order placed")
            resolve("order placed successfully")
        }, 4000)
    })

}
functionf makepayment() {
    console.log("payment done")
}
placeorder().then(function (result) {
    console.log(result)
    makepayment();
}).catch(function (err) {
    console.log("some error", err)
})

//async 

async function sayhello() {
    return "helloWorld"
}
function saiHi() {
    return "Hi"
}
sayhello().then(function (res) {
    console.log("result==", res)
})
console.log("sayHello==", sayhello())
console.log("saiHi===", saiHi())

//await

function placeorder() {
    return new Promise(function (resolve, reject) {
        console.log("placing order")
        setTimeout(() => {
            console.log("order placed")
            resolve("order placed successfully")
        }, 4000)
    })
}
async function sayhello() {
    let result = await placeorder();
    console.log("i am going to make payment");
}

sayhello();