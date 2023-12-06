import { Link } from "react-router-dom"

const CategoryPage = () => {

    return (
        <>
            <h1 className="text-center pt-10 pb-10 text-4xl font-bold text-slate-800 dark:text-white">
                Categorías
            </h1>
            <div className="flex justify-center">
                <div className="p-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-16">
                    <div className="max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Abarrotes`} className="block">
                            <div className="p-5">
                                <h5 className="mb-2 text-3xl text-center font-extrabold leading-6 text-gray-900 dark:text-white">
                                    Abarrotes
                                </h5>
                            </div>
                        </Link>
                    </div>

                    <div className="max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Pastas`} className="block">
                            <div className="p-5">
                                <h5 className="mb-2 text-3xl text-center font-extrabold leading-6 text-gray-900 dark:text-white">
                                    Pastas
                                </h5>
                            </div>
                        </Link>
                    </div>


                    <div className="max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Bebidas`} className="block">
                            <div className="p-5">
                                <h5 className="mb-2 text-3xl text-center font-extrabold leading-6 text-gray-900 dark:text-white">
                                    Bebidas
                                </h5>
                            </div>
                        </Link>
                    </div>

                    <div className="max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Lácteos`} className="block">
                            <div className="p-5">
                                <h5 className="mb-2 text-3xl text-center font-extrabold leading-6 text-gray-900 dark:text-white">
                                    Lácteos
                                </h5>
                            </div>
                        </Link>
                    </div>

                    <div className="max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Carnes`} className="block">
                            <div className="p-5">
                                <h5 className="mb-2 text-3xl text-center font-extrabold leading-6 text-gray-900 dark:text-white">
                                    Carnes
                                </h5>
                            </div>
                        </Link>
                    </div>

                    <div className="max-w-sm overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/cate/Refinados`} className="block">
                            <div className="p-5">
                                <h5 className="mb-2 text-3xl text-center font-extrabold leading-6 text-gray-900 dark:text-white">
                                    Refinados
                                </h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-xl italic font-medium text-gray-900 dark:text-white">En nuestra bodega, descubrirás una variedad excepcional a precios irresistibles. Calidad y asequibilidad se unen para brindarte una experiencia única en cada compra.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="mb-10 w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                            <cite className="mb-10 pe-3 font-medium text-gray-900 dark:text-white">Julio Suarez</cite>
                            <cite className="mb-10 ps-3 text-sm text-gray-500 dark:text-gray-400">Dueño Bodega Ahorro</cite>
                        </div>
                </figcaption>
            </figure>
        </>

    )
}

export default CategoryPage


