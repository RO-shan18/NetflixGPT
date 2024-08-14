import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidate } from "../utils/ChackValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import {back_img, Photo_URL} from "../utils/constants";

const Login = () => {

  // Hooks
  const [signup, setsignup] = useState(false);
  const [ErrorMessage, SetErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Handlers
  const HandleToggle = () => {
    setsignup(!signup);
  };

  const HandleSubmit = () => {
    // Validate Form
    const ErrorMessage = CheckValidate(
      email.current.value,
      password.current.value
    );
    SetErrorMessage(ErrorMessage);

    if (ErrorMessage) return;

    // Checking signup and signin user
    if (signup) {
      // sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // updateProfile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Photo_URL
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          SetErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In or Login logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          SetErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">

      {/* Header */}
      <Header
        signup={signup}
        setsignup={() => {
          setsignup(false);
        }}
      />

        {/* background image */}
      <div className="absolute">
        <img
          src={back_img}
          alt="back_img"
        />
      </div>

      <div>
        {/* Sign in or Sign Up form */}
        <form
          className=" bg-black absolute my-32 mx-auto right-0 left-0 w-1/4 py-10 text-center bg-opacity-80 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Title */}
          <h1 className="text-white text-3xl py-4 font-bold">
            {signup ? "Sign Up" : "Sign In"}
          </h1>

           {/* Name */}
          {signup && (
            <div className="py-4">
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="py-2 pr-8 pl-2 rounded-sm"
              />
            </div>
          )}

          {/* Email */}
          <div className="py-4">
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="py-2 pr-8 pl-2 rounded-sm"
            />
          </div>

          {/* Password */}
          <div className="py-4">
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="py-2 pr-8 pl-2 rounded-sm"
            />
          </div>

          {/* submit button */}
          <div className="py-4">
            <button
              className="text-white bg-red-600 px-[86px] rounded-sm py-1"
              onClick={HandleSubmit}
            >
              {signup ? "Sign up" : "Sign In"}
            </button>
            <p className="text-red-600 font-semibold text-md pt-3 ">
              {ErrorMessage}
            </p>
          </div>


          {!signup && (
            <div className="py-4">
              <p className="text-white cursor-pointer" onClick={HandleToggle}>
                New to Netflix? Sign up now
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
