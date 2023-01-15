
// functional scope
function sum() {
    let a = 50;
    var b = 60;
    const c = 90;
    console.log(a, b, c);
    console.log(a + b + c);
}
sum()
// console.log(a, b, c)

// global scope
var d = 89;
function showA() {
    console.log(d)
}
showA()

// // block scope (let,const)
// {
//     let f = 45;
//     const a = 63;
//     console.log(f, a)
// }
// console.log(f, a);

var button = document.createElement("button");
button.innerHTML = "save";
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener("click", function () {
    alert("did somthing");
});

let a = String("Bhanu");
console.log(typeof a)

let b = isNaN(123)
// let b = numtostr(a)
console.log(b)