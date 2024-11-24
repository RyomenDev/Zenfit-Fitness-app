import { Link } from "react-router-dom";

function PaymentCancel() {
  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h2 className="text-3xl font-semibold text-red-500 mb-4">
        Payment Canceled
      </h2>
      <p className="text-lg mb-4">
        You canceled the payment. If you want to complete your purchase, you can
        try again.
      </p>
      <Link
        to="/shop/products"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block"
      >
        Back to Shop
      </Link>
    </div>
  );
}

export default PaymentCancel;
