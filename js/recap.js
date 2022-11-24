
//  getElementById...
// let div = document.getElementById("Box");
// console.log(div);
// div.style.color = "red";
// div.textContent = "hello"


// // getElementsByClassName
// let divwithclass = document.getElementsByClassName("Box1")
// console.log(divwithclass);
// console.log("length", divwithclass.length);
// // divwithclass[0].textContent = "hello world"


// getElementByTag
// let divwithtag = document.getElementsByTagName("div")
// console.log(divwithtag.length)

// queryselector
let parawithquery = document.querySelector("#para1")
console.log("with query", parawithquery)

// querySelectorAll
let parawithqueryall = document.querySelectorAll(".Box1")
console.log("with query all", parawithqueryall)

let headers = ["age", "name", "salary"]
let table = document.createElement("table")
let headerRow = document.createElement("tr")
let heading = document.createElement("th")
for (let i = 0; i < headers.length; i++) {
    textcontent = document.createTextNode(headers[i])
    heading.appendChild(textcontent)
}
headerRow.appendChild(heading)
table.appendChild(headerRow)
document.body.appendChild(table)

let h1 = document.createElement("h1")
h1.className += "Myname"
h1.className += " " + "my-head"
h1.style.color = "green"
let text = document.createTextNode("hello java script")
h1.appendChild(text)
document.body.appendChild(h1)

let para = document.createElement("p");
para.style.fontSize = "25px"
para.className += "bio";
para.className += " " + "My_bio"
let text1 = document.createTextNode("my name is Bhanu");
para.appendChild(text1)
document.body.appendChild(para)



