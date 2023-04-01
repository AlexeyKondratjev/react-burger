import React, { ReactNode } from "react";



export type TIngredientType = "bun" | "main" | "sauce";

export type TIngredient = {
  _id: string;
  name: string;
  type: TIngredientType;
  price: number;
  calories: number;
  carbohydrates: number;
  fat: number;
  proteins: number;
  image: string;
  image_large: string;
  image_mobile: string;
  __v: number;
};

export interface IExtendedIngredient extends TIngredient {
  id: string
};

export type TUser = {
  email: string;
  name: string;
};

export interface IResBody {
  success: boolean;
}

export interface IIngredientDataResponse extends IResBody {
  data: Array<TIngredient>;
}

export interface IOrderDataResponse extends IResBody {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export type TOrderDetails = {
  name: string,
  order: {
    number: number | null,
  },
  success: boolean
}

export interface ITokenUpdResponse extends IResBody {
  accessToken: string;
  refreshToken: string;
}

export interface IPasswordForgotResetResponse extends IResBody {
  message: string;
}

export interface IRegistrationResponse extends IResBody, ITokenUpdResponse {
  user: TUser;
}

export interface IAuthResponse extends IResBody, ITokenUpdResponse {
  user: TUser;
}

export interface IAuthOutResponse extends IResBody {
  message: string;
}

export interface IUserDataResponce extends IResBody {
  user: TUser;
}

export type TModal = 'orderInfo' | 'ingredient' | 'orderDetails' | '';

export type TLocationState = {
  background: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
  }
  from: string & { pathname: string };
  state?: object;
};

export type TBurgerConstructorItem = {
  data: IExtendedIngredient,
  index: number
};

export type TProtectedRouteComponent = {
  onlyUnAuth?: boolean,
  children: ReactNode,
  path: string,
  exact?: boolean
};

export type TLoaderSize = 'small' | 'medium' | 'large' | 'superLarge';

export type TLoader = {
  size: TLoaderSize
};

export type TLoaderSvg = {
  color: string,
  size: number
};

export type TIngredientIcon = {
  ingredient: TIngredient,
  numberToRender?: number
};

export type TIngredientComponent = {
  data: TIngredient;
  onClick: () => void;
};

export type TOrderInfoComponent = {
  orderId: string,
  orderStatus: string,
  orderInfoMessage: string
};

export type TOrdersListComponent = {
  renderStatus?: boolean
};

export type TOrderComponent = TOrdersListComponent & {
  data: IOrderDataResponse
};

export type TModalOverlayComponent = {
  onClick: () => void
};

export type TModalComponent = {
  children?: ReactNode,
  onClose: () => void,
  title?: string
};
