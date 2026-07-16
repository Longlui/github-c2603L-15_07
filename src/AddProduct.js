function AddProduct() {
  return (
    <div>
      <h1>Add Product</h1>

      <input type="text" placeholder="Title" />

      <br />
      <br />

      <input type="number" placeholder="Price" />

      <br />
      <br />

      <input type="text" placeholder="Image URL" />

      <br />
      <br />

      <button>Add Product</button>
    </div>
  );
}

export default AddProduct;