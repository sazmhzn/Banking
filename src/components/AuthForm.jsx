import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import { useEffect, useState } from "react";
import { showSuccess } from "./Notification";
import { getAllUsers } from "../service/transaction-services";

export const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [logginIn, setLogginIn] = useState({
    email: "",
    password: "",
  });

  // 2. Define a submit handler.
  // const onSubmit = () => {
  //   setIsLoading(true);

  //   try {

  //     // if(type === 'sign-up') {
  //     //   const userData = {
  //     //     firstName: data.firstName!,
  //     //     lastName: data.lastName!,
  //     //     address1: data.address1!,
  //     //     city: data.city!,
  //     //     state: data.state!,
  //     //     postalCode: data.postalCode!,
  //     //     dateOfBirth: data.dateOfBirth!,
  //     //     ssn: data.ssn!,
  //     //     email: data.email,
  //     //     password: data.password
  //     //   }

  //     //   const newUser = await signUp(userData);

  //     //   setUser(newUser);
  //     // }

  //     if (type === "sign-in") {

  //       //take the inputs
  //       const handleInputChange = (event) => {
  //         if (event.target.name === "email") {
  //           setEmail(event.target.value);
  //         }
  //         if (event.target.name === "password") {
  //           setPassword(event.target.value);
  //         }
  //       };

  //       const doLogin = (e) => {
  //         let isLogin = false;
  //         if (email === "admin" && password === "admin") {
  //           isLogin = true;
  //         }
  //         console.log(email, password);

  //         if (isLogin) {
  //           showSuccess("Logged in successfully");
  //           // localStorage.setItem("isLogin", "1");
  //           navigate("/home");
  //         } else {
  //           setError((prev) => "Invalid username and password");
  //         }
  //       };
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const isLogin = localStorage.getItem("isLogin");
  //   if (isLogin === "1") {
  //     navigate("/UserManagement");
  //   }
  // });

  const handleInputChange = (e) => {
    setLogginIn((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Get all the users from database
  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        // alert("API server error");
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (type === "sign-in") {
        console.log(users);
          users.map((user) => {
            console.log(user.email,logginIn.email,user.password,logginIn.password,user.email == logginIn.email,user.password == logginIn.password);
            if (user.email == logginIn.email) {
              if (user.password == logginIn.password) {
                showSuccess("Logged in successfully");
                navigate("/");
              } else {
                setErrors.password = "Incorrect password";
              }
            }
          })
      }
    } catch (error) {
      console.log("try catch error: ", error);
    }
  };

  // const doLogin = () => {
  //   let isLogin = false;
  //   // if (email === "admin" && password === "admin") {
  //   //   setError({email: "" , password: ""})
  //   //   isLogin = true;
  //   //   setIsLoading(true)
  //   // }
  //   // console.log(email, password);

  //   if (isLogin) {
  //     showSuccess("Logged in successfully");
  //     // localStorage.setItem("isLogin", "1");
  //     navigate("/");
  //   } else {
  //     // setError(() => "Invalid username and password");
  //   }
  // };

  return (
    <section className="auth-form">
      {type}
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <img
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
      </header>

      <>
        <form onSubmit={handleSubmit} className="space-y-8">
          {type === "sign-up" && (
            <>
              <div className="flex gap-4">
                <CustomInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  onChange={handleInputChange}
                  // error={error}
                />
                <CustomInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your first name"
                  onChange={handleInputChange}
                  // error={error}
                />
              </div>
              <CustomInput
                name="address1"
                label="Address"
                placeholder="Enter your specific address"
                onChange={handleInputChange}
                // error={error}
              />
              <CustomInput
                name="city"
                label="City"
                placeholder="Enter your city"
                onChange={handleInputChange}
                // error={error}
              />
              <div className="flex gap-4">
                <CustomInput
                  name="state"
                  label="State"
                  placeholder="Example: NY"
                  onChange={handleInputChange}
                  // error={error}
                />
                <CustomInput
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Example: 11101"
                  onChange={handleInputChange}
                  // error={error}
                />
              </div>
              <div className="flex gap-4">
                <CustomInput
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                  onChange={handleInputChange}
                  // error={error}
                />
                <CustomInput
                  name="ssn"
                  label="SSN"
                  placeholder="Example: 1234"
                  onChange={handleInputChange}
                  // error={error}
                />
              </div>
            </>
          )}

          <CustomInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            error={errors.email}
          />

          <CustomInput
            name="password"
            label="Password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            error={errors.password}
          />

          <div className="flex flex-col gap-4">
            <Link to={'/'} className="flex flex-col gap-4"> 
            <button
              type="submit"
              disabled={isLoading}
              className="form-btn h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  {/* <Loader2 size={20} className="animate-spin" /> &nbsp; */}
                  Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </button>
            </Link>
            
          </div>
        </form>

        <footer className="flex justify-center gap-1">
          <p className="text-14 font-normal text-gray-600">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            to={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="form-link"
          >
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </footer>
      </>
    </section>
  );
};
