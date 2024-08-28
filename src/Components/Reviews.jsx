import { useState } from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

//Review component App.js ana component içine buradan tanımlanıyor.
const Review = () => {
    const [index, setIndex] = useState(0);  // index 0 a eşitleyerek datadan gelen ilk veriyi ekrana stateden çekerek basıyoruz
    const { name:reviewName, job:reviewJob, image:reviewImage, text:reviewText } = reviews[index];  //arrray ve obje içiçe destructoring

    const prevPerson = () => {
        setIndex((prevValue) => { 
            let newIndex = prevValue - 1;  // prevValue degeri 1 azaltılır ve newIndex'e aktarılır
            if (newIndex < 0) {  // index sıfırken geri gidilmek istendiğinde index negatif olamayacağı için dizinin son elemanına geçiliyor
                newIndex = reviews.length - 1; 
            }
            return newIndex;
        });
    };

    const nextPerson = () => {
        setIndex((nextValue) => {  //nextValue index degeri
            let newIndex = nextValue + 1;   // nextValues degeri 1 arttırılır ve newIndex'e aktarılır
            if (newIndex >= reviews.length) {  //newIndex 3 olduğunda veya 4 olduğunda , 4 diye bir indeks olmadığı için 0'a yönleniyor
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
    
        setIndex(randomIndex); // Yeni rastgele indeksi ataması yapılır
    };

    // return içinde jsx dili tanımlanıyor html etiketleri içinde, property leri için değişkenlerini ve fonksiyonları atayarak  tanımlıyoruz
    //icons kütüphanesi tanımlandı
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