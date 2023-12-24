import { createRoot } from 'react-dom/client';
import React from "react";
import { RouterProvider } from './src/app/providers';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider/>
    </React.StrictMode>
);
