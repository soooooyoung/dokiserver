import { Service } from "typedi";
import { execute } from "../api/utils/mysql.connector.sql";

@Service()
export class AlbumService {
  public fetchAlbum = async () => {};

  public saveAlbum = async () => {
    //TODO save array of pictures
  };

  public fetchImageById = async () => {
    //TODO: fecth single picture by id;
  };
}
