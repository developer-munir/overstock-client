import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryProducts = () => {
    const products = useLoaderData();
    
    return (
      <div>
            {
                products.map(product => <CategoryCard product={product} key={product._id}></CategoryCard>)
        }
      </div>
    );
};

export default CategoryProducts;