import {lazy} from "react";

const LazyAboutPage = lazy(() => import("./about-page/about-page"));
const LazyShopPage = lazy(() => import("./shop-page/shop-page"));
const LazyBlogPage = lazy(() => import("./blog-page/blog-page"));

export {
    LazyShopPage,
    LazyBlogPage,
    LazyAboutPage,
}
