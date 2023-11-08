import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import { useSearchStore } from '../store/search';
import SearchResultsPage from '../pages/SearchResultsPage';

const Layout = () => {

    const searchTerm = useSearchStore((state) => state.searchTerm);

    console.log(searchTerm)

    return (
        <div>
            <Toaster />
            <Header />
            <div className="min-h-[1000px] bg-white dark:bg-gray-900">
                {searchTerm !== '' ? (
                    <SearchResultsPage />
                ): (
                        <Outlet />
                )}

            </div>
        </div>
    )
}

export default Layout