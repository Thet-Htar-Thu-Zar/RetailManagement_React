import { addSale } from "@/api/sale";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { clearCart } from "@/store/features/cartSlice";
import { useEffect, useState } from "react";

const CashierView = () => {
  const CartItems = useAppSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { mutate } = addSale.useMutation({});

  useEffect(() => {
    setTotalPrice(
      CartItems.reduce(
        (total: number, item: { productPrice: number; quantity: number }) =>
          total + item.productPrice * item.quantity,
        0
      )
    );
  }, [CartItems]);

  const cashProcess = () => {
    if (CartItems.length === 0) {
      toast({
        title: "No items in the cart...",
        variant: "destructive",
        duration: 600,
      });
      return;
    }

    const saleData = CartItems.map(
      (item: { productID: string; quantity: number }) => ({
        productID: item.productID,
        quantitySold: item.quantity,
        createdBy: "user",
      })
    );

    saleData.forEach((data) => {
      try {
        mutate(data);
      } catch (error) {
        console.error(`Error processing item ${data.productID}: `, error);
      }
    });

    toast({
      title: "Transaction completed",
      description: "Thanks...🎀 Shopping successfully!",
      duration: 1500,
    });
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-2xl rounded-lg border border-green-300 mt-10">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Receipt
        </h1>

        <div className="space-y-4 text-gray-700">
          {CartItems.map((item) => (
            <div key={item.productID} className="border-b border-dashed py-3">
              <div className="flex justify-between">
                <span className="font-medium">{item.productName}</span>
                <span>${item.productPrice * item.quantity}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Quantity: {item.quantity}</span>
                <span className="text-right">${item.productPrice}</span>
              </div>
            </div>
          ))}

          <div className="flex justify-between text-xl font-bold mt-4 border-t pt-4 text-gray-700">
            <span>Total:</span>
            <span>
              $
              {CartItems.reduce(
                (total, item) => total + item.productPrice * item.quantity,
                0
              )}
            </span>
          </div>
        </div>

        <Button
          className="mt-8 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg hover:from-green-500 hover:to-blue-600 transform transition-transform duration-200 ease-in-out"
          onClick={cashProcess}
        >
          Cash Out
        </Button>
      </div>
    </div>
  );
};

export default CashierView;
