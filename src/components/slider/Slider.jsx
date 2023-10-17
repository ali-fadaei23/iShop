import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    <div style={{ width: "100vw", height: "90vh" }}>
      <Slider {...settings}>
        <div className="slider-content mens-clothes">
          <img alt="mens clothes" title="img-slider" src={MenClothes} />
        </div>
        <div className="slider-content womens-clothes">
          <img alt="womens clothes" title="img-slider" src={WomenClothes} />
        </div>
        <div className="slider-content jewerly">
          <img alt="jewerly" title="img-slider" src={Jewerly} />
        </div>
        <div className="slider-content digital">
          <img alt="digital" title="img-slider" src={Digital} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderShop;
