require("dotenv").config();

const app = require("./app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} Server running on http://localhost:${PORT}`);
});
