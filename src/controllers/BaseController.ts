import { Response } from "express";
import { JsonController } from "routing-controllers";
import { Service } from "typedi";
import { APIKeyUtils } from "../configs/security/utils/APIKeyUtils";

@Service()
@JsonController()
export class BaseController {
  private apiKeyUtils: APIKeyUtils = new APIKeyUtils();

  protected checkAuth = (apiKey: string) =>
    this.apiKeyUtils.validateKey(apiKey);
}
