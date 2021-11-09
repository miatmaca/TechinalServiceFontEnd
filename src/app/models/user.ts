import { EntityBase } from "./entityBase";

export interface User extends EntityBase {
firstName:string
lastName:string
email:string
gsm:string
password:string
claim :string//Sonradan eklendi durumunu kontrol et
}