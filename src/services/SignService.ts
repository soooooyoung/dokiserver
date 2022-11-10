import { Service } from "typedi";
import { execute } from "../api/utils/mysql.connector.sql";

@Service()
export class SignService {
  public signInUser = async () => {};

  public signUpUser = async () => {};
}
