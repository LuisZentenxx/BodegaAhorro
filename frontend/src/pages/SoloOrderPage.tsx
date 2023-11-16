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
        queryKey: ['order'],
        queryFn: () => solo_order(new_id)
    })

    if (isError) return toast.error("Error")
    if (isLoading) return <Loader />

    return (
        <div className="overflow-x-auto container mx-auto px-5 pt-11">
            <h1 className="w-full text-xl text-center text-white-500 dark:text-gray-100 mb-5">Compra</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            ID Compra
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Precio Total
                        </th>

                        <th scope="col" className="px-4 py-3">
                            Fecha de Compra
                        </th>

                        <th scope="col" className="px-4 py-3">
                            Método de Pago
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {data.id}
                        </th>

                        <td className="px-4 py-3">
                            $ {data.total_price}
                        </td>

                        <td className="px-4 py-3">
                            {data.created_at.slice(0, 10)}
                        </td>

                        <td className="px-4 py-3">
                            PayPal
                        </td>
                    </tr>
                </tbody>
            </table>

            <h1 className="w-full text-xl text-center text-white-500 dark:text-gray-100 mt-10 mb-5">Detalle de Productos</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            ID Producto
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Cantidad
                        </th>

                        <th scope="col" className="px-4 py-3">
                            Precio Unitario
                        </th>

                        <th scope="col" className="px-4 py-3">
                            Precio Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.order_items && data.order_items.map((p: any) => (<tr className="border-b dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {p.product}
                        </th>

                        <td className="px-4 py-3">
                            {p.quantity}
                        </td>

                        <td className="px-4 py-3">
                            $ {p.price}
                        </td>

                        <td className="px-4 py-3">
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