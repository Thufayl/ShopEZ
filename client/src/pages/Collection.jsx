import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({ category: [], subCategory: [], sort: '' });

  const updateFilters = (type, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (type === 'sort') {
        updated[type] = value;
      } else {
        const exists = updated[type].includes(value);
        updated[type] = exists
          ? updated[type].filter((item) => item !== value)
          : [...updated[type], value];
      }
      return updated;
    });
  };

  useEffect(() => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      filtered = filtered.filter((product) => filters.category.includes(product.category));
    }

    if (filters.subCategory.length > 0) {
      filtered = filtered.filter((product) => filters.subCategory.includes(product.subCategory));
    }

    if (filters.sort) {
      filtered.sort((a, b) =>
        filters.sort === 'low-high' ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(filtered);
  }, [products, search, showSearch, filters]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Panel */}
          <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-medium text-gray-700">Category</h3>
                <div className="mt-2 space-y-2">
                  {['Men', 'Women', 'Kids'].map((cat) => (
                    <label key={cat} className="flex items-center text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="mr-2 rounded text-indigo-600"
                        value={cat}
                        onChange={(e) => updateFilters('category', e.target.value)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              <div>
                <h3 className="text-lg font-medium text-gray-700">Type</h3>
                <div className="mt-2 space-y-2">
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                    <label key={type} className="flex items-center text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="mr-2 rounded text-indigo-600"
                        value={type}
                        onChange={(e) => updateFilters('subCategory', e.target.value)}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h3 className="text-lg font-medium text-gray-700">Sort By</h3>
                <select
                  onChange={(e) => updateFilters('sort', e.target.value)}
                  className="mt-2 w-full border-gray-300 rounded shadow-sm focus:ring focus:ring-indigo-200 text-sm"
                >
                  <option value="">Default</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <Title text1="ALL" text2="COLLECTIONS" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductItem
                  key={product._id}
                  name={product.name}
                  id={product._id}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Collection;
