const Footer = () => {

    return (




        <footer className="bg-red-800 dark:bg-gray-200">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl text-gray-200 font-bold whitespace-nowrap dark:text-slate-800">Bodega Ahorro</span>
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-gray-200 dark:text-slate-800">Nuestro equipo</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-gray-200 dark:text-slate-800">Terminos y Condiciones</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline text-gray-200 dark:text-slate-800">
                                Ubicación y Horarios
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-semibold text-gray-200 sm:text-center dark:text-slate-800">© 2023 Bodega Ahorro . All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer