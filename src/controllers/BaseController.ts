import { Response } from "express";
import { JsonController } from "routing-controllers";
import { Service } from "typedi";
import { APIKeyUtils } from "../configs/security/utils/APIKeyUtils";

@Service()
@JsonController()
export class BaseController {
  private apiKeyUtils: APIKeyUtils = new APIKeyUtils();

  protected checkAuth = (apiKey: string, serviceId: string) =>
    // this.apiKeyUtils.validateKey(apiKey, serviceId);
    {
      const res = this.apiKeyUtils.createKeyForServiceId("0418");
      console.log(res);
      return true;
    };
}
