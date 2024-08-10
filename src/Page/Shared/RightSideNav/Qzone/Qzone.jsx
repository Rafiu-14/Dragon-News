import qzone1 from "../../../../../public/qZone1.png"
import qzone2 from "../../../../../public/qZone2.png"
import qzone3 from "../../../../../public/qZone3.png"


const Qzone = () => {
    return (
        <div className="bg-[#f3f3f3] p-1 mt-8 rounded-md">
            <h1 className="text-[#403f3f] text-2xl font-semibold mt-4">QZone</h1>
            <div className="space-y-16">
                <img className="cursor-pointer mt-4" src={qzone1}/>
                <img className="cursor-pointer" src={qzone2}/>
                <img className="cursor-pointer" src={qzone3}/>
            </div>
        </div>
    );
};

export default Qzone;