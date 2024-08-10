import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNews from "./SideNews/SideNews";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h1 className="text-[#403f3f] text-2xl font-semibold">All Caterogy</h1>
            {
                categories.map(category => <Link
                    className="block text-[#9f9f9f] font-medium"
                    key={category.id}
                >{category.name}</Link>)
            }


            <SideNews></SideNews>

        </div>
    );
};

export default LeftSideNav;