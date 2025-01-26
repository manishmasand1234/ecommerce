import React from 'react';
import './index.css';  // Make sure this line is in your entry file


export default function Category({finalCategory , setCatname}) {

  let cat = finalCategory.map((v,i)=>{
    return(
      <li onClick={()=>setCatname(v.url)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v.name}</li>
    )
  })


  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px] mb-2'>Product Category</h3>
      <ul>
       

       {cat}


      </ul>
    </div>
  )
}
