import { Link } from "react-router-dom";

const MyToyData = ({ toy, index }) => {
  const {
    _id,
    toy_name,
    seller_name,
    Sub_category,
    toy_price,
    quantity,

    photo,
    description,
  } = toy || {};
  // const index = 1;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{toy?.seller_email}</td>
      <td>{toy_name}</td>
      <td>
        {" "}
        <img src={photo} alt={toy_name} />
      </td>
      <td> {description.substring(0, 50)} ...</td>
      <td>{Sub_category}</td>
      <td>$ {toy_price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toys/${_id}`}>
          <button className="btn bg-[#A4747F] border-0   hover:bg-[#8CA6A2]">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyToyData;
