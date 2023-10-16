import "./Slider.css";
import Slider from "react-slick";
import MenClothes from "../../assets/img/men-clothes.jpg";
import WomenClothes from "../../assets/img/women-clothes.jpg";
import Jewerly from "../../assets/img/jewerly.jpg";
import Digital from "../../assets/img/electronics.jpg";

const SliderShop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    // vertical: true,
    adaptiveHeight: true,
    arrow: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div style={{ width: "100vw" }}>
          <img
            style={{ width: "100%" }}
            alt="mens clothes"
            title="img-slider"
            src={MenClothes}
          />
        </div>
        <div style={{ width: "100vw" }}>
          <img
            style={{ width: "100%" }}
            alt="womens clothes"
            title="img-slider"
            src={WomenClothes}
          />
        </div>
        <div style={{ width: "100vw" }}>
          <img
            style={{ width: "100%" }}
            alt="womens clothes"
            title="img-slider"
            src={Jewerly}
          />
        </div>
        <div style={{ width: "100vw" }}>
          <img
            style={{ width: "100%" }}
            alt="womens clothes"
            title="img-slider"
            src={Digital}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderShop;
