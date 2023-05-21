import { Link } from "react-router-dom";

const ToyData = ({ toy, index }) => {
  const { toy_name, seller_name, Sub_category, toy_price, quantity } =
    toy || {};
  // const index = 1;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{toy_name}</td>
      <td>{Sub_category}</td>
      <td>{toy_price}</td>
      <td>{quantity}</td>
      <td>
        <Link to="/login">
          <button className="btn bg-[#A4747F] border-0   hover:bg-[#8CA6A2]">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyData;
