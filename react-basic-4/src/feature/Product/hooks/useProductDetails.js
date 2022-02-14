import { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        const result = await productApi.get(productId);
        setProduct(result);
        console.log('Call API productId: ', result);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
    })();
  }, [productId]);
  return { product, loading };
}
