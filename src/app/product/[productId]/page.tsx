

export default function ProductDetail({ params }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Product Detail ID! = {params.productId}</h1>
    </main>
  );
}
