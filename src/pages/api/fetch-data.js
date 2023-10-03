import { join } from "path";
import { readFile } from "fs/promises";

export default async (req, res) => {
  const { date } = req.query;
  console.log("Data", date);
  try {
    // Get the file path to result.json in the public folder
    const filePath = join(process.cwd(), "public", "result.json");

    // Read the JSON file
    const data = await readFile(filePath, "utf-8");

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Send the JSON data as the response
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the data" });
  }
};

