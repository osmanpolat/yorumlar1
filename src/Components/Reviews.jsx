import { useState } from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Review = () => {
    const [index, setIndex] = useState(0); 
    const { name:reviewName, job:reviewJob, image:reviewImage, text:reviewText } = reviews[index]; 

    const prevPerson = () => {
        setIndex((prevValue) => { 
            let newIndex = prevValue - 1; 
            if (newIndex < 0) { 
                newIndex = reviews.length - 1; 
            }
            return newIndex;
        });
    };

    const nextPerson = () => {
        setIndex((nextValue) => { 
            let newIndex = nextValue + 1; 
            if (newIndex >= reviews.length) { 
                newIndex = 0; 
            }
            return newIndex;
        });
    };

    const randomFunct = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length);

        if (randomIndex === index) {
            randomIndex = index + 1;
          }
    
        setIndex(randomIndex);
    };

    return (
        <>
            <article className="review">
                <div className="img-container">
                    <img src={reviewImage} className="person-img" alt={reviewJob} />
                </div>
                <h4 className="author">{reviewName}</h4>
                <p className="job">{reviewJob}</p>
                <p className="info">{reviewText}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="random-btn" onClick={randomFunct}>Surprise Me</button>
            </article>
        </>
    );
};

export default Review;