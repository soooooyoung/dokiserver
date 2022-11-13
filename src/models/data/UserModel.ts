import { BaseModel } from "./BaseModel";

type AccountType = "KAKAO" | "NAVER" | "EMAIL" | "ANONYMOUS";
type AccountStatus = "ACTIVE" | "INACTIVE" | "LOCKED" | "DELETED";

export class UserModel extends BaseModel {
  private username: string;
  private password: string;
  private userId: string;
  private type: AccountType;
  private status: AccountStatus;
  private email: string;
  private profileImageUrl?: string;

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
    this.username = username;
    this.password = password;
    this.userId = userId;
    this.type = type;
    this.status = status;
    this.email = email;
    this.profileImageUrl = profileImageUrl;
  }

  public getUserId() {
    return this.userId;
  }
  public setProfileImageUrl(url?: string) {
    this.profileImageUrl = url;
  }
}
