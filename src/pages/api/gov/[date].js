import fs from "fs";
import path from "path";
import { ScrapingBeeClient } from "scrapingbee";
import { extractRules } from "../../../../utils/extractRules";
import { convertToStructure } from "../../../../utils/convertToStructure";

export default async (req, res) => {
  const { date } = req.query;
  if (!date) {
    res.status(400).json({
      success: false,
      message: "Please provide a date",
    });
  }

  const url = `https://news.sanook.com/lotto/check/${getDate(date)}`;

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
    res
      .status(200)
      .json({ message: "File written successfully", results: converted });
    try {
      const filePath = path.join(
        process.cwd(),
        "public",
        `${getDate(date)}.json`
      );
      fs.writeFileSync(filePath, JSON.stringify(converted, null, 2));
      res
        .status(200)
        .json({ message: "File written successfully", results: converted });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to write data to the file" });
    }
  } else {
    res
      .status(400)
      .json({ success: true, data: "Something went wrong !" })
      .end();
  }
};

const getDate = (dString) => {
  const date = dString.substring(0, 3);
  let year = Number(dString.substring(3, dString.length)) + 543;
  return `${date}${year}`;
};
