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
        <p>Solo Order {id}</p>
    )
}

export default SoloOrderPage