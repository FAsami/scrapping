import { verify } from "hcaptcha";

export default async function handler(req, res) {
  const { token } = req.body;
  try {
    const data = await verify(`${process.env.CAPTCHA_SECRET_KEY}`, token);

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
