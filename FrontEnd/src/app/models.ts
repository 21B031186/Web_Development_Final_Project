export interface authUser{
  username: string;
  password: string;
}

export interface nonAuthUser{
  firstName: string;
  lastName: string;
  username: string;
  password: string;

}

export interface AuthToken {
  token: string;
}
export interface Category {
  name : string;
  subCategories : SubCategory[];
}
export interface SubCategory {
  name: string;
}
export interface Product {
  id: string;
  name : string;
  main_image : string;
  is_active : boolean;
  price : number;
  description : string;
  count : number;
  rating : number;
  category : string;
  subCategory : string;
}
