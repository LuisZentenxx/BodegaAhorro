import { useState } from 'react'
import { Link } from 'react-router-dom';

const InfoCard = () => {

    const [activeTab, setActiveTab] = useState('stats');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul
                className="text-sm font-medium text-center text-gray-800 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                id="fullWidthTab"
                data-tabs-toggle="#fullWidthTabContent"
                role="tablist"
            >

                {/* HORARIOS TAB */}
                <li className="w-full">
                    <button
                        onClick={() => handleTabClick('stats')}
                        id="stats-tab"
                        data-tabs-target="#stats"
                        type="button"
                        role="tab"
                        aria-controls="stats"
                        aria-selected={activeTab === 'stats'}
                        className={`inline-block w-full p-4 rounded-ss-lg bg-red-800 hover:bg-red-700 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'stats' ? 'text-gray-200' : 'text-gray-200'}`}>
                        Horarios
                    </button>
                </li>

                {/* UBICACIÓN TAB */}
                <li className="w-full">
                    <button
                        onClick={() => handleTabClick('about')}
                        id="about-tab"
                        data-tabs-target="#about"
                        type="button"
                        role="tab"
                        aria-controls="about"
                        aria-selected={activeTab === 'about'}
                        className={`inline-block w-full p-4 bg-red-800 hover:bg-red-700 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${activeTab === 'about' ? 'text-gray-200' : 'text-gray-200'}`}
                    >
                        Ubicación
                    </button>
                </li>
            </ul>

            <div id="fullWidthTabContent" className="border-gray-200 dark:border-gray-600">

                {/* HORARIOS INFO */}
                <div
                    className={`p-4 rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'stats' ? 'block' : 'hidden'}`}
                    id="stats"
                    role="tabpanel"
                    aria-labelledby="stats-tab"
                    style={{ 
                        backgroundImage: 'url("https://i.ibb.co/F3PnGkg/bodega-Ahorro.jpg")', // Reemplaza URL_DE_TU_IMAGEN con la URL de tu imagen
                        backgroundSize: 'cover', // Puedes ajustar esto según tus necesidades
                        backgroundPosition: 'center center', // Puedes ajustar esto según tus necesidades
                        backgroundRepeat: 'no-repeat' // Puedes ajustar esto según tus necesidades
                      }}
                >
                    <div className="grid text-center max-w-screen-xl grid-cols-2 gap-10 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                        <div className="col-span-2 sm:col-span-1 mx-auto flex flex-col items-center justify-center">
                            <dt className=" text-center mb-2 text-3xl text-white font-extrabold">Lunes a Viernes</dt>
                            <dd className="text-gray-200 dark:text-gray-400">09:00 - 17:00</dd>
                        </div>
                        <div className="col-span-2 sm:col-span-1 mx-auto flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold text-white">Sábado</dt>
                            <dd className="text-gray-200 dark:text-gray-400">09:00 - 15:00</dd>
                        </div>
                        <div className="col-span-2 sm:col-span-1 mx-auto flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl font-extrabold text-white">Domingo y Festivos</dt>
                            <dd className="text-gray-200 dark:text-gray-400">Cerrado</dd>
                        </div>
                    </div>
                </div>

                {/* UBICACIÓN INFO */}
                <div
                    className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${activeTab === 'about' ? 'block' : 'hidden'}`}
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                    style={{ 
                        backgroundImage: 'url("https://i.ibb.co/F3PnGkg/bodega-Ahorro.jpg")', // Reemplaza URL_DE_TU_IMAGEN con la URL de tu imagen
                        backgroundSize: 'cover', // Puedes ajustar esto según tus necesidades
                        backgroundPosition: 'center center', // Puedes ajustar esto según tus necesidades
                        backgroundRepeat: 'no-repeat' // Puedes ajustar esto según tus necesidades
                      }}
                >
                    <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-white dark:text-white">Estamos ubicados en</h2>
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2 rtl:space-x-reverse items-center">
                            <span className="leading-tight text-white font-bold">Baquedano 1475, 2430000 Quilpué, Valparaíso</span>
                        </li>
                        <li className="flex space-x-2 rtl:space-x-reverse items-center">
                            <button className="leading-tight bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-200 dark:hover:bg-slate-300 dark:text-slate-800">
                                <Link to="https://maps.app.goo.gl/Gbycpoh5J2PJmqtz9" target="_blank" rel="noopener noreferrer">
                                    Ver mapa
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>   
            </div>
        </div>
    )
}

export default InfoCard