import express from "express";

const app = express();
const port = 3001;

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
