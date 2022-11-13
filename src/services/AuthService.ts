import { DokiResponse } from "models";
import { Service } from "typedi";
import { execute } from "../api/utils/mysql.connector.sql";

@Service()
export class AuthService {
  public login = async (): Promise<DokiResponse> => {
    //  1.Check API Key
    //  2.Get User Info (Query)
    //  3.Check User Status
    //  4.Get Access Token
    //  5.Check AccessToken, refresh if expired
    //  6.Return user Info

    return { success: false, result: "" };
  };
}
