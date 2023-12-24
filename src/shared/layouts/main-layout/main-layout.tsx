import React from "react";
import classes from "./style.module.scss"
import {Outlet} from "react-router-dom";

export const MainLayout: React.FC = () => {
    return(
        <div className={classes.mainWrapper}>
            <header className={classes.header}>
                <div>logo</div>
                <div className={classes.navigation}>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
