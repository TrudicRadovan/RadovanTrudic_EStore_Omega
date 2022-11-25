import ProductDTO from '../../dto/ProductDTO';

export default async function addShoppingCart(userId: string, product: ProductDTO) {
  const url = process.env.REACT_APP_API_ADD_SHOPPING_CART as string;

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: userId,
      products: [
        {
          id: product.id,
          quantity: 1,
        },
      ],
    }),
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      alert(`${product.title} added to shopping cart.`);
    });
}
