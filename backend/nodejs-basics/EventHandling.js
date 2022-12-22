const EventEmitter = require("events")

const eventEmitter = new EventEmitter();
eventEmitter.on("place_order", function (data) {
    console.log("order placed", data);
})
eventEmitter.emit("place_order", "price:200")