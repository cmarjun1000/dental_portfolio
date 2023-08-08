import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const options = {
      dbName: "dental_portfolio",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(process.env.MONGODB_URI, options);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
