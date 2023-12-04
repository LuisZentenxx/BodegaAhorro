import { Link, useNavigate, Navigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { registerRequest } from '../api/users';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/auth';

const RegisterPage = () => {

  const navigate = useNavigate();
  const { isAuth } = useAuthStore();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const registerMutation = useMutation({
    mutationFn: () => registerRequest(email, name, password),
    onSuccess: () => {
      toast.success("Registro exitoso")
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Hubo un error")
      console.error(error)
    }
  });

  const handleMatch = () => {
    if (password !== rePassword || password.length < 6) {
      return {
        isValid: false,
        message: password.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : 'Las contraseñas deben coincidir',
      };
    } else {
      return { isValid: true, message: '' };
    }
  };

  const matchResult = handleMatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== rePassword) {
      toast.error("Las contraseñas deben coincidir")

    } if (password.length < 6 || rePassword.length < 6) {
      toast.error("La contraseña debe tener 6 caracteres minimo")
    }
    else {
      registerMutation.mutate()
    }
  };

  if (registerMutation.isLoading) return <p>Loading...</p>
  if (isAuth) return (<Navigate to="/" />)


  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[800px] lg:py-0">
      <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-slate-800 dark:text-white">
        <span>Bodega Ahorro</span>
      </Link>
      <div className="w-full md:w-[400px] lg:w-[500px] bg-slate-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-slate-800 md:text-2xl dark:text-white">
            Crea una nueva cuenta
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-800 dark:text-white">Tu correo</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="minombre@usuario.cl" />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-800 dark:text-white">Tu nombre</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre" />
            </div>

            {/* PASSWORD*/}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-slate-800 dark:text-white"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 dark:text-gray-200 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="re-password"
                className="block mb-2 text-sm font-bold text-slate-800 dark:text-white"
              >
                Confirmar Contraseña
              </label>

              <div className="relative">
                <input
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  type={showRePassword ? 'text' : 'password'}
                  name="re-password"
                  id="re-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 dark:text-gray-200 focus:outline-none"
                  onClick={() => setShowRePassword(!showRePassword)}
                >
                  {showRePassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>
            {matchResult.isValid ? (
              <p className="text-sm font-semibold text-green-600">Las contraseñas coinciden</p>
            ) : (
              <p className="text-sm font-semibold text-red-600">{matchResult.message}</p>
            )}

            <button type="submit" className="w-full text-white font-semibold bg-red-800 hover:bg-red-700 hover:font-bold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-200 dark:hover:bg-blue-100 dark:text-slate-800 dark:focus:ring-primary-800">Registrarse</button>
            <p className="text-sm font-semibold text-slate-800 dark:text-gray-200">
              ¿Ya tienes una cuenta? <Link to={'/login'} className="font-bold text-slate-800 hover:underline dark:text-blue-200">Inicia Sesión</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;