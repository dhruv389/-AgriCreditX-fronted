import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BankProfile from "./pages/BankProfile";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "bankprofile", element: <BankProfile /> },
        
      

        // {
        //   path: 'admindashboard',
        //   element: (
        //     <PrivateRoute>
        //      <AdiminDashboard/>
        //     </PrivateRoute>
        //   ),
        // },
 
       
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
