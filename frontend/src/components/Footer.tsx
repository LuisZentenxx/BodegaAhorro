import { useState } from 'react';

const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                            <a
                                href="#"
                                onClick={openModal}
                                className="block text-gray-200 hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-slate-800  dark:focus:ring-blue-800"
                                type="button"
                            >
                                Terminos y Condiciones
                            </a>

                            {isModalOpen && (
                                <div
                                    id="default-modal"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto bg-black bg-opacity-50"
                                >
                                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Terminos y Condiciones</h3>
                                                <button
                                                    type="button"
                                                    onClick={closeModal}
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            {/* Modal Términos y Condiciones */}
                                            <div className="p-4 md:p-5 space-y-4">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    Bienvenido/a a Bodega Ahorro, una plataforma de comercio electrónico que le ofrece la oportunidad de acceder a una variedad de productos de alta calidad. Antes de utilizar nuestro sitio web y servicios, le solicitamos que lea detenidamente y comprenda los siguientes Términos y Condiciones. Su acceso y uso de nuestro sitio web indican su aceptación y conformidad con estos términos. Si no está de acuerdo con alguna parte de estos términos, le recomendamos que se abstenga de utilizar nuestros servicios.
                                                </p>

                                                {/* Registro de Usuario */}
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-200">
                                                    <strong>1. Registro de Usuario:</strong>
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    1.1 Para acceder a ciertas funciones y servicios de Bodega Ahorro, es necesario registrarse como usuario. Al registrarse, usted se compromete a proporcionar información precisa y completa.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    1.2 Es responsabilidad del usuario mantener la confidencialidad de la información de su cuenta, incluyendo su nombre de usuario y contraseña. Usted es responsable de todas las actividades que ocurran bajo su cuenta.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    1.3 Al registrarse, usted acepta recibir comunicaciones por correo electrónico relacionadas con su cuenta y las transacciones realizadas en Bodega Ahorro.
                                                </p>

                                                {/* Compras y Pagos */}
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-200">
                                                    <strong>2. Compras y Pagos:</strong>
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    2.1 Bodega Ahorro utiliza el servicio de PayPal para procesar pagos. Al realizar una compra, usted acepta los términos y condiciones de PayPal.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    2.2 Los productos adquiridos a través de nuestro sitio web están sujetos a disponibilidad. Nos reservamos el derecho de modificar o discontinuar cualquier producto en cualquier momento sin previo aviso.
                                                </p>

                                                {/* Modificaciones */}
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-200">
                                                    <strong>3. Modificaciones a los Términos y Condiciones</strong>
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    3.1 Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
                                                </p>

                                                {/* TTerminación del Servicio */}
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-200">
                                                    <strong>4. Terminación del Servicio</strong>
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    4.1 Nos reservamos el derecho de terminar o suspender su cuenta y acceso a nuestros servicios en cualquier momento por incumplimiento de estos Términos y Condiciones.
                                                </p>
                                            </div>

                                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button
                                                    onClick={closeModal}
                                                    type="button"
                                                    className="text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-slate-800 dark:bg-gray-200 dark:hover:bg-blue-200 dark:focus:ring-slate-800"
                                                >
                                                    Acepto
                                                </button>
                                                <button
                                                    onClick={closeModal}
                                                    type="button"
                                                    className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                >
                                                    Rechazo
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-semibold text-gray-200 sm:text-center dark:text-slate-800">© 2023 Bodega Ahorro</span>
            </div>
        </footer>
    )
}

export default Footer