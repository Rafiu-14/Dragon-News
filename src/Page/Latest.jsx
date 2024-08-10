import Marquee from "react-fast-marquee";

const Latest = () => {
    return (
        <div className="bg-[#f3f3f3] p-4 mt-4">
            <div className="flex">
                <button className="bg-[#d72050] text-white px-6 py-2 mr-1"><span className="animate-pulse hover:animate-none">Latest</span></button>
                <Marquee className="cursor-default text-[#403f3f] font-semibold" pauseOnHover={true}>
                    <p className="mr-4 ml-4">Nobel Laureate Muhammad Yunus Named Head of Bangladesh's Interim Government After PM Sheikh Hasina Resigns Amid Unrest</p>
                    <p className="mr-4 ml-4">Sheikh Hasina Flees to India as Bangladesh Military Takes Control Amid Deadly Protests</p>
                    <p className="mr-4 ml-4">Bangladesh in Turmoil: Interim Government Formed After Sheikh Hasina's Dramatic Resignation</p>
                    <p className="mr-4 ml-4">Military to Lead Interim Government in Bangladesh Following Weeks of Deadly Protests</p>
                    <p className="mr-4 ml-4">Protests Force PM Sheikh Hasina to Resign; Nobel Laureate Yunus to Lead Interim Government</p>
                    <p className="mr-4 ml-4">Bangladesh Crisis: Army Announces Interim Government as Sheikh Hasina Resigns and Flees</p>
                    <p className="mr-4 ml-4">Unrest in Bangladesh: Nobel Laureate Yunus Takes Charge After PM Hasina's Resignation</p>
                    <p className="mr-4 ml-4">Bangladesh: Sheikh Hasina Resigns Amid Protests, Military Announces Interim Leadership</p>
                    <p className="mr-4 ml-4">PM Sheikh Hasina Resigns; Bangladesh Military to Form Interim Government Amid Protests</p>
                    <p className="mr-4 ml-4">Bangladesh's Interim Government to be Led by Muhammad Yunus After Sheikh Hasina Steps Down</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;