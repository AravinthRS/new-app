import React from "react";
import { Carousel } from "react-responsive-carousel";

function MyCarousel() {
  // const [interval, setInterval] = useState(3000);
  // const car = [{ showThumbs: true }];
  // const onChange = (item) => {
  //   setInterval(item.props["data-interval"]);
  // };
  return (
    <div className="myCarousel">
      <Carousel
        // {...car}
        // onChange={onChange}
        autoPlay
        interval="5000"
        transitionTime="5000"
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58eK3PSnpK5k65qZF5R0wzb91wGFIMJvIFg&usqp=CAU"
            className="carcard"
            alt="carcard1"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEURmvzmYWUlst4HQ8qvbbmP1K90Fl_XdGmg&usqp=CAU"
            className="carcard"
            alt="carcard2"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyaz-m8r2m3BKK6tMHddDMNStz6nRiBFMtg&usqp=CAU"
            className="carcard"
            alt="carcard3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
