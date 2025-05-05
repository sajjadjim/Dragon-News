import React, { use } from 'react';
import { NavLink } from 'react-router';

const catagoriespromise = fetch('/public/demo-data/categories.json').then(res=> res.json()) 
const Categories = () => {
const cateories = use(catagoriespromise)
// console.log(cateories) 
    return (
        <div>
            <p className='font-bold'>All Categories {cateories.length}</p>
            <div className='grid  gap-2'>
                {
                    cateories.map((categorie , index) =><NavLink key={index} to={`/cateroy/${categorie.id}`}  className="btn bg-white text-[#9F9F9F] border-0 hover:bg-[#E7E7E7] " >{categorie.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;