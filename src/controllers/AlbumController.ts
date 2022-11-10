import { Response } from "express";
import {
  JsonController,
  HttpCode,
  Get,
  Post,
  Res,
  Body,
} from "routing-controllers";
import { AlbumService } from "../services/AlbumService";
import { Inject, Service } from "typedi";
import AlbumRequestParams from "../params/AlbumRequestParams";

@Service()
@JsonController("/album")
export class AlbumController {
  @Inject()
  private albumService: AlbumService = new AlbumService();

  /**
   * Fetch ALl
   */
  @HttpCode(200)
  @Get()
  public async fetchAlbum(@Res() res: Response) {
    try {
      this.albumService.fetchAlbum();
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
   * Save
   */
  @HttpCode(200)
  @Post()
  public async saveAlbum(
    @Body() data: AlbumRequestParams,
    @Res() res: Response
  ) {
    try {
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
  /**
   * Fetch by Id
   */
  @HttpCode(200)
  @Get("/:id")
  public async fetchImageById(@Res() res: Response) {
    try {
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
