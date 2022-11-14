import { env } from "../../../configs/env";
import { createHmac, Hmac } from "crypto";
import {
  IllegalStateException,
  InvalidKeyException,
} from "../../../exceptions";

export class APIKeyUtils {
  private SECRETKEY = env.utils.API_KEY_SECRET;
  private HMAC_ALGO = "sha3-256";
  private SEPARATOR = ".";

  // private hmac: string;

  // private replaceAll = (
  //   str: string,
  //   searchValue: string,
  //   replaceValue: string
  // ) => str.split(searchValue).join(replaceValue);

  // private swap = (str: string, input: string, output: string) => {
  //   for (let i = 0; i < input.length; i++)
  //     str = this.replaceAll(str, input[i], output[i]);

  //   return str;
  // };

  // private doCreateHmac = () =>
  //   createHmac(this.HMAC_ALGO, Buffer.from(this.SECRETKEY!, "base64")).digest(
  //     "base64"
  //   );
  // TODO: logger factory for api class

  validateKey = (key: string, serviceId: string) => {
    try {
      if (
        key ===
        createHmac(this.HMAC_ALGO, this.SECRETKEY!)
          .update(serviceId)
          .digest("hex")
      ) {
        console.log("MATCH");
        return true;
      } else {
        throw new InvalidKeyException();
      }
    } catch (e) {
      throw new IllegalStateException("failed to create HMAC:" + e);
    }
  };

  createKey = (value: string) => {
    try {
      return createHmac(this.HMAC_ALGO, this.SECRETKEY!)
        .update(value)
        .digest("hex");
    } catch (e) {
      throw new IllegalStateException("failed to create HMAC:" + e);
    }
  };
}
