let user = {
    name: "Bhanu",
    age: "24",
    show: function (greet) {
        console.log("name==", this.name, greet);
        console.log("age==", this.age);
    }

}
user.show("good maorning");
let user2 = {
    name: "Chandar",
    age: "23",
}
let user3 = {
    name: "Macha",
    age: "22",
}

user.show.call(user2, "good afternoon")
user.show.apply(user2, ["good evening"])
let brs = user.show.bind(user3)
brs("good night");