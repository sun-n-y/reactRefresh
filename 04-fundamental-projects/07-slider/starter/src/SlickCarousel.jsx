import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { longList } from './data';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {longList.map((person, personIndex) => {
        const { name, image, title, quote, id } = person;
        return (
          <div key={id}>
            <img src={image} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </div>
        );
      })}
    </Slider>
  );
}
