
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    number: String,
});

// ✅ Correct usage of mongoose.model()
module.exports = mongoose.model("employees", EmployeeSchema);