const env = require("dotenv");
env.config();
const app = require("./middlewares/app");
const PORT = process.env.PORT || 2000;
const connectingToDB = require("./configs/db");

connectingToDB();

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
