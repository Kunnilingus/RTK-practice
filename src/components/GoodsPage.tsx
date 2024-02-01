import { FC, useState } from "react";
import {
  useGetGoodsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from "../store/goodsApi";
import "./goodsPage.css";

const GoodsPage: FC = () => {
  const [count, setCount] = useState<number>(500);
  const [newProd, setNewProd] = useState<string>("");
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id).unwrap();
  };
  const handleAddProduct = async () => {
    if (newProd) {
      await addProduct({ name: newProd, id: Number(new Date()) }).unwrap();
      setNewProd("");
    }
  };
  return (
    <div className="goods">
      <div>
        <input
          type="text"
          value={newProd}
          onChange={(e) => setNewProd(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add new product</button>
      </div>
      <div>
        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          <option value={10000000}>all</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      {isLoading && <h1>Loading...</h1>}
      <ul className="list">
        {data.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <span onClick={() => handleDeleteProduct(item.id)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodsPage;
