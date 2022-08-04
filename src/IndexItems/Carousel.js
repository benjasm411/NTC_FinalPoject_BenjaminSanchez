import React from "react";

const Carousel = () =>{

    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="\Images\Index Images\img_1.jpg" alt="index_img_1"/>
                </div>
                <div class="carousel-item">
                    <img src="\Images\Index Images\img_2.jpg" alt="index_img_2"/>
                </div>
                <div class="carousel-item">
                    <img src="\Images\Index Images\img_3.jpg" alt="index_img_3"/>
                </div>
            </div>
        </div>
    );

}

export default Carousel;