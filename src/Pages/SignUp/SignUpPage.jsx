import { useContext, useState } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";

const SignUpPage = () => {
  //authcontext
  const { createUser, profile } = useContext(AuthContext);
  //states
  const [errors, setErrors] = useState(" ");

  //register in start
  const handleRegister = (event) => {
    setErrors("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrors("The password is less than 6 characters");
      return;
    }
    if ((email, password)) {
      createUser(email, password)
        .then((result) => {
          const logeduser = result.user;
          profile(logeduser, name, photo);
          form.reset();
          console.log(logeduser);
        })
        .catch((error) => {
          const message = error.message;
          setErrors(message);
        });
    }
  };
  return (
    <div className="my_container my-36">
      <div className="md:w-[650px]  lg:w-[800px] mx-auto bg-[#A4747F] glass hover:bg-[#A4747F] p-20  shadow-2xl rounded-lg">
        <div className="text-center">
          <h2 className=" font-swash my-5 text-3xl text-gray-800">
            Sign Up and Discover a World of Exciting Possibilities!
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            animi accusantium delectus, voluptatum repellat facilis minus id
            deleniti non similique.
          </p>
        </div>
        <Form className="my-10" onSubmit={handleRegister}>
          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Enter Your Name: "
              className="input input-bordered w-full max-w-lg"
              name="name"
              required
            />
          </div>
          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email: "
              className="input input-bordered w-full max-w-lg my-4"
              name="email"
              required
            />
          </div>
          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Enter Your Photo Url: "
              className="input input-bordered w-full max-w-lg"
              name="photo"
            />
          </div>
          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="password"
              placeholder="Enter Your Password: "
              className="input input-bordered w-full my-5 max-w-lg"
              name="password"
              required
            />
          </div>
          <p className="text-red-900 my-4 text-center">{errors}</p>
          <div className=" text-center">
            <button
              type="submit"
              className="btn bg-[#578881] border-0 w-[200px] md:w-[500px]"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
