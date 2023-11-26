import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader"
import { get_solo } from "../api/products"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"
import Reviews from "../components/Reviews"

const SoloProductPage = () => {

    const { slug } = useParams();

    const { data, isError, isLoading } = useQuery({
        queryKey: ['products', slug],
        queryFn: () => get_solo(slug || ''),
    })

    if (isError) return toast.error("Error")
    if (isLoading) return <Loader />


    return (
        <>
            <div className="bg-slate-100 dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            {data.name}
                            <span className="text-green-600 ml-5">
                                ${data.price}
                            </span>
                        </h2>
                        <p className="mb-4 font-bold">
                            {data.description}
                        </p>
                    </div>
    
                    <img className="w-1/2 md:w-1/2 lg:w-3/4 mx-auto rounded-lg shadow-lg object-cover object-center"
                        src={`${import.meta.env.VITE_BACKEND_URL}${data.image}`}
                        alt={data.name}
                    />
                </div>
                <Reviews productId={data.id} reviews={data.reviews}/>
            </div>
        </>
    );
    
}

export default SoloProductPage