import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGofore } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const Login = () => {
  //authcontext
  const { googleLogin, logIn } = useContext(AuthContext);

  //states
  const [errors, setErrors] = useState(" ");

  //private route procees
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // googlogIn
  const handleGoogleLogIn = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //log in start
  const handleLogin = (event) => {
    setErrors("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if ((email, password)) {
      logIn(email, password)
        .then(() => {
          form.reset();
          navigate(from, { replace: true });
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
            SignIn and Step into a World of Endless Fun!
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            animi accusantium delectus, voluptatum repellat facilis minus id
            deleniti non similique.
          </p>
        </div>
        <Form className="my-10" onSubmit={handleLogin}>
          <div className="form-control w-full  max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email: "
              className="input input-bordered w-full max-w-lg"
              name="email"
              required
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
              Sign In
            </button>
          </div>
        </Form>
        <Link
          to="/register"
          className="underline underline-offset-2 ... text-purple-900 mb-4"
        >
          <p className=" text-center">
            {`  If You Don't Have Account Then Go to The Sign Up Page`}
          </p>
        </Link>

        <div className="divider text-gray-800 font-swash">OR</div>

        <div className="text-center">
          <button
            className="btn  btn-primary w-[200px] md:w-[500px] "
            onClick={handleGoogleLogIn}
          >
            <FaGofore className="text-xl mr-2" />{" "}
            <span>Sign In With Google</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
