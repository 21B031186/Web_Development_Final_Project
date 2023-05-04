export interface Events{
  id: number;
  title: string;
  desc: string;
  info: string;
  photo: string;
  like: number;
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
export interface LoginData {
  username: string,
  password: string
}
export interface Token{
  token: string
}
export interface LikedData{
  username: string;
  event: string;
  user_liked: boolean;
}

export interface nonAuthUser{
  email: string;
  username: string;
  password: string;
  password2: string;

}
export interface AuthToken {
  access: string;
}

export interface MyJwtPayload {
  user_id: number;
  user_type: string
}
export interface User {
  email : string;
  password : string;
}

// export interface BackReturn{
//   response: string;
//   pk: number;
//   email: string;
//   token: string;
// }
