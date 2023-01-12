var express = require("express")
var router = express.Router()
var users = [
    {
        id: 1,
        name: "Bhanu",
        age: 23,
        salary: "50000"
    }

]
router.get("/", function (req, res) {
    res.send(users)
})
router.post("/create", function (req, res) {
    console.log(req.body)
    const { id, name, age, salary } = req.body
    users.push({ id, name, age, salary })
    res.send("user saved data sucessfull")
})
router.delete("/:id/delete", function (req, res) {
    console.log(req.params.id)
    let filteredUsers = users.filter(function (item) {
        return Number(item.id) !== Number(req.params.id)
    })

    users = [...filteredUsers]
    res.send("deleted user sucessfully")
})
router.put("/:id/update", function (req, res) {
    for (i = 0; i < users.length; i++) {
        if (Number(users[i].id) === Number(req.params.id)) {
            users[i].name = req.body.name;
            users[i].age = req.body.age;
            users[i].salary = req.body.salary;
            users[i].id = req.body.id
        }
    }
    res.send("users updated sucessfully")
})


module.exports = router