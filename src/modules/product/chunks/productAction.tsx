import { Button } from "@/components/ui/button";
import { ProductType } from "@/shared/types";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { addToCart, reduceCartItems } from "@/store/features/cartSlice";
import { EditIcon, MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { CartType } from "@/api/product/types";
import ProductAddEditDialog from "./productDialog";
import ProductDelete from "./productDelete";

const productAction = ({ product }: { product: ProductType }) => {
  const cartItems = useAppSelector(
    (state: RootState) => state.cart.cartItems || []
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-evenly space-x-2">
      {/* <div className="flex justify-evenly"> */}
      {!cartItems.find(
        (item: CartType) => item.productID === product.productID
      ) ? (
        <Button
          className="bg-blue-500 hover:bg-blue-600 rounded-lg flex justify-center items-center "
          onClick={() => dispatch(addToCart(product))}
        >
          <DotLottiePlayer
            src="https://lottie.host/8fefe20b-7e96-45cf-a3ad-c2234290ed53/pPANOzbuMZ.lottie"
            autoplay
            loop
            className="w-10 h-10"
          />
          <span>Add to Cart</span>
        </Button>
      ) : (
        <div className="flex justify-evenly items-center">
          <span
            className=" rounded-full px-2 font-semibold text-red-600 cursor-pointer hover:bg-gray-200 select-none"
            onClick={() => dispatch(reduceCartItems(product.productID))}
          >
            <MinusIcon />
          </span>
          <span className="w-[30px] text-black text-center">
            {
              cartItems.find(
                (item: CartType) => item.productID === product.productID
              )?.quantity
            }
          </span>
          <span
            className="rounded-full align-middle px-2 font-semibold text-green-600 cursor-pointer hover:bg-gray-200 select-none"
            onClick={() => dispatch(addToCart(product))}
          >
            <PlusIcon />
          </span>
        </div>
      )}
      {/* </div> */}
      <ProductAddEditDialog isEdit={true} editproduct={product}>
        <Button className="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-2 px-4 shadow-md">
          <EditIcon /> Edit
        </Button>
      </ProductAddEditDialog>
      <ProductDelete product={product} isDelete={true}>
        <Button className="bg-red-600 hover:bg-red-700 rounded-lg p-2 px-4 shadow-md">
          <Trash2 /> Delete
        </Button>
      </ProductDelete>
    </div>
  );
};

export default productAction;
