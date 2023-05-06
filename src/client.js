import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "k5apsfzd",
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2023-05-01", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export default client;
