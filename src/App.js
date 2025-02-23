import axios from "axios";
import "./App.css";
import Category from "./Category.jsx";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalPro, setFinalpro] = useState([]);
  let [catname, setCatname] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalpro(finalRes.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  useEffect(() => {
    if (catname !== "") {
      axios
        .get(`${catname}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalpro(finalRes.products);
        });
    }
  }, [catname]);

  let Pitems = finalPro.map((products, index) => {
    return <ProductItems key={index} pdata={products} />;
  });

  return (
    <div className="App">
      
  <div className="flex justify-center items-center min-h-[30vh] w-full px-4 py-6 overflow-visible">
    <h1 className="text-xl sm:text-7xl lg:text-9xl font-bold typing text-center leading-tight break-words whitespace-normal w-full">
      Welcome to ManiCart
    </h1>
  </div>




      <div className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-2xl sm:text-4xl font-semibold mb-8">
            <span>Our Products</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[30%_auto] gap-6">
            {/* Sidebar Category */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <Category finalCategory={finalCategory} setCatname={setCatname} />
            </div>

            {/* Product Grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {finalPro.length >= 1 ? Pitems : "No product found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function ProductItems({ pdata }) {
  return (
    <div className="shadow-lg text-center pb-4 rounded-lg overflow-hidden">
      <img
        src={pdata.thumbnail}
        alt={pdata.id}
        className="w-full h-60 sm:h-72 object-cover cursor-pointer"
      />
      <h4 className="text-lg font-semibold mt-2 cursor-pointer">
        {pdata.title}
      </h4>
      <b className="text-lg text-blue-600">$ {pdata.price}</b>
    </div>
  );
}
