import Home from "../pages/home"
import MainLayout from "../components/templates/MainLayout"
import Consultant from "../pages/consultant"
import Product from "@/pages/product"
import SignIn from "@/pages/signin"
import SignUp from "@/pages/signup"
import ResetPassword from "@/pages/reset-password"
import Page404 from "@/pages/404"
import PrivateRouter from "@/components/organisms/PrivateRouter"
import Management from "@/pages/management"
import { PATH } from "@/config/path"
import AuthRouter from "@/components/organisms/AuthRouter"
import ConsultantDetail from "@/pages/consultant/[slug]"
import ProductDetail from "@/pages/product/[slug]"
import Statistic from "@/pages/management/statistic"
import Schedule from "@/pages/management/schedule"
import ManagementProduct from "@/pages/management/product"
import ChangeProductInfo from "@/pages/management/[id]"
import TabLayout from "@/components/templates/TabLayout"
import Profile from "@/pages/profile"
import BankInformation from "@/pages/profile/bank"

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: PATH.home,
                element: <Home />,
            },
            {
                path: PATH.consultant,
                children: [
                    {
                        index: true,
                        element: <Consultant />,
                    },
                    {
                        path: PATH.consultantDetail,
                        element: <ConsultantDetail />
                    }
                ]
            },
            {
                path: PATH.product,
                children: [
                    {
                        index: true,
                        element: <Product />,
                    },
                    {
                        path: PATH.productDetail,
                        element: <ProductDetail />
                    }
                ]
            },
            {
                element: <AuthRouter redirect={PATH.home}/>,
                children: [
                    {
                        path: PATH.signin,
                        element: <SignIn />
                    },
                    {
                        path: PATH.signup,
                        element: <SignUp />
                    },
                    {
                        path: PATH.resetPassword,
                        element: <ResetPassword />
                    }
                ]
            },
            {
                element: <PrivateRouter redirect={PATH.signin}/>,
                children: [
                    {
                        path: PATH.management,
                        element: <TabLayout />,
                        children: [
                            {
                                index: true,
                                element: <Management />
                            },
                            {
                                path: PATH.statistic,
                                element: <Statistic />
                            },
                            {
                                path: PATH.schedule,
                                element: <Schedule />
                            },
                            {
                                path: PATH.productManagement,
                                element: <ManagementProduct />
                            },
                            {
                                path: PATH.changeProductDetail,
                                element: <ChangeProductInfo />
                            }
                        ]
                    },
                    {
                        path: PATH.profile,
                        element: <TabLayout />,
                        children: [
                            {
                                index: true,
                                element: <Profile />
                            },
                            {
                                path: PATH.bank,
                                element: <BankInformation />
                            }
                        ]
                    }
                ]
            },
            {
                path: '*',
                element: <Page404 />
            },
        ]
    }
]