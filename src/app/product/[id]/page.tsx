import ProductPage from "@/features/product/ProductPage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Product({ params }: Readonly<Props>) {
  const { id } = await params;

  return <ProductPage id={id} />;
}
