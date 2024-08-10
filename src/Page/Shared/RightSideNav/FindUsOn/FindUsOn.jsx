import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div className="mt-8">
            <h1 className="text-[#403f3f] text-2xl font-semibold mb-4">Find Us On</h1>
             <div>
                <a className="text-[#403f3f] flex text-lg border px-4 py-1 rounded-t-lg cursor-pointer">
                    <FaYoutube className="text-red-600 mt-auto mb-auto mr-1"></FaYoutube>
                    Youtube
                </a>
                <a className="text-[#403f3f] flex text-lg border-x px-4 py-1 cursor-pointer">
                    <FaFacebook className="text-blue-600 mt-auto mb-auto mr-1"></FaFacebook>
                    Facebook
                </a>
                <a className="text-[#403f3f] flex text-lg border px-4 py-1 rounded-b-lg cursor-pointer">
                    <FaTwitter className="text-blue-500 mt-auto mb-auto mr-1"></FaTwitter>
                    Twitter
                </a>
             </div>
        </div>
    );
};

export default FindUsOn;