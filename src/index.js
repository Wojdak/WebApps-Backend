import express from "express";
import driverRouter from "./routers/driver-router.js";
import raceRouter from "./routers/race-router.js";
import teamRouter from "./routers/team-router.js";

const app = express();
export const port = 3000;

app.use("/drivers", driverRouter);
app.use("/races", raceRouter);
app.use("/teams", teamRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
