import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import pic1 from '../../src_assets/banner1.jpg';
import pic2 from '../../src_assets/banner2.jpg';
import pic3 from '../../src_assets/banner3.jpg';
import pic4 from '../../src_assets/banner4.jpg';
import pic5 from '../../src_assets/banner5.jpg';
import pic6 from '../../src_assets/banner6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';


function Visual() {
  return (
    <figure className="myScroll on">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 1번차량 */}
        <SwiperSlide>
          <img src={pic1} alt='' />
          <div className="pricepic">
            <h1>MINI 3-DOOR HATCH.</h1>
            <p className="price">￦ 33,100,000 ~</p>
            <p className="carOption">
              <span><FontAwesomeIcon icon={faCouch} /></span>
              four seats<br />
              <span><FontAwesomeIcon icon={faSuitcase} /></span>
              278L ~ 731L Trunk space<br />
              <span><FontAwesomeIcon icon={faGaugeHigh} /></span>
              136hp ~ 231hp
            </p></div>
        </SwiperSlide>

        {/* 2번차량 */}
        <SwiperSlide>
          <img src={pic2} alt='' />

          <div className="pricepic">
            <h1>MINI 5-DOOR HATCH.</h1>
            <p className="price">￦ 34,100,000 ~</p>
            <p className="carOption">
              <span><FontAwesomeIcon icon={faCouch} /></span>
              five seats<br />
              <span><FontAwesomeIcon icon={faSuitcase} /></span>
              278L ~ 941L Trunk space<br />
              <span><FontAwesomeIcon icon={faGaugeHigh} /></span>
              136hp ~ 192hp
            </p></div>

        </SwiperSlide>

        {/* 3번차량 */}
        <SwiperSlide>
          <img src={pic3} alt='' />

          <div className="pricepic">
            <h1>MINI CONVERTIBLE.</h1>
            <p className="price">￦ 44,500,000 ~</p>
            <p className="carOption">
              <span><FontAwesomeIcon icon={faCouch} /></span>
              four seats<br />
              <span><FontAwesomeIcon icon={faSuitcase} /></span>
              215L ~ 661L Trunk space<br />
              <span><FontAwesomeIcon icon={faGaugeHigh} /></span>
              136hp ~ 231hp
            </p></div>

        </SwiperSlide>

        {/* 4번차량 */}
        <SwiperSlide>
          <img src={pic4} alt='' />

          <div className="pricepic">
            <h1>MINI CLUBMAN.</h1>
            <p className="price">￦ 37,300,000 ~</p>
            <p className="carOption">
              <span><FontAwesomeIcon icon={faCouch} /></span>
              five seats<br />
              <span><FontAwesomeIcon icon={faSuitcase} /></span>
              360L ~ 1,250L Trunk space<br />
              <span><FontAwesomeIcon icon={faGaugeHigh} /></span>
              136hp ~ 306hp
            </p></div>
        </SwiperSlide>

        {/* 5번차량 */}
        <SwiperSlide>
          <img src={pic5} alt='' />

          <div className="pricepic">
            <h1>MINI COUNTRYMAN.</h1>
            <p className="price">￦ 40,300,000 ~</p>
            <p className="carOption">
              <span><FontAwesomeIcon icon={faCouch} /></span>
              five seats<br />
              <span><FontAwesomeIcon icon={faSuitcase} /></span>
              1,390L Trunk space<br />
              <span><FontAwesomeIcon icon={faGaugeHigh} /></span>
              136hp ~ 306hp
            </p></div>
        </SwiperSlide>

        {/* 6번차량 */}
        <SwiperSlide>
          <img src={pic6} alt='' />

          <div className="pricepic">
            <h1>MINI ELECTRIC.</h1>
            <p className="price">￦ 45,600,000 ~</p>
            <p className="carOption">
              <span><FontAwesomeIcon icon={faCouch} /></span>
              five seats<br />
              <span><FontAwesomeIcon icon={faSuitcase} /></span>
              211L ~ 731L Trunk space<br />
              <span><FontAwesomeIcon icon={faGaugeHigh} /></span>
              135kW
            </p></div>

        </SwiperSlide>
      </Swiper>
    </figure>
  );
}

export default Visual;