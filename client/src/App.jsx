import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// styles
import './styles/index.css'

// pages and components
import Header from '/src/pages/components/header/Header'
import Footer from '/src/pages/components/footer/Footer'
import Dashboard from '/src/pages/dashboard/Dashboard'
import NotFoundPage from '/src/pages/not-found/NotFoundPage'
import NutritionPage from './pages/nutrition/NutritionPage'
import FitnessPage from './pages/fitness/FitnessPage'
import UserPage from './pages/user/UserPage'
import ProgressHistory from './pages/progress-history/ProgressHistory'
import Login from './pages/login/Login'
import Signup from './pages/signup/SIgnup'


function Layout() {
  return (
    // to set up the header and footer components on all the pages 
    <div className='main-body'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function AuthLayout() {
  // No header or footer 
  return (
    <main className="auth-layout-main">
      <Outlet />
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/nutrition',element: <NutritionPage /> },
      { path: '/fitness', element: <FitnessPage /> },
      { path: '/user', element: <UserPage /> },
      { path: '/progress-history', element: <ProgressHistory /> }
    ]
  }, 
  {
    path: '/auth',
    element: <AuthLayout />,   // login/signup without header/footer
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

export default function App() {


  return( 
    <>
      {/* <Header /> */}
      <RouterProvider router={router}/>
      {/* <Footer />  */}
    </>

  )
}