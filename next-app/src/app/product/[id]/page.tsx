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

  const product = await Api.getProductById(params.id!);

  if(!product){
   return {}
  }

  return {
    title: product.name,
    openGraph: {
      images: [
        product.imageUrl
      ]
    },
    description: product.description
  }
}

export default function Page() {
  return <ClientSPARedirect />
}
