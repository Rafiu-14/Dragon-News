import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const News = () => {
    const [newss, setNewss] = useState([])
    useEffect(()=>{
        fetch('Newss.json')
            .then(res => res.json())
            .then(data => setNewss(data))
    },[])
    const maxLength = 100;
    return (
        <div>
            {newss.map((news) => {
                const shortDescription = news.details.length > maxLength
                    ? news.details.substring(0, maxLength) + '...'
                    : news.details;

                return (
                    <div key={news._id}>
                        <div className="flex justify-between bg-[#f3f3f3] p-3 rounded-t-md mt-10">
                            <div className="flex gap-2">
                                <img className="w-10 rounded-full" src={news.author.img} alt="Author" />
                                <p className="my-auto text-xl">
                                    <span className="font-medium">Journalist from:</span>{' '}
                                    <span className="text-[#403f3f] font-bold">{news.author.name}</span>
                                </p>
                            </div>
                            <div className="flex gap-3 text-2xl my-auto">
                                <CiBookmark />
                                <CiShare2 />
                            </div>
                        </div>
                        <div className="border border-t-0 p-1 rounded-b-md  ">
                            <h1 className="text-[#403f3f] text-xl font-bold mt-2">{news.title}</h1>
                            <img className="rounded-md mt-3 hover:shadow-lg hover:" src={news.thumbnail_url} alt="Thumbnail" />
                            <p className="mt-2">
                                {shortDescription}
                                {news.details.length > maxLength && (
                                    <Link 
                                        to={`/news/${news._id}`} 
                                        target="_blank"
                                        style={{ color: 'orange', cursor: 'pointer' }}
                                    >
                                        {' Read More'}
                                    </Link>
                                )}
                            </p>
                            <hr className="my-5" />
                            <div className="text-[#706f6f] flex justify-between">
                                <p className="flex gap-2">Rating: <span className="font-semibold">{news.rating.number}</span> <FaStar className="my-auto text-amber-600"></FaStar></p>
                                <p className="flex gap-2"> <FaEye className="my-auto"></FaEye> <span>{news.total_view}</span></p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default News;