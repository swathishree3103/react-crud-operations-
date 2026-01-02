const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const studentRoutes = require("./routes/student_routes");
app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student Management is running in port");
});

app.listen(port, () => {
    console.log(`Student Management is running in port ${port}`);
});