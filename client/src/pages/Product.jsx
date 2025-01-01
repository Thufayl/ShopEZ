import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setCurrentImage(selectedProduct.image[0]);
    }
  }, [productId, products]);

  if (!product) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="w-full rounded-lg overflow-hidden border">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {product.image.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(img)}
                  className={`w-20 h-20 border rounded overflow-hidden flex-shrink-0 ${
                    img === currentImage ? 'border-blue-500' : 'border-gray-300'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-600">(122 Reviews)</span>
            </div>
            <p className="text-xl text-gray-900 font-semibold">
              {currency}
              {product.price}
            </p>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="space-y-3">
              <p className="font-medium text-gray-800">Choose Size:</p>
              <div className="flex gap-3">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border transition ${{
                      'bg-blue-500 text-white': selectedSize === size,
                      'bg-gray-100 text-gray-700': selectedSize !== size,
                    }}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(product._id, selectedSize)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
            >
              Add to Cart
            </button>

            <ul className="text-sm text-gray-500 space-y-1">
              <li>✔ 100% Original Products</li>
              <li>✔ Cash on Delivery Available</li>
              <li>✔ Easy Returns and Exchange</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <RelatedProducts
            category={product.category}
            subCategory={product.subCategory}
          />
        </section>
      </div>
    </div>
  );
};

export default Product;
