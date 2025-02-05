import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const cards = [
    {
        image: "/assets/arabian-ranches.jpg",
        title: "Arabian Ranches",
        description: "This is the fourth card",
    },
    {
        image: "/assets/arabian-ranches-ii.jpg",
        title: "Arabian Ranches II ",
        description: "This is the fifth card",
    },
    {
        image: "/assets/downtown-dubai.jpg",
        title: "Downtown Dubai",
        description: "This is the sixth card",
    },
    {
        image: "/assets/dubai-hills-estate.jpg",
        title: "Dubai Hills Estate",
        description: "This is the first card",
    },
    {
        image: "/assets/dubai-marina.png",
        title: "Dubai Marina",
        description: "This is the second card",
    },
    {
        image: "/assets/emirates-living.jpg",
        title: "Emirates Living ",
        description: "This is the third card",
    },
];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const updateItemsToShow = () => {

            if (window.innerWidth <= 768) {
                setItemsToShow(1);
            } else {
                setItemsToShow(3);
            }
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);

        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - itemsToShow + cards.length) % cards.length
        );
    };

    return (
        <div>
            <div className="our-services">Our Services</div>
            <div className="carousel-container">
                <div className="carousel">
                    {cards.slice(currentIndex, currentIndex + itemsToShow).map((card, index) => (
                        <div className="carousel-card" key={index}>
                            <img className="carousel-card-image" src={card.image} alt={card.title} />
                            <span className="carousel-title">{card.title}</span>
                        </div>
                    ))}
                    <button className="carousel-btn prev" onClick={handlePrev}>
                        &lt;
                    </button>
                    <button className="carousel-btn next" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;