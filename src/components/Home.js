import React, { useState } from "react";
import search from "../images/search-icon.png";
import all from "../images/all.png";
import table from "../images/table.png";
import chair from "../images/chair.png"
import sofa from "../images/sofa.png";

function Home({setIsSearch}) {
    const [currentIndex, setCurrentIndex] = useState(randomNumber(0, 2))

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const images = [
        {url: "https://leibal.wpenginepowered.com/wp-content/uploads/2022/09/leibal_bb-chair_corpus-studio_2-scaled.webp"},
        {url: "https://leibal.wpenginepowered.com/wp-content/uploads/2022/01/leibal_loop-table_nicholas-bijan-pourfard_9.jpeg"},
        {url: "https://leibal.wpenginepowered.com/wp-content/uploads/2021/12/leibal_roll-top-sofa_sedilia_5.jpg"}
    ]

    function goToPrev() {
        const isFirstSlice = currentIndex === 0;
        const newIndex = isFirstSlice ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function goToNext() {
        const isLastSlice = currentIndex === images.length - 1;
        const newIndex = isLastSlice ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    function handleClick() {
        setIsSearch(true)
    }

    return (
        <main>
            <div className="main-container">
                <p className="main-year">2022</p>
                <img src={search} alt='search-icon' className="search-icon" onClick={handleClick}/>
                <div className="main-copies">
                    <div className="copies-title">BUILT FOR JOY AND LIVING.</div>
                    <p>What makes home feel welcoming, luxurious and - most of all - livable, is so<br></br>
                        deelply personal to each of us. Our brand has collected works of some of the <br></br>
                        most creative designers around the world. This season's collection invites you<br></br>
                        to explore how material, shape and scale redefine home through your own<br></br>
                        design vision - creating interiors that inspire you every day.
                    </p>
                </div>
                <div>
                    <div className="img-container">
                        <div className="images">
                            <img src={`${images[currentIndex].url}`} alt="image" className="main-img"/>
                        </div>
                        <span className="prev-btn" onClick={goToPrev}><i class='bx bx-left-arrow-alt' ></i></span>
                        <span className="next-btn" onClick={goToNext}><i class='bx bx-right-arrow-alt' ></i></span>
                    </div>
                </div>
                <div className="main-season">
                    FALL COLLECTION
                </div>
            </div>

            <div className="category-container">
                <div className="category">
                    <p>TABLE</p>
                    <div className="category-img-container">
                        <img src={table} alt="image" />
                    </div>
                </div>
                <div className="category">
                    <p>CHAIR</p>
                    <div className="category-img-container">
                        <img src={chair} alt="image" />
                    </div>
                </div>
                <div className="category">
                    <p>SOFA</p>
                    <div className="category-img-container">
                        <img src={sofa} alt="image" />
                    </div>
                </div>
                <div className="category-all">
                    <div className="category-all-container">
                        <img src={all} alt="image" />
                    </div>
                </div>
                <div className="more">
                    <p>SHOP ALL</p>
                </div>
            </div>

            <footer className="footer">
                <p>Ⓒ 2022 HAUS LLC. ALL RIGHTS RESERVED</p>
            </footer>
        </main>
    )
}

export default Home;