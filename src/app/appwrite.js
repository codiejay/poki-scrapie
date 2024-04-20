import { Account, Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6622f9caced02623a4ba");

export const account = new Account(client);

export const createUserWithGoogle = () => {
  account.createOAuth2Session(
    "google",
    "http://localhost:3000/dashboard", // Success URL
    "http://localhost:3000" // Failure URL
  );
};

export const getUser = async () => {
  return await account.get();
};

export { ID } from "appwrite";
