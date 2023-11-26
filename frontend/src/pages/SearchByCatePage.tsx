import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { cate_api } from "../api/products";
import Loader from "../components/Loader";
import { toast } from "react-hot-toast";
import { Product } from "../Interfaces";
import { useCartStore } from "../store/cart";

const SearchByCatePage = () => {

    const { cate } = useParams()
    const addToCart = useCartStore(state => state.addToCart)

    const { data, isError, isLoading } = useQuery({
        queryKey: ['products', cate],
        queryFn: () => cate_api(cate || ''),
    })

    if (isError) return toast.error("Error!")
    if (isLoading) return <Loader />

    return (
        <div className="flex justify-center">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">

                {data && data.map((product: Product) => (
                    <div className="max-w-sm bg-red-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img
                            className="rounded-t-lg"
                            src={`${import.meta.env.VITE_BACKEND_URL}${product.image}`}
                            alt=""
                        />

                        <div className="p-5 ">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                {product.name}
                            </h5>
                            <div className="flex justify-between">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-slate-200">
                                    $ {product.price}
                                </h5>
                            </div>

                            <p className="mb-3 font-normal text-white dark:text-gray-400">
                                {product.description}
                            </p>

                            <button
                                onClick={() => addToCart(product)}
                                className="inline-flex items-center
                        mx-3 px-3 py-2 text-sm 
                        font-semibold text-center text-black
                        bg-gray-200 rounded-lg hover:bg-gray-300 
                        focus:ring-4 focus:outline-none focus:ring-blue-300
                        dark:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                        dark:hover:font-bold
                        dark:focus:ring-blue-800"
                            >
                                Agregar al Carrito
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>

                            <Link
                                to={`/product/${product.slug}`}
                                className="inline-flex items-center mx-3
        px-3 py-2 text-sm font-semibold text-center text-black 
        bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:bg-gray-200 
        dark:hover:bg-gray-700 dark:hover:text-white dark:hover:font-bold dark:focus:ring-blue-800"
                            >
                                Ver
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )

}
export default SearchByCatePage;