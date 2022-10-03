import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export function encrypt(target: string) {
  return bcrypt.hashSync(target, 10);
}

export function compare(target: string, compareTarget: string) {
  return bcrypt.compareSync(target, compareTarget);
}
