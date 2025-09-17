"use client";

import { FiShoppingCart, FiX } from "react-icons/fi";
import { useCart } from "../Context/CartContext";

export default function CartDrawer() {
  const { cartItems, open, setOpen, removeFromCart } = useCart();

  return (
    <>
      {/* Cart Button (Navbar) */}
      <button
        onClick={() => setOpen(true)}
        className="text-xl relative cursor-pointer"
      >
        <FiShoppingCart />
        {/* Badge (item count) */}
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-none z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 rounded-tl-3xl  rounded-bl-3xl  bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-2">
            <FiShoppingCart className="text-xl" />
            <h2 className="font-semibold">Your Cart</h2>
          </div>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* Promo Banner */}
        <div className="bg-[#5f6354] text-white text-sm text-center p-2">
          FESTIVE SALE LIVE! Extra Flat 10% Off
        </div>

        {/* Content Area */}
        <div className="flex-1 h-[calc(100vh-140px)] overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiShoppingCart className="text-5xl text-gray-400 mb-4" />
              <p className="mb-4 text-gray-600">Your cart is currently empty</p>

              <button
                onClick={() => setOpen(false)}
                className="flex min-h-[40px] bg-[#465844] text-white flex-row items-center justify-center gap-2 space-x-4 whitespace-nowrap cursor-pointer bg-primary-dark text-btnPrimaryText px-4 text-base font-medium rounded-2xl h-14 w-[228px]"
                type="button"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex w-full items-start space-x-4 rounded-xl bg-[#fafafa] p-3 shadow-sm"
                >
                  {/* Left: Image */}
                  <div className="flex items-center justify-center min-h-[75px] min-w-[75px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[75px] w-[75px] object-cover rounded-lg border border-gray-200"
                    />
                  </div>

                  {/* Right: Details */}
                  <ul className="flex grow flex-col items-start justify-between space-y-0.5">
                    {/* Header: Title + Delete */}
                    <li className="flex w-full flex-row items-start justify-between">
                      <p className="overflow-hidden text-ellipsis text-sm font-medium text-coal-dark">
                        {item.name}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer rounded-lg border border-gray-300 p-1 bg-white"
                      >
                        <FiX className="h-3.5 w-3.5 text-gray-500" />
                      </button>
                    </li>

                    {/* Sub-line */}
                    <li className="w-full overflow-hidden text-ellipsis text-xs font-normal text-gray-500">
                      Ready To Hang (Fitted With Wood Frame)
                    </li>

                    {/* Qty + Price */}
                    <li className="flex w-full flex-row items-end justify-between pt-1">
                      {/* Qty Control */}
                      <div className="flex h-6 w-[4.25rem] flex-row items-center rounded border border-gray-300 bg-white">
                        <button
                          onClick={() =>
                            item.qty > 1 && updateQty(item.id, item.qty - 1)
                          }
                          disabled={item.qty === 1}
                          className="flex h-full grow basis-1/3 items-center justify-center text-gray-400 bg-[#F8F8F8] disabled:opacity-50"
                        >
                          –
                        </button>
                        <p className="grow basis-1/3 text-center text-xs font-medium text-gray-800">
                          {item.qty}
                        </p>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="flex h-full grow basis-1/3 items-center justify-center bg-[#F8F8F8] text-gray-600"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <p className="pt-1 text-sm font-medium text-gray-800 flex items-end gap-1">
                        {item.oldPrice && (
                          <span className="font-normal text-gray-400 line-through text-[10px] leading-3">
                            ₹{item.oldPrice}
                          </span>
                        )}
                        <span>₹{item.price * item.qty}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="flex flex-col space-y-3 px-3 pb-20 mt-[-50px] pt-4 shadow-[0px_-1px_8px_0px_#0000001A]">
            <div className="flex justify-between space-x-6 items-center">
              {/* Price + Estimated */}
              <div className="w-1/3 flex flex-col justify-center cursor-pointer">
                <div className="text-[18px] font-semibold text-gray-900">
                  ₹{cartItems.reduce((acc, i) => acc + i.price * i.qty, 0)}
                </div>
                <button className="truncate text-left text-[12px] text-gray-800 underline underline-offset-2">
                  Estimated total
                </button>
              </div>

              {/* Checkout Button */}
              <div className="flex w-full flex-col items-center space-y-2 min-w-40">
                <button
                  type="button"
                  className="flex min-h-[40px] flex-row items-center justify-center gap-2 whitespace-nowrap cursor-pointer bg-[#465844] text-white px-4 text-base font-medium rounded-2xl h-14 w-full"
                >
                  Checkout
                </button>
              </div>
            </div>

            {/* Trust Badge */}
            <img
              src="/stable/assets/trust-badge-gray-BMH3cGH8.svg"
              className="h-4"
              alt="shopflo-logo"
            />
          </div>
        )}
      </div>
    </>
  );
}
