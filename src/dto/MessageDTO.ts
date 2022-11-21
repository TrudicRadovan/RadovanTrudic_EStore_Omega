import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export default class MessageDTO {
  @Expose()
  @IsNotEmpty()
  @IsString()
  timestamp: string;

  @Expose()
  @IsNotEmpty()
  user: any;

  @Expose()
  @IsNotEmpty()
  @IsString()
  msg: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  type: string;

  constructor(timestamp: string, user: any, msg: string, type: string) {
    this.timestamp = timestamp;
    this.user = user;
    this.msg = msg;
    this.type = type;
  }
}
