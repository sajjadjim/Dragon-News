import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const Category = () => {
    const {id} = useParams()
    // console.log(id)
    const data = useLoaderData()

    const [categoryNews, setCategoryNews] = useState([])
    // console.log(data)
    useEffect(()=>{
     
        if(id=='0'){
            setCategoryNews(data)
            return;
        }

        else if(id == '1')
        {
            const filterNews = data.filter((news)=> news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }
        else{
            const filterNews = data.filter((news)=> news.category_id == id)
            setCategoryNews(filterNews)
        }
    },[data,id])
    return (
        <div>
            <p>Category News {categoryNews.length}</p>
            <div className=' gird  grid-cols-1 '>
                {
                    categoryNews.map((news , index) => <NewsCard key={index} news={news}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default Category;