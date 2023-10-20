import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, profileUpdate, googleLogin } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    //   toast.error("Password should be at least 6 characters or longer");
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters or longer",
      });

      return;
    } else if (!/[A-Z]/.test(password)) {
      //   toast.error("Password should have at least one Upper case characters.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should have at least one Upper case characters.",
      });

      return;
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      //   toast.error("Password should have at least one special characters.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should have at least one special characters.",
      });
      return;
    }
    // Create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "success",
          text: "User Successfully Created.",
        });
        navigate("/");
        profileUpdate(name, photoUrl)
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
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
          <form onSubmit={handleRegister} className="card-body ">
            <h1 className="text-3xl font-chakraPetch font-semibold text-white">
              Welcome To Galactic
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="input input-bordered "
              />
            </div>
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
                Register
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
              <Link className="text-primary" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
