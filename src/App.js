import axios from 'axios';
import './App.css';
import Category from './Category.jsx';
import './index.css'; 
import { useEffect } from 'react';
import { useState } from 'react';





function App() {

  let [finalCategory , setFinalCategory] = useState([])

  let [finalPro , setFinalpro] = useState([])

  let [catname , setCatname]= useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalCategory(finalRes)
    })
  }

  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalpro(finalRes.products)
    })
  }

  useEffect(()=>{
    getCategory();
    getProduct();

  } , [])

  useEffect(()=>{

    if(catname !== ""){
      axios.get(`${catname}`)
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalpro(finalRes.products)
    })
    }
    
  },[catname])

  let Pitems = finalPro.map((products , index) =>{
    return(
      <ProductItems key={index} pdata={products} />
    )
  })


  return (
    <div className="App">
      <h1 className='typing'>Welcome to ManiCart</h1> 
      {/* <details>
        <summary>summary</summary>
        <h1>this is the drop down section</h1>
      </details> */}

      {/* <blockquote>
        There is <del>nothing</del> <ins>no code </ins>
        either good or bad, but <del>thinking </del>
        <ins>running it </ins> makes it so.
      </blockquote>

      <p>"You are late!"</p>
      <del>
        <p>"I apologize for the delay "</p>
      </del>
      <ins>
        <p>"A wizard is never late...."</p>
      </ins>

      <p>
        I was trying to boot my computer, but I got this hilarious message:
      </p>

      <samp>
        keyboard not found <br /> Press F1 to continue 
      </samp>

      <input type="time" max={'19:00'} min={'03:00'}/>

      <input type="date" /> */}
      
      
      <div className='py-[40px]'>

        <div className='max-w-[1320px] mx-auto'>

          <h1 className='text-center text-[40px] font-[500px] mb-[30px]'> <samp>Our Products</samp>
            </h1>

          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Category finalCategory={finalCategory} setCatname={setCatname}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>

                {finalPro.length>=1  ?
                Pitems
                :
                "No product found"
              
              }

                
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;


function ProductItems({pdata}){
  console.log(pdata)
  return(
    <>
    <div className='shadow-lg text-center pb-4'>
     <img src={pdata.thumbnail} alt={pdata.id} className='w-[100%] h-[250px] cursor-pointer'/>
    <h4 className='cursor-pointer'>{pdata.title}</h4>
     <b>$ {pdata.price}</b>
    </div>
    </>
  )
}