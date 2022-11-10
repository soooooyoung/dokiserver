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
import BaseParams from "./BaseParams";

export default class AlbumRequestParams extends BaseParams {
  @IsString()
  @IsNotEmpty({ message: "userId is required" })
  public userId?: string;
}
