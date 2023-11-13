import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import GamingImag from "../images/Rectangle 1082.png";
import GamingImagw from "../images/Rectangle 1086.png";
import GamingImagq from "../images/Rectangle 1085.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const GamesDate = [
  { id: 1, Titel: "Horizon: Call of the mountain", imag: GamingImag },
  { id: 2, Titel: "Half - Life: ALYX", imag: GamingImagw },
  { id: 3, Titel: "Fight Night Champion", imag: GamingImagq },
  { id: 4, Titel: "Horizon: Call of the mountain", imag: GamingImag },
  { id: 5, Titel: "Half - Life: ALYX", imag: GamingImagw },
  { id: 6, Titel: "Fight Night Champion", imag: GamingImagq },
  { id: 7, Titel: "Fight Night Champion", imag: GamingImagw },
  { id: 8, Titel: "Fight Night Champion", imag: GamingImag },
];

export default function Games() {
  return (
    <div>
      <ul className="flex justify-evenly flex-wrap lg:mt-1 mt-8 relative">
        <h1 className="text-4xl font-medium">Top Games</h1>
        <p className="text-center text-xs mt-5">
          If you buy video 2 games, you will receive 1 video game for free,
          <br />
          along with a <span className="text-efrct">50%</span> discount.
        </p>

        <div className="flex space-x-5 justify-center items-center">
          <div
            style={{ backgroundColor: "rgba(61, 222, 237, 0.10) " }}
            className=" w-10 h-10 flex justify-center items-center cursor-pointer swiper-button-next custom-navigation"
          >
            <FaArrowLeft className="text-efrct text-xl " />
          </div>
          <div
            style={{ backgroundColor: "rgba(61, 222, 237, 0.10) " }}
            className=" w-10 h-10 flex justify-center items-center cursor-pointer swiper-button-prev custom-navigation"
          >
            <FaArrowRight className="text-efrct " />
          </div>
        </div>
      </ul>

      <div className=" container m-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {GamesDate.map((item, index) => (
            <SwiperSlide
              key={index}
              className="space-x-5 space-y-5 flex my-36 container m-auto"
            >
              <div className=" hover:text-hover transition-all cursor-pointer">
                <img src={item.imag} alt="images" width={290} />
                <h1 className="mt-6 text-xl">{item.Titel}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
