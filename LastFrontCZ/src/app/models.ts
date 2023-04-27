export interface Events{
  id: number;
  title: string;
  desc: string;
  info: string;
  photo: string;
  like: number;
  company: string;
  date: string;
  category_id: number;
  user: string;
  liked: boolean;
  removed: boolean;
}
export interface Category{
  id: number;
  name: string;
  photo: string;
}
export interface Token {
  token: string;
}
export interface LoginData {
  username: string,
  password: string
}
