const bcrypt = require("bcryptjs");

async function run() {
    console.log("doctor1:", await bcrypt.hash("rajesh123",10));
    console.log("doctor2:", await bcrypt.hash("priya123",10));
    console.log("doctor3:", await bcrypt.hash("arjun123",10));
    console.log("doctor4:", await bcrypt.hash("sneha123",10));
    console.log("doctor5:", await bcrypt.hash("vikram123",10));
}

run();