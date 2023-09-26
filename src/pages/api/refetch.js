import { ScrapingBeeClient } from "scrapingbee";
import fs from "fs";
import path from "path";
import { extractRules } from "../../../utils/extractRules";
import { convertToStructure } from "../../../utils/convertToStructure";

export default async function handler(req, res) {
  const url = req.body.url;
  if (!url) {
    res.status(400).json({ success: false, message: "Url is missing !" });
  }
  console.log(process.env.SCRAPING_BEE_SECRET);
  const client = new ScrapingBeeClient(`${process.env.SCRAPING_BEE_SECRET}`);

  const { status, data } = await client.get({
    url: url,
    params: {
      extract_rules: extractRules,
    },
  });
  if (status === 200) {
    const jsonString = data.toString("utf8");
    const jsonObject = JSON.parse(jsonString);
    const converted = convertToStructure(jsonObject);
    try {
      const filePath = path.join(process.cwd(), "public", "result.json");
      fs.writeFileSync(filePath, JSON.stringify(converted, null, 2));
      res
        .status(200)
        .json({ message: "File written successfully", results: converted });
    } catch (error) {
      res.status(500).json({ error: "Failed to write data to the file" });
    }
  } else {
    res.status(200).json({ success: true, data: "CNO" }).end();
  }
}
