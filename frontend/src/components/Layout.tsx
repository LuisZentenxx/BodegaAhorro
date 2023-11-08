import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import { useSearchStore } from '../store/search';

const Layout = () => {

    const searchTerm = useSearchStore((state) => state.searchTerm);
    /*
        if (searchTerm !== '') {
            resultados
        } else{
         outlet
     }*/

    console.log(searchTerm)

    return (
        <div>
            <Toaster />
            <Header />
            <div className="min-h-[1000px] bg-white dark:bg-gray-900">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout