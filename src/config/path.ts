const PRODUCT_PATH = "/product";
const CONSULTANT_PATH = "/consultant";
const PROFILE_PATH = "/profile";
const MANAGEMENT_PATH = "/management";

export const PATH = {
  home: "/",
  signup: "/signup",
  signin: "/signin",
  resetPassword: "/reset-password",
  product: PRODUCT_PATH,
  productDetail: PRODUCT_PATH + "/:slug",
  consultant: CONSULTANT_PATH,
  consultantDetail: CONSULTANT_PATH + "/:slug",
  cart: "/cart",
  purchase: "/purchase",
  profile: PROFILE_PATH,
  bank: PROFILE_PATH + "/bank",
  statistic: PROFILE_PATH + "/statistic",
  schedule: PROFILE_PATH + "/schedule",
  productManagement: PROFILE_PATH + PRODUCT_PATH,
  changeProductDetail: PROFILE_PATH + PRODUCT_PATH + "/:id",
  management: MANAGEMENT_PATH,
};

export const NAV_LIST = [
  {
    name: "Product",
    href: PRODUCT_PATH,
  },
  {
    name: "Consultant",
    href: CONSULTANT_PATH,
  },
  {
    name: "Management",
    href: PATH.management,
  },
];

export const NAV_LOGIN = [
  {
    name: "Log In",
    href: PATH.signin,
  },
  {
    name: "Register",
    href: PATH.signup,
  },
];
