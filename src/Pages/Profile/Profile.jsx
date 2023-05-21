import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";

const Profile = () => {
  //authcontext
  const { user, profile } = useContext(AuthContext);
  //register in start
  const handleProfileUpdate = (event) => {
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    profile(user, name, photo);
  };
  return (
    <div className="my_container my-36">
      <div className="md:w-[650px]  lg:w-[800px] mx-auto bg-[#A4747F] glass hover:bg-[#A4747F] p-20  shadow-2xl rounded-lg">
        <div>
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="mx-auto"
          />
        </div>
        <Form className="my-10" onSubmit={handleProfileUpdate}>
          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Enter Your Name: "
              className="input input-bordered w-full max-w-lg"
              name="name"
              defaultValue={user?.displayName}
            />
          </div>

          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Enter Your Photo Url: "
              className="input input-bordered w-full max-w-lg my-4"
              name="photo"
              defaultValue={user?.photoURL}
            />
          </div>

          <div className=" text-center">
            <button
              type="submit"
              className="btn bg-[#578881] border-0 w-[200px] md:w-[500px]"
            >
              Update Profile
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
