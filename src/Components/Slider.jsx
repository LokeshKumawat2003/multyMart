// import React from "react";
// import "../componentsStyle/slider.css";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const Slider = () => {


//   return (
//     <div className="slid-box">
//       <div className="slider">
//         <div className="slider-header">
//           <h2>50% Off For Your First Shopping</h2>
//           <div className="slider-query">
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex
//               quos fugiat voluptates amet harum, voluptatum deserunt non saepe
//             </p>
//             <div className="collection-link">
//               <div className="collections">
//                 <Link>
//                   Visit Collections <FaLongArrowAltRight />{" "}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="slider-imgbox">
//           <img
//             src="https://multimart-ecommerce.onrender.com/static/media/wireless-01.1a76d777727c50ca0294.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;










import React, { useState, useEffect } from "react";
import "../componentsStyle/slider.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const sliderItems = [
  {
    title: "50% Off For Your First Shopping",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex quos fugiat voluptates amet harum, voluptatum deserunt non saepe",
    image:
      "https://multimart-ecommerce.onrender.com/static/media/wireless-02.1af857e3e55314fe3c03.png",
  },
  {
    title: "New Arrivals Just Dropped",
    description:
      "Check out the latest additions to our collection. Style and comfort await.",
    image:
      "https://multimart-ecommerce.onrender.com/static/media/hero-img.4cb525f5d6bac4b5af39.png",
  },
  {
    title: "New Arrivals Just Dropped Just Dropped",
    description:
      "Check out the latest additions to our collection. Style and comfort await.",
    image:
      "https://multimart-ecommerce.onrender.com/static/media/double-sofa-02.eac56d9c3869030c478e.png",
  },
  // Add more items as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the current index every 5 seconds for auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Adjust the time (5000ms = 5 seconds) as needed

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="slid-box">
      <div className="slider">
        <div className="slider-header">
          <h2>{sliderItems[currentIndex].title}</h2>
          <div className="slider-query">
            <p>{sliderItems[currentIndex].description}</p>
            <div className="collection-link">
              <div className="collections">
                <Link to="/collections">
                  Visit Collections <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-imgbox">
          <img
            src={sliderItems[currentIndex].image}
            alt={sliderItems[currentIndex].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
