import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function sign(target: object) {
  return jwt.sign(target, process.env.SECRET_TOKEN!, { expiresIn: "1d" });
}
