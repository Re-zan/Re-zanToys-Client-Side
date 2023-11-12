import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateData = () => {
  const datas = useLoaderData();
  const { _id, toy_price, quantity, description } = datas;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (toyData) => {
    fetch(`https://re-zan-toys-server-side.vercel.app/my-toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully Data Updated",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="my_container my-24">
      <div className="md:w-[650px]  lg:w-[800px] mx-auto bg-[#A4747F] glass hover:bg-[#A4747F] p-20  shadow-2xl rounded-lg">
        <div className="text-center">
          <h2 className=" font-swash my-5 text-3xl text-gray-800">
            Stay in the Loop: Get the Latest Updates and Enhancements on Our Toy
            Marketplace!
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            animi accusantium delectus, voluptatum repellat facilis minus id
            deleniti non similique.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
              defaultValue={toy_price}
              type="number"
              placeholder="Toy Price"
              {...register("toy_price", { required: true })}
              className="w-full max-w-lg mx-auto p-2"
            />
            {errors.toy_price && (
              <span className="text-red-800">This field is required</span>
            )}
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
              defaultValue={quantity}
              type="number"
              placeholder="Available quantity"
              {...register("quantity", { required: true })}
              className="w-full max-w-lg mx-auto p-2"
            />
            {errors.quantity && (
              <span className="text-red-800">This field is required</span>
            )}
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <div className="form-control">
              <textarea
                defaultValue={description}
                className="textarea border-0 rounded-none h-36"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-red-800">This field is required</span>
              )}
            </div>
          </div>

          <div className=" text-center my-4">
            <button
              type="submit"
              className="btn bg-[#578881] border-0 w-[200px] md:w-[500px]"
            >
              Update Toys
            </button>
          </div>
          {/* <input type="submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateData;


