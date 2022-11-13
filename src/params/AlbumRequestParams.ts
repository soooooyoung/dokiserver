import { IsString, IsNotEmpty } from "class-validator";
import BaseParams from "./BaseParams";

export default class AlbumRequestParams extends BaseParams {
  @IsString()
  @IsNotEmpty({ message: "userId is required" })
  public userId?: string;
}
