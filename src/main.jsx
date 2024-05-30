import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<ChakraProvider>
<div>
      <RouterProvider router = {router}/>
    </div>
    </ChakraProvider>
   
  </React.StrictMode>,
)
