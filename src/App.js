import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


const App = () => {
  return (
     <Suspense>
        <Outlet/>
        <ToastContainer autoClose={300}/>
     </Suspense>
  );
}

export default App;
