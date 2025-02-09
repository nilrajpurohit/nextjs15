import { notFound } from "next/navigation";
export default function ReviewDetails({ params }: {
    params: {
        productId: number
        reviewId: number
    }
}) {
    if(params.reviewId > 1000) {
        notFound();
    }
    return(<h1>Review {params.reviewId} for product {} {params.productId}</h1>);
}