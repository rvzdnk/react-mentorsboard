import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import PageLoader from './components/PageLoader/PageLoader';


const App = () => {
  return (
     <Suspense fallback={<PageLoader/>}>
        <Outlet/>
        <ToastContainer autoClose={300}/>
     </Suspense>
  );
}

export default App;
