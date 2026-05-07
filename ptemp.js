const bcrypt = require("bcryptjs");

async function run() {
    console.log(await bcrypt.hash("rahul123",10));
    console.log(await bcrypt.hash("ananya123",10));
    console.log(await bcrypt.hash("kiran123",10));
    console.log(await bcrypt.hash("meera123",10));
    console.log(await bcrypt.hash("rohit123",10));
}

run();