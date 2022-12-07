import { Response } from "express";
import { BaseHeaderParam } from "models";
import { JsonController } from "routing-controllers";
import { Service } from "typedi";
import { APIKeyUtils } from "../configs/security/utils/APIKeyUtils";

@Service()
@JsonController()
export class BaseController {
  private apiKeyUtils: APIKeyUtils = new APIKeyUtils();

  protected checkAuth = (
    getKey: (keyName: keyof BaseHeaderParam) => string
  ) => {
    this.apiKeyUtils.validateKey(getKey("doki-apikey"));

    return true;
  };
}
