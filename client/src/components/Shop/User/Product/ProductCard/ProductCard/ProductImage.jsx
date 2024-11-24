

const ProductImage = ({ image, name }) => (
  <div className="flex justify-center items-center">
    <img
      src={image}
      alt={name}
      className="w-full h-full max-h-96 object-contain rounded-lg shadow-lg"
    />
  </div>
);

export default ProductImage;
