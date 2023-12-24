import {createBrowserRouter} from "react-router-dom";
import React, {Suspense} from "react";
import {Test} from "../../shared/ui/test-component/test";
import {NotFound} from "../../shared/ui/not-found/not-found";
import {MainLayout} from "../../shared/layouts/main-layout/main-layout";
import ShopPage from "../../pages/shop-page/shop-page";
import {LazyAboutPage, LazyBlogPage, LazyShopPage} from "../../pages";
import {Loader} from "../../shared/ui/loader/Loader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index: true, element: <Suspense fallback={<Loader/>}><LazyShopPage/></Suspense>},
            {path: 'blog', element: <Suspense fallback={<Loader/>}><LazyBlogPage/></Suspense>},
            {path: 'about', element: <Suspense fallback={<Loader/>}><LazyAboutPage/></Suspense>},
            {path: '*', element: <NotFound/>},
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);
