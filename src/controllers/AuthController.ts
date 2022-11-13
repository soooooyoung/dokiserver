import { Response } from "express";
import {
  JsonController,
  HttpCode,
  Post,
  Res,
  Header,
  Req,
} from "routing-controllers";
import { AuthService } from "../services/AuthService";
import { Inject, Service } from "typedi";
import { DokiResponse } from "models";

@Service()
@JsonController("/auth")
export class AuthController {
  @Inject()
  private authService: AuthService = new AuthService();

  /**
   * SIGNIN
   */
  @HttpCode(200)
  @Post()
  public async signIn(@Res() res: Response) {
    try {
      const response: DokiResponse = await this.authService.login();

      return res.status(200).json(response);
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
