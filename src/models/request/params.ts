import { IsNumberString, Length, IsNotEmpty } from "class-validator";

export class BaseHeaderParam {
  @IsNotEmpty()
  public "doki-apikey": string;
}
export class BaseBodyParam {}

export class LoginParam extends BaseBodyParam {
  @IsNotEmpty()
  public username?: string;
  @IsNotEmpty()
  public password?: string;
}
