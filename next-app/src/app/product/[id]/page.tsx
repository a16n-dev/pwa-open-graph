import {Metadata} from "next";
import ClientSPARedirect from "@/components/ClientSPARedirect";
import Api from "@/api";

type Props = {
  params: { id: string }
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const product = await Api.getProductById(Number(params.id));

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
