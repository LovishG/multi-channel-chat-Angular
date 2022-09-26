import { User } from "./user";

export interface Channel {
  name: string,
  admin: User['id'],
  users: User['id'][]
}
