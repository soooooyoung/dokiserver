import { BaseModel } from "./BaseModel";

type AccountType = "KAKAO" | "NAVER" | "EMAIL" | "ANONYMOUS";
type AccountStatus = "ACTIVE" | "INACTIVE" | "BLOCKED" | "DELETED";

export class UserModel extends BaseModel {
  private username: string;
  private password: string;
  private userId: string;
  private type: AccountType;
  private status: AccountStatus;
  private email: string;
  private profileImgUrl?: string;

  constructor(
    username: string,
    password: string,
    userId: string,
    type: AccountType,
    status: AccountStatus,
    email: string,
    profileImageUrl?: string
  ) {
    super();
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.type = type;
    this.status = status;
    this.email = email;
    this.profileImgUrl = profileImageUrl;
  }

  public getUserId() {
    return this.userId;
  }
  public setProfileImageUrl(url?: string) {
    this.profileImgUrl = url;
  }
}
