let express=require("express")
let app1=express();
let cors=require("cors")
app1.use(express.json());
app1.use(cors());

let Employee=require("./person1")
require("./db");



app1.get("/employee",async(req,res)=>{
    let user=await Employee.find();
    if(user.length>0){
       res.send(user);
    }else{
       res.send("no valid data present");
    }
   
})

app1.post("/employee",async (req,res)=>{
    let user=new Employee(req.body)
    let result= await user.save()
    res.send(result)
})

app1.delete("/employee/:_id",async (req,res)=>{
    let user=await Employee.deleteOne(req.params);
    
    res.send(user)
})


app1.get("/employee/:id",async(req,res)=>{
    let user= await Employee.findOne({_id:req.params.id})
    res.send(user)

})


app1.put("/employee/:id", async (req, res) => {
  try {
    console.log("Received ID:", req.params.id);
    console.log("Received Body:", req.body); //log this one

    const result = await Employee.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send({ message: "User updated", result });
  } catch (error) {
    console.error("PUT error:", error.message);
    res.status(500).send({ error: "Internal Server Error: " + error.message });
  }
});



// search api
app1.get("/search/:key",async(req,res)=>{
   const key = req.params.key;
  let user=await Employee.find({
    $or:[
      //regex are used to match the mongodb datathrough names
      {name:{$regex:key}},
      {email:{$regex:key}},
      {address:{$regex:key}},
      {number:{$regex:key}}



    ]
  })
  res.send(user);
})




app1.listen(4000,()=>{console.log("sucess")})


