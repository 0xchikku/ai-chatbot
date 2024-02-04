import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    console.log('Connecting to DB...');
    await connect(process.env.MONGODB_URL!)
    console.log('Connected to DB Successfully!');
  } catch (error) {
    console.log(`Error while connecting to MongoDB - error: ${error}`);
    throw error;
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(`Error while disconnecting from MongoDB - error: ${error}`);
    throw error;
  }
}

export {
  connectToDatabase,
  disconnectFromDatabase
}