import React from "react";
import "../styles/communitypage.css"; // Import CSS

const cardData = [
    {
        text: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
        img: "/assets/community-arabian-ranches.png",
        title: "Arabian Ranches",
    },
    {
        text: "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
        img: "/assets/arabian-ranches-ii.jpg",
        title: "Arabian Ranches II",
    },
    {
        text: "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it's hard to overstate the prominence of this community.",
        img: "/assets/community-downtown-dubai.png",
        title: "Downtown Dubai",
    },
    {
        text: "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
        img: "/assets/dubai-hills-estate-ii.png",
        title: "Dubai Hills Estate",
    },
    {
        text: "Dubai Marina is one of the world's largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
        img: "/assets/community-dubai-marina.png",
        title: "Dubai Marina",
    },
    {
        text: "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
        img: "/assets/community-emirates-living.png",
        title: "Emirates Living",
    },
];

function CommunityPage() {
    return (
        <div className="upper-section">
            <div className="community-text">
                <span>
                    Communities
                </span>
                <span className="number-space">&nbsp; </span>
                <span>
                    we manage
                </span>
            </div>
            <div className="card-group">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.img} alt={card.title} className="card-img" />
                        <span className="card-description">
                            {card.text}
                        </span>
                        <div className="card-footer">
                            <span className="card-title">{card.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommunityPage;
