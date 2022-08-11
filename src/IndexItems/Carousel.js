import React from "react";

const Carousel = () =>{

    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="\Images\Index Images\img_1.jpg" alt="index_img_1"/>
                </div>
                <div className="carousel-item">
                    <img src="\Images\Index Images\img_2.jpg" alt="index_img_2"/>
                </div>
                <div className="carousel-item">
                    <img src="\Images\Index Images\img_3.jpg" alt="index_img_3"/>
                </div>
            </div>
        </div>
    );

}

export default Carousel;