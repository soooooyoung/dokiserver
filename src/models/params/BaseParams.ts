import {
  IsString,
  IsNotEmpty,
  IsIn,
  ValidateIf,
  Length,
  IsOptional,
  isNotEmpty,
  Contains,
  IsNumber,
} from "class-validator";

export default class BaseParams {
  @IsString()
  @IsNotEmpty({ message: "accessToken is required" })
  public accessToken?: string;
}
