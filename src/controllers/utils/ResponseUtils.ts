import { BaseException } from "exceptions";
import { DokiResponse } from "models";

export class ResponseUtils {
  private response: DokiResponse = { success: false };

  public validate = (status: boolean, error?: BaseException) => {
    this.response.success = status;
    this.response.error = error;
  };

  public put = (key: string, value: object) => {
    this.response.result[key] = value;
  };

  public get = (key: string) => {
    return this.response.result[key];
  };

  public getMono = () => {
    return this.response;
  };
}