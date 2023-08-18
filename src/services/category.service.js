import "server-only";
import DbConnect from "./DbConnect";

export const getCategoriesFromDb = async () => {
  const db = await DbConnect();
  const categoriesCollection = db.collection("user");
  return categoriesCollection.find({}).toArray();
};