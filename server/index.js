const express = require("express");
const dbConnection = require("./config/database");
const cors = require("cors");
const app = express();

const RequestData = require("./models/RequestData");
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
require("dotenv").config();

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

// app.use("/api", PaymentsRoutes);
app.post("/create", async(req, res) => {
    try{
        const data = req.body;
        const dt = new Date();
        data.date = dt;
        console.log(data);
        const op =await RequestData.create(data);
        return res.status(200).json({
            data:data,
            success:true
        })
    }
    catch(err){
        console.log(err);
         return res.status(200).json({
           message:err,
           success:false
         });
    }

});
app.get("/getAllRequests", async(req, res) => {
  const data =await RequestData.find({});
// console.log("get : ",data);
  return res.status(200).json({
    message: "success", 
    success: true,
    data:data
  });
});

const PORT = process.env.PORT || 4000;

dbConnection();

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>running e-waste project</h1>");
});
