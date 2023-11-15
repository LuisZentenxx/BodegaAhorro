import { BsFillTrashFill } from "react-icons/bs"


const Orders = () => {

    return (

        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">Product</th>
                        <th scope="col" className="px-4 py-3">Category</th>
                        <th scope="col" className="px-4 py-3">Quantity</th>
                        <th scope="col" className="px-4 py-3">Price</th>
                        <th scope="col" className="px-4 py-3">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b dark:border-gray-700">
                        <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"/>
                        <td className="px-4 py-3">adssd</td>
                        <td className="px-4 py-3">adssd</td>
                        <td className="px-4 py-3 flex items-center justify-center gap-4">
                            <BsFillTrashFill size={22}
                            className="text-red-400 cursor-pointer"/>
                        </td>
                    </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Orders