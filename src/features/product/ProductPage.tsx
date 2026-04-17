// app/product/[id]/page.tsx

import Image from "next/image";
import { ProductInfo } from "./ProductInfo";

type Props = {
  id: string;
};

export default function ProductPage({ id }: Readonly<Props>) {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1.5fr_1fr] gap-6">
        {/* Left thumbnails */}
        <div className="hidden md:flex md:flex-col gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-2 rounded-lg">
              <Image
                src={`/images/thumb-${i}.png`}
                alt="thumb"
                width={50}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Main image */}
        <div className="col-span-1 md:col-span-1 flex items-center justify-center p-6">
          <Image
            src="/images/main.png"
            alt="product"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <ProductInfo />
      </div>
    </div>
  );
}
