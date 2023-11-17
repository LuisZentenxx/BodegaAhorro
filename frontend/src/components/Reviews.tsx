import toast from "react-hot-toast";
import { create_review } from "../api/products";
import { UseMutateAsyncFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Reviews = () => {


    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Reviews of Arch Linux</h2>
                        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the reivews of this product
                        </p>
                        <button
                            className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Agrega una Opinion
                        </button>
                    </div>
                </div>
            </section>

            <article className="container mx-auto ">
                <div className="flex items-center mb-4 space-x-4">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>Agust Fricke</p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the Buenos Aires 17/12/2025</p></footer>
                <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
            </article>
        </>
    )

}
export default Reviews;