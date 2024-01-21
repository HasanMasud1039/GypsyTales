import { useContext } from "react";
import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { FacebookAuthProvider, getAuth, getRedirectResult, signInWithPopup } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const auth = getAuth();
    const { googleSignIn } = useContext(AuthContext);
    const { facebookSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://gypsy-tales-server-hasanmasud1039.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    toast.success("Google Login Successful");
            })
    }

     const handleFacebookLogin = () => {
        // getRedirectResult(auth)
        facebookSignIn()
        .then(result => {
            const loggedInUser = result.user;
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://gypsy-tales-server-hasanmasud1039.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
                toast.success("Facebook Login Successful");
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
        
            // ...
          });
    }

    return (
        <div className="space-y-0">
            <p className="text-black dark:text-white font-semibold mb-4">Or Login With</p>
            <div className="w-full border-0 py-1 rounded-2xl text-center   md:gap-6 gap-0 flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="bg-red-600 hover:bg-white rounded-full border-8 hover:border-red-600 shadow-xl border-white">
                    <p className=" p-4 text-white flex items-center shadow-lg rounded-full gap-4 hover:text-red-600 text-3xl"><FaGoogle/></p>
                </button>
                <button onClick={handleFacebookLogin}  className="bg-blue-600 hover:bg-white rounded-full border-8 hover:border-blue-600 shadow-xl border-white">
                    <p className="  p-4 text-white flex items-center shadow-lg rounded-full gap-4 hover:text-blue-600 text-3xl"><FaFacebookF /></p>
                </button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialLogin;