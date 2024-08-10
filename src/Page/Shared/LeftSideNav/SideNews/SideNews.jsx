import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

const SideNews = () => {
    const [SideNews, setSideNews] = useState([])
    useEffect(()=>{
        fetch('sideNews.json')
            .then(res => res.json())
            .then(data =>  setSideNews(data))
    },[])
    return (
        <div>
            {
                SideNews.map(topNews => <Link
                key={topNews.id}
                >
                    <img src={topNews.image} alt="Load" />
                        <h1 className="text-[#403f3f] text-xl font-semibold">{topNews.title}</h1>
                        <div className="flex justify-between">
                            <p className="font-medium">{topNews.category}</p>
                            <div className="flex text-[#9f9f9f] font-medium mb-10">
                                <SlCalender className="my-auto mr-2"></SlCalender>
                                <p>{topNews.date}</p>
                            </div>
                        </div>
                </Link>)
            }
        </div>
    );
};

export default SideNews;