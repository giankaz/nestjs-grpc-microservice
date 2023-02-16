/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "sendmail";

export interface Mail {
  to: string;
  subject: string;
  text?: string | undefined;
  html: string;
}

export interface SendMailResponse {
  createdAt: string;
  email: string;
}


export interface SendMailService {
  sendMail(request: Mail): Observable<SendMailResponse>;
}