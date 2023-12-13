import { Link, useNavigate, Navigate } from 'react-router-dom'
import { loginRequest } from '../api/users';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/auth';

const LoginPage = () => {

  const navigate = useNavigate();
  const { isAuth } = useAuthStore();
  const setToken = useAuthStore((state) => state.setToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: () => loginRequest(email, password),
    onSuccess: (response) => {
      setToken(response.data.access, response.data.refresh)
      toast.success("Inicio exitoso")
      navigate("/");
    },
    onError: (error) => {
      toast.error("Credenciales Inválidas")
      console.error(error)
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

     // Validar campos vacíos
     if (!email || !password) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    loginMutation.mutate()
  };

  if (loginMutation.isLoading) return <p>Loading...</p>
  if (isAuth) return (<Navigate to="/" />)

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[800px] lg:py-0">
      <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-700 dark:text-white">
        <span>Bodega Ahorro</span>
      </Link>
      <div className="w-full md:w-[400px] lg:w-[500px] bg-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-slate-800 md:text-2xl dark:text-white">
            Inicia Sesión
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-800 dark:text-white">Tu correo</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="minombre@usuario.cl" />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-semibold text-slate-800 dark:text-white">Contraseña</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>


            <button type="submit" className="w-full text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-blue-100 dark:focus:ring-primary-800">Iniciar Sesión</button>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">
              ¿No tienes una cuenta aún? <Link to={'/register'} className="font-bold text-slate-800 hover:underline dark:text-blue-300">Registrate ya!</Link>
            </p>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">
              ¿Olvidaste tu contraseña? <Link to={'/resetPassword'} className="font-bold text-slate-800 hover:underline dark:text-blue-300">Recuperala aquí!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;