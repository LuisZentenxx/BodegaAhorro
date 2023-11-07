import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteProduct, get_products } from "../api/products";
import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Product } from "../Interfaces";

const Products = () => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["products"], get_products, {
    getNextPageParam: (page: any) => page.meta.next,
  });

  const queryClient = useQueryClient();

  const deleteProdMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Producto borrado!");
    },
    onError: () => {
      toast.error("Hubo un error!");
    },
  });

  if (deleteProdMutation.isLoading) return <Loader />;


  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              ID Producto
            </th>
            <th scope="col" className="px-4 py-3">
              Nombre
            </th>
            <th scope="col" className="px-4 py-3">
              Precio
            </th>
            <th scope="col" className="px-4 py-3">
              Cant. Stock
            </th>
            <th scope="col" className="px-4 py-3 flex justify-center gap-4">
              Acciones
              <Link to="add">
                    <AiFillPlusSquare
                      size={22}
                      className="text-green-300 cursor-pointer"
                    />
                  </Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.pages.map((page: any) => (
            page.data.map((product: Product) => (
              <tr key={product.id} className="border-b dark:border-gray-700">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.id}
                </th>
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">$ {product.price}</td>
                <td className="px-4 py-3">{product.count_in_stock}</td>
                <td className="px-4 py-3 flex items-center justify-center gap-4">
                  <BsFillTrashFill
                    onClick={() => {
                      if (product.id !== undefined) {
                        deleteProdMutation.mutate(product.id)
                      }
                    }
                  }
                    size={22}
                    className="text-red-300 cursor-pointer"
                  />
                  <Link to={`edit/${product.id}`}>
                    <AiFillEdit
                      size={22}
                      className="text-white cursor-pointer"
                    />
                  </Link>

              
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
      {!isLoading && data?.pages.length === 0 && (
        <p className="text-xl text-slate-800 dark:text-slate-200">
          No more results
        </p>
      )}
      {!isLoading &&
        data?.pages?.length !== undefined &&
        data.pages.length > 0 &&
        hasNextPage && (
          <div ref={ref}>
            {isLoading || isFetchingNextPage ? <p>Loading...</p> : null}
          </div>
        )}
    </div>
  );

};

export default Products;
