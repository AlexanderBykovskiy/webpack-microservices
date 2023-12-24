import React from "react";
import {router} from "../../configs/router-config";
import {RouterProvider} from "react-router-dom";

const WithRouterProvider: React.FC = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default WithRouterProvider;
