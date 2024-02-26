

export default function Review({ 
  params,
 }: {
  params: {
    productId: string;
    reviewId: string;
  } 
 }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Product ID = {params.productId}, Review ID = {params.reviewId}</h2>
    </main>
  );
}
