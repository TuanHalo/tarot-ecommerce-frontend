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

export const NAV_LIST = [
    {
        name: 'Product',
        href: PRODUCT_PATH
    },
    {
        name: 'Consultant',
        href: CONSULTANT_PATH
    },
    {
        name: 'Management',
        href: PATH.management
    }
]

export const NAV_LOGIN = [
    {
        name: 'Log In',
        href: PATH.signin
    },
    {
        name: 'Register',
        href: PATH.signup
    }
]