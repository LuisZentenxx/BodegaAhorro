import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import InfoCard from './InfoCard';


const Layout = () => {

    return (
        <div>
            <Toaster />
            <Header />
            <InfoCard/>
            <div className="min-h-[1000px] bg-slate-200 dark:bg-gray-900">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout