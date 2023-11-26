import { useParams } from "react-router-dom"
import { solo_order } from "../api/orders";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const SoloOrderPage = () => {

    const { id } = useParams();

    let new_id: number;

    if (id !== undefined) {
        new_id = Number(id);
    }
    const { data, isError, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: () => solo_order(new_id)
    })

    if (isError) return toast.error("Error")
    if (isLoading) return <Loader />
    
    return (
        
        <div className="overflow-x-auto w-4/5 mx-auto px-5 pt-11">
            <h1 className="w-full text-xl text-center text-slate-800 dark:text-gray-100 mb-5 font-bold">Compra</h1>
            <table className="w-full text-sm text-left bg-slate-300 dark:text-slate-800 font-semibold">
                <thead className="text-xs text-gray-700 uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-100">
                    <tr>
                        
                        <th scope="col" className="px-4 py-3 text-gray-200">
                            ID Compra
                        </th>
                        
                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Precio Total
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Fecha Compra
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Estado Orden
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Fecha Entrega
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="border-b dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-4 py-3 whitespace-nowrap"
                        >
                            {data.id}
                        </th>

                        <td className="px-4 py-3">
                            $ {data.total_price}
                        </td>

                        <td className="px-4 py-3">
                            
                            {data && data.created_at !== undefined && (
                                <>
                                {data.created_at.slice(0,10)}
                                </>
                            )}
                        </td>

                        <td className="px-4 py-3">
                            {data.is_delivered === false || null ? (
                                <p>No Recibido</p>
                            ) : (
                                <p>Recibido</p>
                            )
                            }
                        </td>

                        <td className="px-4 py-3">
                            {data && data.delivered_at !== undefined && (
                                <>
                                    {data.delivered_at.slice(0, 10)}
                                </>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>

            <h1 className="w-full text-xl text-center font-bold text-slate-800 dark:text-gray-100 mt-10 mb-5">Detalle de Productos</h1>
            <table className="w-full text-sm text-left bg-slate-300 text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-200">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-gray-200">
                            ID Producto
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Cantidad
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Precio Unitario
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Precio Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.order_items && data.order_items.map((p: any) => (
                    <tr className="border-b dark:border-gray-700">
                        <td
                            scope="row"
                            className="px-4 py-3 font-semibold text-slate-700 whitespace-nowrap dark:text-slate-800"
                        >
                            {p.id}
                        </td>

                        <td className="px-4 py-3 text-slate-800 font-semibold">
                            {p.quantity}
                        </td>

                        <td className="px-4 py-3 font-semibold text-slate-800">
                            $ {p.price}
                        </td>

                        <td className="px-4 py-3 font-semibold text-slate-800">
                            $ {p.price * p.quantity}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SoloOrderPage