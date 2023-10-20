import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn, googleLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Successfully Logged In.",
          
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "errror",
          title: "error",
          text: error.message,
        });
      });
  };
  //   Social login
  const handleSocialLogin = (media) => {
    media().then(() => {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "User login successfully.",
      });
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="hero min-h-screen py-10 bg-[url('https://i.ibb.co/jfdmSZy/photo-hoteam-196xdw-XDHc0-unsplash.jpg')] bg-no-repeat bg-cover ">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
          <form onSubmit={handleLogin} className="card-body ">
            <h1 className="text-3xl font-chakraPetch font-semibold text-white">
              Welcome To Vehica
            </h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered "
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text text-white-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="mt-5 btn bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white">
                Login
              </button>
            </div>
            <div className="divider  text-white">OR</div>
            <div className="">
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="bg-white btn text-xl w-full"
              >
                Google
              </button>
            </div>

            <p className="mt-4 text-center  text-white">
              Already have an account?
              <Link className="text-primary" to={"/register"}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
