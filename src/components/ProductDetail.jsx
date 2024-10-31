const ProductDetail = ({ product }) => {
  if (!product) return <p>Selecciona un producto para ver los detalles.</p>;

  return (
    <div style={{ textAlign: 'center', margin: '40px' }}>
      <h2>Detalles del Producto</h2>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
};


export default ProductDetail;
