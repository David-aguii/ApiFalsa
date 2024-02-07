const express = require("express");
const app = express();
const port = 8000;
const userRoutes = require("./routes/usuario.routes");
app.use("/api/users", userRoutes);
const companyRoutes = require("./routes/empresa.routes");
app.use("/api/companies", companyRoutes);
app.listen(port, () => console.log(`listening on port :${port}`));
