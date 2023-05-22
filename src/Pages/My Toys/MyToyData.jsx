import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyToyData = ({ toy, index, my_toys, setMy_toys }) => {
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

  //delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://re-zan-toys-server-side.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const getData = my_toys.filter((datas) => datas._id !== _id);
            setMy_toys(getData);
          });
      }
    });
  };
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
        <Link to={`/my-toys/${_id}`}>
          {" "}
          <button className="btn  btn-accent border-0  mr-4  hover:bg-[#8CA6A2]">
            <FaEdit />
          </button>
        </Link>

        <button
          className="btn btn-error border-0   hover:bg-[#8CA6A2]"
          onClick={() => handleDelete(_id)}
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default MyToyData;
