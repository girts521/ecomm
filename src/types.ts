export type MovingCardData = {
  category_id: string;
  id: string;
  product_desc: string;
  product_img: string;
  product_name: string;
  product_price: string;
};

export type AuthState = {
  auth: {
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
};

export type Item = {
  product_id: string;
  product_name: string; 
  price: string;
  quantity: number;
  product_img: string;
  user_id?: number;
  session_id?: string;
};

export type CartState = {
  cart: Item[];
};

export type State = {
  cart: CartState;
  auth: AuthState;
};

export type productsData = {
  category_id: string;
  id: string;
  product_desc: string;
  product_img: string;
  product_name: string;
  product_price: string;
};

export type CategoryDataType = {
  category_name: string;
};

export type UserData = {
    isLoggedIn: boolean;
    message?: string;
    loggedUser: {
      cart: string[];
      email: string;
      firstName: string;
      id: number;
      isAdmin: boolean;
      lastName: string;
    };
  }

export type LoginType = {
    email: string;
    password: string;
  }

export type RegisterType = {
    name: string;
    surname: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    consent: boolean;
  }

  export type HomeUserDataType = {
    isLoggedIn: boolean;
    loggedUser: {
        id: string,
        firstName: string,
        email: string,
        lastName: string,
        isAdmin: false,
        cart: string[]
    },
  }

export type initialAuthStateType = {
    isLoggedIn: boolean;
    user: {
      id: string;
      firstName: string;
      email: string;
      lastName: string;
      isAdmin: boolean;
      cart: string[]
    }
}

export  type CategoriesFromDB = {
  category_name: string;
};

