import { Response, Request } from "express";
import {
  JsonController,
  HttpCode,
  Post,
  Res,
  Header,
  Req,
  HeaderParams,
  Body,
} from "routing-controllers";
import { AuthService } from "../services/AuthService";
import { Inject, Service } from "typedi";
import { DokiResponse, LoginParam, BaseHeaderParam } from "../models";
import { BaseController } from "./BaseController";
import { ResponseUtils } from "./utils/ResponseUtils";

@Service()
@JsonController("/auth")
export class AuthController extends BaseController {
  @Inject()
  private authService: AuthService = new AuthService();

  // TODO: error handling middleware before request for response standardization. currently returning xml format on error.
  /**
   * SIGNIN
   */
  @HttpCode(200)
  @Post()
  public async signIn(
    @Res() res: Response,
    @HeaderParams() header: BaseHeaderParam,
    @Body() data: LoginParam
  ) {
    try {
      const response = new ResponseUtils();
      if (this.checkAuth(header["doki-apikey"], header["service-id"])) {
        // TODO login and return user data
        // const response: DokiResponse = await this.authService.login();
      }

      return res.status(200).json(response.getMono());
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }

  /**
   * AccessToken
   */
  @HttpCode(200)
  @Post("/accessToken")
  public async accessToken(@Res() res: Response) {
    try {
      //TODO: access token
      const response: DokiResponse = {
        success: true,
        result: "ff",
      };

      return res.status(200).json(response);
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }
}
