import mongoose, { Model } from "mongoose"

const { MONGODB_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URL)
    .catch(err => console.log(err))

  return { conn }
}