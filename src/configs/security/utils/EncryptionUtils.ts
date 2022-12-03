import crypto from "crypto";
import { env } from "configs/env";
import { IllegalStateException } from "exceptions";

export class EncryptionUtils {
  private SECRETKEY = env.utils.API_KEY_SECRET || "";
  private ALGORITHM = "aes-256-gcm";
  private SEPARATOR = ":";

  constructor() {}

  public encrypt = (data: string) => {
    if (!data) {
      throw new IllegalStateException();
    }

    try {
      const iv = this.getIv();
      const cipher = crypto.createCipheriv(
        this.ALGORITHM,
        Buffer.from(this.SECRETKEY),
        iv
      );
      const encrypted = cipher.update(data);
      const finalBuffer = Buffer.concat([encrypted, cipher.final()]);
      const encryptedHex =
        iv.toString("hex") + this.SEPARATOR + finalBuffer.toString("hex");
      return encryptedHex;
    } catch (e) {
      throw new IllegalStateException();
    }
  };

  public decrypt = (data: string) => {
    if (!data) {
      throw new IllegalStateException();
    }

    try {
      const encryptedArray = data.split(this.SEPARATOR);
      const iv = Buffer.from(encryptedArray[0], "hex");
      const encrypted = Buffer.from(encryptedArray[1], "hex");
      const decipher = crypto.createDecipheriv(
        this.ALGORITHM,
        Buffer.from(this.SECRETKEY),
        iv
      );
      const decrypted = decipher.update(encrypted);
      const result = Buffer.concat([decrypted, decipher.final()]).toString();
      return result;
    } catch (e) {
      throw new IllegalStateException();
    }
  };

  private getIv = () => crypto.randomBytes(16);
}
