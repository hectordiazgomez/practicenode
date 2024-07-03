import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.json("My API is running"));


app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }
  ]);
});

app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "Data received successfully",
    data: receivedData
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "operational",
    timestamp: new Date().toISOString()
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
