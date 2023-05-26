import { Swiper, SwiperSlide } from "swiper/react";
import "./../styles/carousel.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export function Carousel({ id }) {
  return (
    <div id={id}>
      <div className="title-carousel">
        <h2 className="title-mix">Los mas escuchados</h2>
        <p className="p-16 ln-32">
          Disfruta de tu música a un solo click y descube que discos has
          guardado dentro de “mis álbumes”
        </p>
      </div>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="card-img">
              <img src="img/S-1.jpg" alt="slide_image" />
              <div className="info-album">
                <h3 className="name-album">{"{albumName}"}</h3>
                <p className="date-album">Publicado: {"{publishedDate}"}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-img">
              <img src="img/S-2.jpg" alt="slide_image" />
              <div className="info-album">
                <h3 className="name-album">{"{albumName}"}</h3>
                <p className="date-album">Publicado: {"{publishedDate}"}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-img">
              <img src="img/S-3.jpg" alt="slide_image" />
              <div className="info-album">
                <h3 className="name-album">{"{albumName}"}</h3>
                <p className="date-album">Publicado: {"{publishedDate}"}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-img">
              <img src="img/S-4.jpg" alt="slide_image" />
              <div className="info-album">
                <h3 className="name-album">{"{albumName}"}</h3>
                <p className="date-album">Publicado: {"{publishedDate}"}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-img">
              <img src="img/S-5.jpg" alt="slide_image" />
              <div className="info-album">
                <h3 className="name-album">{"{albumName}"}</h3>
                <p className="date-album">Publicado: {"{publishedDate}"}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-img">
              <img src="img/S-3.jpg" alt="slide_image" />
              <div className="info-album">
                <h3 className="name-album">{"{albumName}"}</h3>
                <p className="date-album">Publicado: {"{publishedDate}"}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
