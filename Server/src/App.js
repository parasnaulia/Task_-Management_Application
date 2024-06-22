const express = require("express");
const app = express();
const cors = require("cors");
const Task = require("./Schema/Schema");
require("dotenv").config();
require("./Db/Conn");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("This is My home Page");
});
app.get("/task", async (req, res) => {
  const data = await Task.find();
  res.send(data);
});
app.post("/task", async (req, res) => {
  const data = req.body;
  //   console.log(data);
  const data1 = new Task(data);
  try {
    const savedata = await data1.save();
    console.log(savedata);
    res.send({ message: true });
  } catch (e) {
    console.log("Data is posting the data" + e);
    res.send({ message: false });
  }
});
app.put("/task/:id", async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  //   console.log(params);
  try {
    const updateTheData = await Task.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    console.log("data is updated sucessfully ");
    res.send({ message: true });
  } catch (e) {
    console.log("Error In updating the data" + e);
    res.send({ message: false });
  }
});
app.delete("/task/:id", async (req, res) => {
  //   console.log("this is Delete");
  const { id } = req.params;
  console.log(id);

  try {
    const data = await Task.findByIdAndDelete({ _id: id }, { new: true });
    console.log(data);
    console.log("Task is Delted");
    res.send({ message: true });
  } catch (e) {
    console.log("Error in deleting the Data" + e);
    res.send({ message: false });
  }
});

app.listen(port, () => {
  console.log(`App is slisting At ${port}`);
});
