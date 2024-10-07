"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [isHide, setIsHide] = useState(false);
  const [openFilter, setOpenFilter] = useState(null);
  const [openRecommend, setOpenRecommend] = useState(true);
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const arrow = useRef();
  const recommendArrow = useRef();
  const idealArrow = useRef();
  const occasionArrow = useRef();
  const workArrow = useRef();
  const fabricArrow = useRef();
  const segmentArrow = useRef();
  const suitableForArrow = useRef();
  const rawMaterialsArrow = useRef();
  const patternArrow = useRef();

  useEffect(() => {
    getData(); 


    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  const handleHide = () => {
    setIsHide(!isHide);
    if (arrow.current.src.includes("rightarrow.svg")) {
      arrow.current.src = "/leftarrow.svg";
    } else {
      arrow.current.src = "/rightarrow.svg";
    }
  };

  const handleFilterToggle = (filterName, filterArrowRef) => {
    if (filterArrowRef.current.src.includes("/downarrow.svg")) {
      filterArrowRef.current.src = "/uparrow.svg";
    } else {
      filterArrowRef.current.src = "/downarrow.svg";
    }

    setOpenFilter((prevFilter) => (prevFilter === filterName ? null : filterName));
  };

  const handleRecommend = () => {
    setOpenRecommend(!openRecommend);
    if (recommendArrow.current.src.includes("/downarrow.svg")) {
      recommendArrow.current.src = "/uparrow.svg";
    } else {
      recommendArrow.current.src = "/downarrow.svg";
    }
  };

  const getData = async () => {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.json();
    setProducts(data);
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="head2">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusantium corrupti vel, sunt officiis maiores consequatur alias
            fugit sed quos!
          </p>
        </div>
        <section className="tab">
          <div className="mobileFilter">Filter</div>
          <div className="options">
            <h3>{products.length} ITEMS</h3>
            <div className="hidefilter">
              <img ref={arrow} src="/leftarrow.svg" alt="Left arrow" />
              {isHide ? (
                <span onClick={handleHide}>SHOW FILTER</span>
              ) : (
                <span onClick={handleHide}>HIDE FILTER</span>
              )}
            </div>
          </div>
          <div onClick={handleRecommend} className="recommended">
            <span>RECOMMENDED</span>
            <img ref={recommendArrow} src="/downarrow.svg" alt="Down arrow" />
            <div className={openRecommend ? "hideRecommend" : "recommendedOpen"}>
              <span>RECOMMENDED</span>
              <span>NEWEST FIRST</span>
              <span>POPULAR</span>
              <span>PRICE : HIGH TO LOW</span>
              <span>PRICE : LOW TO HIGH</span>
            </div>
          </div>
        </section>

        <main className="main">
          <div className={isHide ? "filterhide" : "filters"}>
            <div className="custom">
              <input type="checkbox" />
              <span>CUSTOMIZABLE</span>
            </div>
            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("ideal", idealArrow)}
                className="ideals filter"
              >
                <span>IDEAL FOR</span>
                <img ref={idealArrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "ideal" ? "" : "allhide"}>
                <div className="unselect">Unselect all</div>
                <div className="checkbox">
                  <li>
                    <input type="checkbox" />
                    <span>Men</span>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <span>Women</span>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <span>Baby & Kids</span>
                  </li>
                </div>
              </div>
            </div>

          </div>

          <div className={isHide ? "fullContent" : "content"}>
            <div className="items">
              {products.map((item) => (
                <article className="item" key={item.id}>
                  <img className="image" src={item.image} alt="Product image" />
                  <h3>{item.title}</h3>
                  <p>{item.description.slice(0, 35)}...</p>
                  <div className="para">
                    <p>
                      {" "}
                      <span>Price:</span> {item.price}$
                    </p>
                    <img src="/heart.svg" alt="Like" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
