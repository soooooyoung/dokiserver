import { env } from "../../configs/env";
import jwt from "jsonwebtoken";
import { UserModel } from "../../models/data/UserModel";
import { NoResultException } from "../../models/exceptions/NoResultException";

export class TokenUtils {
  private accessTokenSecret = env.utils.JWT_TOKEN_SECRET;

  private doGenerateToken(
    userId: string,
    secret?: string
    // expiresAfter: number
  ) {
    if (!secret) {
      throw new NoResultException();
    }
    // to allow expiration
    // return jwt.sign(userId, secret, { expiresIn: "24h" });
    return jwt.sign(userId, secret);
  }

  public generateAccessToken(userInfo: UserModel) {
    if (!userInfo) {
      throw new NoResultException();
    }
    return this.doGenerateToken(userInfo.getUserId(), this.accessTokenSecret);
  }
}
