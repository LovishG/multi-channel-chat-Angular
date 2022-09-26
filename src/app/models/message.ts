import { Channel } from "./channel";
import { User } from "./user";

export interface MessageBody {
  sender: User['id'],
  content: string,
  channel: Channel['name']
}
export interface Message {
  id: number,
  time: Date,
  body: MessageBody
}
