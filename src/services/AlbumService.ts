import { Service } from "typedi";
import { execute } from "../api/utils/mysql.connector.sql";

@Service()
export class AlbumService {
  public fetchAlbum = async () => {};

  public saveAlbum = async () => {
    //TODO: save array of images
  };

  public fetchImageById = async () => {
    //TODO: fetch single image by id;
  };
}
