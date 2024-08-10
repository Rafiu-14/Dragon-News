import Advertisement from "./Advertisement/Advertisement";
import FindUsOn from "./FindUsOn/FindUsOn";
import LoginWith from "./LoginWith/LoginWith";
import Qzone from "./Qzone/Qzone";

 
const RightSideNav = () => {
    return (
        <div>
            <LoginWith></LoginWith>
            <FindUsOn></FindUsOn>
            <Qzone></Qzone>
            <Advertisement></Advertisement>
        </div>
    );
};

export default RightSideNav;