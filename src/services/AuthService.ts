import { DokiResponse, UserModel } from "models";
import { Service } from "typedi";

@Service()
export class AuthService {
  public login = async (): Promise<{
    user: UserModel;
    accessToken: string;
  }> => {
    //  2.Get User Info (Query)
    //  3.Check User Status
    //  4.Get Access Token
    //  5.Check AccessToken, refresh if expired
    //  6.Return user Info and Access Token
  };
}
