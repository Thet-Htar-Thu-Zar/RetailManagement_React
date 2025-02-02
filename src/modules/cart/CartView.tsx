import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import {
  increaseItem,
  reduceItem,
  removeFromCart,
} from "@/store/features/cartSlice";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const CartView = () => {
  const CartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(
      CartItems.reduce(
        (total, item) => total + item.productPrice * item.quantity,
        0
      )
    );
  }, [CartItems]);

  return (
    <div>
      <div className=" min-h-screen">
        <TableCaption className="text-3xl font-semibold text-center text-black flex justify-center mb-5">
          Cart Page
          <DotLottiePlayer
            src="https://lottie.host/8fefe20b-7e96-45cf-a3ad-c2234290ed53/pPANOzbuMZ.lottie"
            autoplay
            loop
            className="w-10 h-10"
          />
        </TableCaption>

        {CartItems.length === 0 ? (
          <div
            v-if="cartStore.cartItems.length === 0"
            className="flex items-center justify-center min-h-64"
          >
            <div className="max-w-lg mx-auto p-6 bg-white shadow-2xl rounded-lg border border-green-300 mt-10">
              <p className="text-xl font-semibold text-center text-gray-800">
                <DotLottiePlayer
                  src="https://lottie.host/e6a4a470-58cd-45b4-9803-bfb87ce1878c/ZL22cIuBrP.lottie"
                  autoplay
                  loop
                  className="w-50 h-30"
                />
                Empty Cart!
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-xl font-medium text-gray-700 ml-10">
                  Total Amount: <span className="font-bold">${totalPrice}</span>
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="px-4 py-6 text-white bg-black rounded-lg hover:bg-gradient-to-r from-blue-300 to-green-600">
                  Proceed to Cashier
                </Button>
              </div>
            </div>

            <Table className="w-full border-collapse border border-gray-300 text-left">
              <TableHeader className="bg-gray-200 bg-gradient-to-r from-blue-300 to-green-300">
                <TableRow>
                  <TableHead className="px-4 py-2 border border-gray-300">
                    No
                  </TableHead>
                  <TableHead className="px-4 py-2 border border-gray-300">
                    Product Name
                  </TableHead>
                  <TableHead className="px-4 py-2 border border-gray-300">
                    Product Price
                  </TableHead>
                  <TableHead className="px-4 py-2 border border-gray-300">
                    Quantity
                  </TableHead>
                  <TableHead className="px-4 py-2 border border-gray-300">
                    Total
                  </TableHead>
                  <TableHead className="px-4 py-2 border border-gray-300">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CartItems.map((item, index) => (
                  <TableRow key={index + 1}>
                    <TableCell className="px-4 py-2 border border-gray-300">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-2 border border-gray-300">
                      {item.productName}
                    </TableCell>
                    <TableCell className="px-4 py-2 border border-gray-300">
                      {item.productPrice}
                    </TableCell>
                    <TableCell className="px-4 py-2 border border-gray-300">
                      <div className="flex items-center gap-2">
                        <Button
                          className="px-3 py-1 bg-black text-white rounded hover:bg-black hover:bg-gradient-to-r from-blue-300 to-green-300"
                          onClick={() => dispatch(increaseItem(item))}
                        >
                          <PlusIcon className="h-3 w-3" />
                        </Button>
                        {item.quantity}
                        <Button
                          className="px-3 py-1 bg-black text-white rounded hover:bg-red-600"
                          onClick={() => dispatch(reduceItem(item.productID))}
                        >
                          <MinusIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-2 border border-gray-300">
                      ${item.productPrice * item.quantity}
                    </TableCell>
                    <TableCell className="px-4 py-2 border border-gray-300">
                      <Button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => dispatch(removeFromCart(item.productID))}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
