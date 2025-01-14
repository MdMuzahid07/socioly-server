/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import myConfig from "./app/config";

async function main() {
  try {
    await mongoose.connect(myConfig.database_user as string);

    app.listen(myConfig.port, () => {
      console.log(`Server running on port ${myConfig.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
