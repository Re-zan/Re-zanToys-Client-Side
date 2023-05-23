import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
const Add_toys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (toyData) => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Successfully Added A Toy",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="my_container my-36">
      <div className="md:w-[650px]  lg:w-[800px] mx-auto bg-[#A4747F] glass hover:bg-[#A4747F] p-20  shadow-2xl rounded-lg">
        <div className="text-center">
          <h2 className=" font-swash my-5 text-3xl text-gray-800">
            Bring Your Toys to Life on Our Add Toy Page!
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
              value={user?.displayName}
              {...register("seller_name")}
              className="w-full max-w-lg mx-auto p-2"
            />
          </div>
          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
              value={user?.email}
              {...register("seller_email")}
              className="w-full max-w-lg mx-auto p-2"
            />
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
              placeholder="Picture URL of the toy "
              {...register("photo", { required: true })}
              className="w-full max-w-lg mx-auto p-2"
            />
            {errors.photo && (
              <span className="text-red-800">This field is required</span>
            )}
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
              placeholder="Toy Name"
              {...register("toy_name", { required: true })}
              className="w-full max-w-lg mx-auto p-2"
            />
            {errors.toy_name && (
              <span className="text-red-800">This field is required</span>
            )}
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <select
              {...register("Sub_category")}
              className="w-full max-w-lg mx-auto p-2"
            >
              <option value="teddy_bear">Teddy Bear</option>
              <option value="unicorn">Unicorn</option>
              <option value="dinosaur">dinosaur</option>
              <option value="dogs">Dogs</option>
              <option value="horse">Horse</option>
              <option value="cats">Cat</option>
            </select>
            {errors.Sub_category && (
              <span className="text-red-800">This field is required</span>
            )}
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
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
              placeholder="Toy Rating"
              {...register("toy_rating", { required: true })}
              className="w-full max-w-lg mx-auto p-2"
            />
            {errors.toy_rating && (
              <span className="text-red-800">This field is required</span>
            )}
          </div>

          <div className="my-3 w-full  max-w-lg mx-auto">
            <input
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
              Add Toys
            </button>
          </div>
          {/* <input type="submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default Add_toys;
