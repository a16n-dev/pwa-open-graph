import {Metadata} from "next";
import ClientSPARedirect from "@/components/ClientSPARedirect";
import Api from "@/api";

type Props = {
  params: { id: string }
}

export const revalidate = 3600

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const product = await Api.getProductById(params.id);

  if(!product){
   return {}
  }

  return {
    title: `${product.name} | Flourish Bakery Co.`,
    openGraph: {
      images: [
        `/og/product?image=${encodeURIComponent(product.imageUrl)}`
      ]
    },
    description: product.description.substring(0, 100) + "..."
  }
}

export default function Page() {
  return <ClientSPARedirect />
}
