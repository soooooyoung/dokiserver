import { Response } from "express";
import { JsonController, HttpCode, Post, Res } from "routing-controllers";
import { SignService } from "../services/SignService";
import { Inject, Service } from "typedi";

@Service()
@JsonController("/sign")
export class SignController {
  @Inject()
  private signService: SignService = new SignService();

  /**
   * SIGNIN
   */
  @HttpCode(200)
  @Post("/in")
  public async signIn(@Res() res: Response) {
    try {
      await this.signService.signInUser();
      return res.status(200).json({
        success: true,
        error: null,
        result: "ff",
      });
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
  @Post("/in")
  public async accessToken(@Res() res: Response) {
    try {
      //TODO: access token
      return res.status(200).json({
        success: true,
        error: null,
        result: "ff",
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }

  /**
   * SIGNUP
   */
  @HttpCode(200)
  @Post("/up")
  public async signUp(@Res() res: Response) {
    try {
      await this.signService.signUpUser();
      return res.status(200).json({
        success: true,
        error: null,
      });
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: e,
      });
    }
  }
}
