import { useState } from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { create_review } from "../api/products";
import Rating from "./Rating";

interface Props {
    productId: number;
    reviews: [];
}

const Reviews = ({ productId, reviews }: Props) => {

    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [show, setShow] = useState(false)

    const queryClient = useQueryClient();

    const createReviewMut = useMutation({
        mutationFn: () => create_review(description, rating, productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Opinión agregada correctamente");
            setShow(false);
        },
        onError: () => {
            toast.error("Error");
        },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createReviewMut.mutate();
    };

    return (
        <>
            {show &&
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-black  w-90 p-6 rounded-md shadow-md">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShow(false)}
                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
    
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Descripción
                                    </label>
                                    <input
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Cuéntanos sobre el producto"
                                    />
                                </div>
    
                                <div className="star-rating text-3xl text-center mt-8">
                                    {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                            <button
                                                type="button"
                                                key={index}
                                                className={index <= ((rating && hover) || hover) ? "on" : "off"}
                                                onClick={() => setRating(index)}
                                                onMouseEnter={() => setHover(index)}
                                                onMouseLeave={() => setHover(rating)}
                                            >
                                                <span> <FaStar /> </span>
                                            </button>
                                        )
                                    })}
                                </div>
    
                                <button
                                    type="submit"
                                    className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    <svg
                                        className="mr-1 -ml-1 w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    Agregar nuevo producto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
    
            <section className="bg-slate-200 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-red-800 dark:text-white">¡Panel de Opiniones!</h2>
                        <p className="mb-8 font-light font-semibold text-gray-600 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explora las opiniones de nuestros clientes.
                        </p>
                        <button
                            onClick={() => setShow(true)}
                            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-center text-white bg-red-800 rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-primary-300 dark:bg-gray-200 dark:text-slate-800 dark:hover:bg-slate-300 dark:focus:ring-primary-800">
                            ¡Agrega una Opinión Ahora!
                        </button>
                    </div>
                </div>
            </section>
    
            {reviews && reviews.map((r: any) => (
                <article className="w-4/5 mx-auto bg-slate-200 dark:bg-gray-800 p-6 my-8 rounded-md shadow-md">
                    <div className="flex items-center mb-4 space-x-4">
                    <img 
                    className="w-10 h-10 rounded-full" 
                    src={`${import.meta.env.VITE_BACKEND_URL}${r.avatar}`}
                    alt="" />
                    <div className="space-y-1 font-semibold text-slate-800 dark:text-white">
                        <p>{r.user}</p>
                    </div>
                </div>
                <Rating value={r.rating}/>
                <footer className="mb-5 text-sm text-slate-800 dark:text-gray-400">
                    <p>{r.created.slice(0,10)}</p>
                </footer>
                <p 
                className="mb-2 text-slate-800 dark:text-gray-200">
                    {r.description}
                </p>
                </article>
            ))}
        </>
    );
    

}
export default Reviews;

