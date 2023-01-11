import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.scss';
import useFetch from "./hooks/useFetch";
import Discover from './pages/Discover/Discover'


const Layout = () => {
  return (
    <div className='app'>
      {/* <Top />
      <Navbar /> */}
      <Outlet />
      {/* <Contact />
      <Footer /> */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Discover />
      },

    ]
}
])
function App() {
 
  return (
    <div>
      
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
