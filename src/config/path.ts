const PRODUCT_PATH = '/product';
const CONSULTANT_PATH = '/consultant';

export const PATH = {
    home: '/',
    management: '/management',
    consultant: CONSULTANT_PATH,
    consultantDetail: CONSULTANT_PATH + '/:slug',
    product: PRODUCT_PATH,
    productDetail: PRODUCT_PATH + '/:slug',
    signin: '/signin',
    signup: '/signup',
    resetPassword: '/reset-password'
}