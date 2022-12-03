import { env } from "../../../configs/env";
import { createHmac, Hmac } from "crypto";
import {
  IllegalStateException,
  InvalidKeyException,
} from "../../../exceptions";
import { EncryptionUtils } from "./EncryptionUtils";

export class APIKeyUtils {
  private SECRETKEY = env.utils.API_KEY_SECRET || "";
  private HMAC_ALGO = "sha3-256";

  private SEPARATOR = ":";

  validateKey = (key: string) => {
    try {
      const parts: string[] = key.split(this.SEPARATOR);
      if (parts.length === 2 && parts[0].length > 0 && parts[2].length > 0) {
        const userHex = parts[0];
        const hash = parts[1];

        const validHash: boolean =
          createHmac(this.HMAC_ALGO, this.SECRETKEY)
            .update(userHex)
            .digest("hex") === hash;

        if (validHash) {
          const enc = new EncryptionUtils();
          const serviceId = enc.decrypt(userHex);
          // TODO: Check Service Id from DB and return boolean
          return true;
        }
      }
    } catch (e) {
      throw new IllegalStateException("failed to create HMAC:" + e);
    }
  };

  createKeyForServiceId = (serviceId: string) => {
    try {
      const enc = new EncryptionUtils();
      const userHex = enc.encrypt(serviceId);
      const hash = createHmac(this.HMAC_ALGO, this.SECRETKEY)
        .update(userHex)
        .digest("hex");

      return `${userHex}${this.SEPARATOR}${hash}`;
    } catch (e) {
      throw new IllegalStateException("failed to create HMAC:" + e);
    }
  };
}
