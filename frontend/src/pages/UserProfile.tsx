import { useAuthStore } from "../store/auth";
import { Token } from "../Interfaces";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const token: string = useAuthStore.getState().access;

    const tokenDecoded: Token = jwt_decode(token);
    const name = tokenDecoded.name;
    const email = tokenDecoded.email;
    const avatar = tokenDecoded.avatar;

    return (
        <div className="flex justify-center pt-[100px]">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
                        src={`${import.meta.env.VITE_BACKEND_URL}${avatar}`}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                       {name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {email}
                    </span>
                    <div className="flex mt-4 md:mt-6">
                        <Link
                            to={`edit/${email}`}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                        >
                            Editar Perfil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
