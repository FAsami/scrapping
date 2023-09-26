import { resolve } from "path";
import { createReadStream } from "fs";

export default (req, res) => {
  const filePath = resolve("./public/result.json");
  const fileStream = createReadStream(filePath);

  // Set appropriate headers for the response
  res.setHeader("Content-disposition", "attachment; filename=result.json");
  res.setHeader("Content-type", "application/json");

  // Pipe the file stream to the response
  fileStream.pipe(res);
};
