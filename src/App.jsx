import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer.jsx';



export default function App() {

  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}