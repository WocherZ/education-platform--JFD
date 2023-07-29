import jwt from "jsonwebtoken";
import { Response } from "express";

export default function generateAccessToken(userId: number, role: string, res: Response) {
  return jwt.sign(
    { userId: userId.toString(), role: role},
    process.env.JWT_SECRET as string,
    { },
    (err, token) => {
      if (err) {
        return res.json({
          message: "Ошибка при создании токена.",
        });
      }
      res.set("Authorization", `Bearer ${token}`);
      return res.json({message: "Success!", token: `Bearer ${token}`});
    }
  );
}

// { expiresIn: "1h" }, to line 8