const Stadistics = () => {

    return (
        <>
            <h1 className="text-gray-200 text-2xl font-bold text-center mt-11">Productos más vendidos</h1>
            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Nombre Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                Ganancias
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4 text-slate-800 dark:text-green-400">
                               $ 2999
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-200 bg-red-800 dark:bg-slate-200 dark:text-slate-800">
                            <th scope="row" className="px-6 py-3 text-base">Total</th>
                            <td className="px-6 py-3">3</td>
                            <td className="px-6 py-3 font-bold">$ 21,000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <h1 className="text-gray-200 text-2xl font-bold text-center mt-11">Categoría más vendida</h1>
            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Nombre Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                Ganancias
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4 text-slate-800 dark:text-green-400">
                               $ 2999
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-200 bg-red-800 dark:bg-slate-200 dark:text-slate-800">
                            <th scope="row" className="px-6 py-3 text-base">Total</th>
                            <td className="px-6 py-3">3</td>
                            <td className="px-6 py-3 font-bold">$ 21,000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>



        </>
    )
}

export default Stadistics