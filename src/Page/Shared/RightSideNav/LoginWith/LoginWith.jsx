import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const LoginWith = () => {
    return (
        <div>
            <h1 className="text-[#403f3f] text-2xl font-semibold mb-4">Login with</h1>
            <div className="mb-2">
                <button className="btn bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
            </div>
            <div className="mt-2">
                <button className="btn bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 w-full">
                    <FaFacebook></FaFacebook>
                    Login With Facebook
                </button>
            </div>
        </div>
    );
};

export default LoginWith;