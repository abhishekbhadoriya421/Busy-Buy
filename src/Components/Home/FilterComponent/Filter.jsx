import { useContext, useEffect, useState } from "react";
import style from "../homeStyle.module.css";
import { FireBaseContext } from "../../../ContextAPI/FireBaseUtilityProvider";
import { ProductData } from "../../../data";

export default function Filter() {
  const [menCloths, setMenCloths] = useState(false);
  const [womenCloths, setWomenCloths] = useState(false);
  const [jewelry, setJewelry] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [priceRange,setPriceRange] = useState(35000);
  

  const { setProducts} = useContext(FireBaseContext);
  
  // If All are set to False the show all Product's else show only selected Product's
  useEffect(() => {
    const categoryFilters = {
      menCloths,
      womenCloths,
      jewelry,
      electronics,
    };
    // select on the key which are set to true
    const selectedCategories = Object.keys(categoryFilters).filter(
      (category) => categoryFilters[category]
    );
    
    // if selectedCategories length 0 its mean all values are set to false
    if (selectedCategories.length === 0) {
        // Also check price 
        let filteredArray = ProductData.filter((ele)=>{
            return ele.price<=priceRange;
        })
      setProducts(filteredArray);
    } else {
        // now if selectedCategories includes ele.category then put value in filtered array
      let filteredArray = ProductData.filter((ele) =>
        selectedCategories.includes(ele.category)
      );

        //  here we are checking the price also 
            filteredArray = filteredArray.filter((ele)=>{
                return ele.price<=priceRange;
            })
        //  now set Product array to Filtered array
        setProducts(filteredArray);
    }

  }, [menCloths, womenCloths, jewelry, electronics, setProducts,priceRange]);

  const handleRangeChange = (e) =>{
    const range = e.target.value;
    setPriceRange((range*700));
  }

  return (
    <>
      <div className={style.filter}>
        <h2 className={style.filterHeading}>Filter</h2>
        <div className={style.priceRange}>
          <p>Price: {priceRange}</p>
          <input type="range"
          className={style.input}
          onChange={handleRangeChange}
          />
        </div>
        <h2 className={style.filterHeading}>Category</h2>
        <div className={style.category}>
          <div className={style.displayFlex}>
            <input
              type="checkbox"
              onChange={() => setMenCloths(!menCloths)}
              className={style.checkBox}
              checked={menCloths}
            />
            <p>men's Clothing</p>
          </div>
          <div className={style.displayFlex}>
            <input
              type="checkbox"
              onChange={() => setWomenCloths(!womenCloths)}
              className={style.checkBox}
              checked={womenCloths}
            />
            <p>Women's Clothing</p>
          </div>
          <div className={style.displayFlex}>
            <input
              type="checkbox"
              onChange={() => setJewelry(!jewelry)}
              className={style.checkBox}
              checked={jewelry}
            />
            <p>Jewelry</p>
          </div>
          <div className={style.displayFlex}>
            <input
              type="checkbox"
              onChange={() => setElectronics(!electronics)}
              className={style.checkBox}
              checked={electronics}
            />
            <p>Electronics</p>
          </div>
        </div>
      </div>
    </>
  );
}
