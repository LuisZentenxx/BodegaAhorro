import { useState } from 'react';

const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenTeam, setIsModalOpenTeam] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeModalTeam = () => {
        setIsModalOpenTeam(false);
    };

    const openModalTeam = (e: any) => {
        e.preventDefault();
        console.log("Abriendo modal");
        setIsModalOpenTeam(true);
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
                            <a
                                href="#"
                                onClick={openModalTeam}
                                className="hover:underline me-4 md:me-6 text-gray-200 dark:text-slate-800"
                                type="button"
                            >
                                Equipo de Desarrollo
                            </a>

                            {isModalOpenTeam && (

                                <div
                                    id="select-modal"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full overflow-y-auto bg-black bg-opacity-50"
                                >
                                    <div className="relative p-4 w-full max-w-md max-h-full">

                                        <div className="relative bg-slate-700 rounded-lg shadow dark:bg-gray-700">

                                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-lg font-semibold text-white dark:text-white">
                                                    ReactSynergy
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={closeModalTeam}
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-4 md:p-5">
                                                <p className="text-gray-200 dark:text-gray-400 mb-4">Nuestro Equipo</p>
                                                <ul className="space-y-4 mb-4">
                                                    <li>
                                                        <input type="radio" id="job-1" name="job" value="job-1" className="hidden peer" required />
                                                        <label htmlFor="job-1" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-slate-700 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-300 peer-checked:text-blue-600 hover:bg-slate-800 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                                                            <div className="block">
                                                                <div className="w-full text-lg font-semibold text-white dark:text-gray-200">Luis Zenteno</div>
                                                                <div className="w-full text-gray-200 dark:text-white">Desarrollador Full Stack</div>
                                                            </div>
                                                            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#53C1DE" viewBox="0 0 20 18">
                                                                <path d="M19.718 9c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C8.45.589 6.7.061 5.468.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545C2.057 6.319.718 7.571.718 9c0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM6.3 9c.266-.598.563-1.182.888-1.75.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654A19.3 19.3 0 0 1 14.136 9a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.163 20.163 0 0 1-1.066-1.653A19.33 19.33 0 0 1 6.3 9Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.113 14.113 0 0 1-.478 1.611h.002ZM10.217 3.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.25 16.25 0 0 0 7.71 4.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM1.718 9c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C2.692 10.83 1.718 9.9 1.718 9Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.232 14.232 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.562 16.562 0 0 0 15.216 9c.352-.811.638-1.65.856-2.507C17.743 7.17 18.718 8.1 18.718 9c0 .9-.975 1.83-2.646 2.507h-.004Z" />
                                                                <path d="M10.215 10.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.788 1.788 0 0 0 1.786 1.794Z" />
                                                            </svg>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="job-2" name="job" value="job-2" className="hidden peer" />
                                                        <label htmlFor="job-2" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-slate-700 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#53C1DE] hover:bg-slate-800 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                                                            <div className="block">
                                                                <div className="w-full text-lg text-white font-semibold">Mariel Suárez</div>
                                                                <div className="w-full text-gray-200 dark:text-gray-400">Analista de Sistemas</div>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#53C1DE" className="w-8 h-8" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                                                            </svg>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="job-3" name="job" value="job-3" className="hidden peer" />
                                                        <label htmlFor="job-3" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-slate-700 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#53C1DE] hover:bg-slate-800 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                                                            <div className="block">
                                                                <div className="w-full text-lg text-white font-semibold">Diego Cornejo</div>
                                                                <div className="w-full text-gray-200 dark:text-gray-400">Testing</div>
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#53C1DE" className="w-8 h-8" viewBox="0 0 16 16">
                                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1" />
                                                                <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905" />
                                                            </svg>

                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>



                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-gray-200 dark:text-slate-800">Acerca de</a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={openModal}
                                className="hover:underline me-4 md:me-6 text-gray-200 dark:text-slate-800"
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
            <div className="w-full pt-2 pb-2 text-center bg-gray-200 dark:bg-slate-800">
            <span className="text-black font-semibold dark:text-white">Desarollado por <a href="https://luiszentenoweb.netlify.app/" className="hover:underline">ReactSynergy™</a></span>
                </div>
        </footer>
        
    )
}

export default Footer