import { BaseException } from "exceptions/BaseException";

export interface DokiResponse {
  success: boolean;
  error?: BaseException;
  result?: any;
}
