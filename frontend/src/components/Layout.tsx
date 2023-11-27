import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';

const Layout = () => {

    return (
        <div>
            <Toaster />
            <Header />
            <div className="min-h-[1000px] bg-slate-200 dark:bg-gray-900">
                <h1
                    className="
                text-4xl pt-10 text-center font-bold text-slate-800
                dark:text-gray-200"
                >
                    Mira nuestros productos
                </h1>
                <Outlet />
                <Footer/>
            </div>
        </div>
    )
}

export default Layout