import { Link } from "react-router-dom";
import { Product } from "../Interfaces";
import { useCartStore } from "../store/cart";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div>
      <div className="max-w-xs bg-red-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full"
          src={`${import.meta.env.VITE_BACKEND_URL}${product.image}`}
        />

        <div className="p-3">
          <h5 className="mb-1 text-lg font-bold tracking-tight text-white dark:text-white">
            {product.name}
          </h5>

          <div className="flex justify-between">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-white dark:text-slate-200">
              $ {product.price}
            </h5>
          </div>

          <p className="mb-2 text-sm font-normal text-white dark:text-gray-400">
            {product.description}
          </p>

          <div className="flex justify-between">
            <button
              onClick={() => addToCart(product)}
              className="inline-flex items-center px-2 py-1 text-sm font-semibold text-center text-black font-bold bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:font-semibold dark:hover:bg-gray-700 dark:hover:text-white dark:hover:font-bold dark:focus:ring-blue-800"
              style={{ marginTop: "8px" }}
            >
              Agregar al carrito
              <svg
                aria-hidden="true"
                className="w-3 h-3 ml-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <Link
              to={`/product/${product.slug}`}
              className="inline-flex items-center px-2 py-1 text-sm font-semibold text-center text-black bg-white rounded-lg hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:font-semibold dark:hover:bg-gray-700 dark:hover:text-white dark:hover:font-bold dark:focus:ring-blue-800"
            >
              Ver
              <svg
                aria-hidden="true"
                className="w-3 h-3 ml-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
