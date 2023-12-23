import { createRoot } from 'react-dom/client';
import {Test} from "./src/shared/ui/test-component/test";
import React from "react";

const root = createRoot(document.getElementById('root'));
root.render(<Test/>);
