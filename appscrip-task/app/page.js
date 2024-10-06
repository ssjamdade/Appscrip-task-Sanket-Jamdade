"use client"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef, useState, useEffect } from "react";


export default function Home() {
  const [isHide, setIsHide] = useState(false);
  const [openFilter, setOpenFilter] = useState(null);
  const [openRecommend, setopenRecommend] = useState(true)
  const [products, setproducts] = useState([])

  const arrow = useRef();
  const verticalarrow = useRef();

  useEffect(() => {
    getData()
  }, [])

  const handleHide = () => {
    setIsHide(!isHide)

    if (arrow.current.src.includes("rightarrow.svg")) {
      arrow.current.src = "/leftarrow.svg";
    } else {
      arrow.current.src = "/rightarrow.svg";
    }
  };

  const handleFilterToggle = (filterName) => {
    setOpenFilter((prevfilter) => (prevfilter === filterName ? null : filterName));
  };

  const handleRecommend = () => {
    setopenRecommend(!openRecommend)
  }

  const getData = async () => {
    let a = await fetch('https://fakestoreapi.com/products')
    let r = await a.json()
    setproducts(r)
    console.log(r)
  }

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
          <div className="mobileFilter">
            Filter
          </div>
          <div className="options">
            <h3>3245 ITEMS</h3>
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
            <img src="/downarrow.svg" alt="Down arrow" />
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
                onClick={() => handleFilterToggle("ideal")}
                className="ideals filter"
              >
                <span>IDEAL FOR</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
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

            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("occasion")}
                className="occasion filter"
              >
                <span>OCCASION</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "occasion" ? "" : "allhide"}>
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

            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("work")}
                className="work filter"
              >
                <span>WORK</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "work" ? "" : "allhide"}>
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

            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("fabric")}
                className="fabric filter"
              >
                <span>FABRIC</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "fabric" ? "" : "allhide"}>
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
            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("segment")}
                className="segment filter"
              >
                <span>SEGMENT</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "segment" ? "" : "allhide"}>
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
            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("suitableFor")}
                className="suitableFor filter"
              >
                <span>SUITABLE FOR</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "suitableFor" ? "" : "allhide"}>
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
            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("rawMaterials")}
                className="rawMaterials filter"
              >
                <span>RAW MATERIALS</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "rawMaterials" ? "" : "allhide"}>
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
            <div className="filterType">
              <div
                onClick={() => handleFilterToggle("pattern")}
                className="pattern filter"
              >
                <span>PATTERN</span>
                <img ref={verticalarrow} src="/downarrow.svg" alt="Down arrow" />
              </div>
              <span>All</span>
              <div className={openFilter === "pattern" ? "" : "allhide"}>
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

              {products.map((item) => {

                return <article className="item" key={item.id}>
                  <img className="image" src={item.image} alt="Bag image" />

                  <h3>{item.title}</h3>
                  <p>{item.description.slice(0, 35)}</p>
                  <div className="para">

                    <p> <span>Price:</span> {item.price}$</p>
                    <img src="/heart.svg" alt="Like" />
                  </div>

                </article>

              })}

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
