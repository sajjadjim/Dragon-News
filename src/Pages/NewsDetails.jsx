import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import RightAside from '../Components/HomeLayout/RightAside'
import NewsDetailsCard from '../Components/NewsDetailsCard'
import { useLoaderData, useParams } from 'react-router';

function NewsDetails() {
    const data = useLoaderData();
    const {id} = useParams();
const [news , setNews] = useState({})
// console.log(id, news)
useEffect(()=>{
        const newDetails = data.find((singleNews)=> singleNews.id == id)
setNews(newDetails)
console.log(news)
    },[data,id])
    return (
        <div>
           <header>
            <Header></Header>
            <main className='w-11/12 grid grid-cols-12 py-5'>
<section className='col-span-9'>
    <NewsDetailsCard news={news}></NewsDetailsCard>
</section>
<aside className='col-span-3'>
    <RightAside></RightAside>
</aside>
            </main>
           </header>
        </div>
    )
}

export default NewsDetails
