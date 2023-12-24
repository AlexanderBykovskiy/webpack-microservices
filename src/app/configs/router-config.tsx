import {createBrowserRouter} from "react-router-dom";
import React, {Suspense} from "react";
import {NotFound} from "@/shared/ui/not-found/not-found";
import {MainLayout} from "@/shared/layouts/main-layout/main-layout";
import {LazyAboutPage, LazyBlogPage, LazyShopPage} from "@/pages";
import {Loader} from "@/shared/ui/loader/Loader";

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
