// let mongooes=require("mongoose");

// let url="mongodb://localhost:27017/Studentinfo";
// mongooes.connect(url);



const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/Studentinfo";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
