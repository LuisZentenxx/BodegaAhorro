import { useParams } from "react-router-dom"
import { solo_order } from "../api/orders";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa";


const SoloOrderPage = () => {

    const { id } = useParams();

    let new_id: number;

    if (id !== undefined) {
        new_id = Number(id);
    }

    const generatePDF = () => {
        if (data) {
            const pdf = new jsPDF({ format: 'a4' });
            pdf.setFont("helvetica", "normal");

            // Encabezado
            pdf.setFontSize(20);
            pdf.text("Boleta de Compra", 20, 15);
            pdf.text("------------------------", 20, 20);

            // Información de la compra
            pdf.setFontSize(14);
            pdf.text(`ID Compra: ${data.id}`, 20, 30);
            pdf.text(`Fecha Compra: ${data.created_at ? data.created_at.slice(0, 10) : ""}`, 20, 45);
            pdf.text(`Fecha Entrega: ${data.delivered_at ? data.delivered_at.slice(0, 10) : ""}`, 20, 60);

            // Detalles de productos
            pdf.setFontSize(16);
            pdf.text("Detalle de Productos", 20, 80);

          
           

            // Total de la compra
            const totalYPosition = 95 + data.order_items.length * 20 + 10;
            pdf.text(`Total: $${data.total_price}`, 140, totalYPosition);

            // Pie de página
            pdf.setFontSize(12);
            const date = new Date();
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            pdf.text(`Fecha de emisión: ${formattedDate}`, 20, totalYPosition + 20);

            pdf.save("order_details.pdf");
        }
    };

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
                            Fecha Entrega
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Estado Orden
                        </th>

                        <th scope="col" className="px-4 py-3 text-gray-200">
                            Fecha Compra
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
                                    {data.created_at.slice(0, 10)}
                                </>
                            )}
                        </td>

                        <td className="px-4 py-3">
                            {data.is_delivered === false || null ? (
                                <p>No Entregado</p>
                            ) : (
                                <p>Entregado</p>
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
            <button
                className="mt-10 mb-10 bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded dark:bg-gray-200 dark:text-slate-800 dark:hover:bg-blue-100"
                onClick={generatePDF}
            >
                <FaFilePdf className="" />
                Descargar PDF
            </button>

        </div>
    )
}

export default SoloOrderPage