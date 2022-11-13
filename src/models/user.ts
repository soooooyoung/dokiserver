type AccountType = "KAKAO" | "NAVER" | "EMAIL" | "ANONYMOUS";

type AccountStatus = "ACTIVE" | "INACTIVE" | "LOCKED" | "DELETED";

export interface User {
  username: string;
  password: string;
  userId: string;
  type: AccountType;
  status: AccountStatus;
  email: string;
  profileImageUrl?: string;
}
