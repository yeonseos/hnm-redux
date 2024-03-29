import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={showDetail}>
      <div className="card-img-wrap mb-12">
        <img src={item?.img} />
      </div>
      <div className="text-highlight">{item?.new === true ? "New" : ""}</div>
      <div>{item?.title}</div>
      <div className="fw-bold">₩ {item?.price}</div>
    </div>
  );
};

export default ProductCard;
