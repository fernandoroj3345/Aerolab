const ProductList = ({ onSelect }) => {
 

  const products = [
      {
        "id": 1,
        "description": "Producto 1",
        "price": 100,
        "stock": 20
      },
      {
        "id": 2,
        "description": "Producto 2",
        "price": 150,
        "stock": 15
      },
      {
        "id": 3,
        "description": "Producto 3",
        "price": 450,
        "stock": 5
      }
    ]  


  return (
    <div>
      <h1>Lista de Productos
        <img src="/public/vite.svg"></img> 
      </h1>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => onSelect(product)}>
            {product.description} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;