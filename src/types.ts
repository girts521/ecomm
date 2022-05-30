export type MovingCardData = {
  category_id: string;
  id: string;
  product_desc: string;
  product_img: string;
  product_name: string;
  product_price: string;
};

export type AuthState = {
  isLoggedIn: boolean;
  user: {
    id: string;
    firstName: string;
    email: string;
    lastName: string;
    isAdmin: boolean;
    cart: string[];
  };
};

export type Item = {
  product_id: string;
  product_name: string;
  price: string;
  quantity: number;
  product_img: string;
  user_id: number;
  session_id: string;
};


export type CartState = Item[];

export type State = {
  cart: CartState;
  auth: AuthState;
};
