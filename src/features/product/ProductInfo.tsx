import { Rating } from "../products/Rating";

export const ProductInfo = () => {
  return (
    <div className=" p-6 space-y-4">
      <h1 className="text-xl font-semibold">Havic HV G-92 Gamepad</h1>

      <div className="text-sm text-gray-500">
        <Rating rating={4} ratingNumber={4} showStock={true} hasStock={true} />
      </div>

      <div className="text-2xl font-bold">$192.00</div>

      <p className="text-black text-sm">
        PlayStation 5 Controller Skin high quality vinyl with air channel
        adhesive for easy bubble free install.
      </p>

      <div className="border-b text-gray-500" />

      {/* Quantity + Buy */}
      <div className="flex items-center gap-3">
        <div className="flex border rounded">
          <button className="px-3">-</button>
          <span className="px-3">2</span>
          <button className="px-3">+</button>
        </div>

        <button className="bg-red-custom text-white px-6 py-2 rounded">
          Buy Now
        </button>

        <button className="border p-2 rounded">♡</button>
      </div>

      {/* Info boxes */}
      <div className="border rounded p-4 text-sm space-y-2">
        <div>🚚 Free Delivery</div>
        <div className="text-gray-500 ">
          Enter your postal code for Delivery Availability
        </div>
        <div className="border-b" />
        <div>↩ Return Delivery</div>
        <div className="text-gray-500">Free 30 Days Delivery Returns</div>
      </div>
    </div>
  );
};
