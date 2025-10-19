import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";
import Header from './header';
import Footer from './footer';
import Pic1  from '../images/bn.jpg';
import Pic2  from '../event/pic2.jpg'; 
import Pic3  from '../event/pic3.jpg';
import Pic4  from '../event/pic4.jpg';
import Pic5  from '../event/pic5.jpg';
import Pic6  from '../event/pic6.jpg';
import Pic7  from '../event/pic7.jpg';
import Pic8  from '../event/pic8.jpg';
import Pic9  from '../event/pic9.jpg';
import Pic10 from '../event/pic10.jpg';
import Pic11 from '../event/pic11.jpg';
import Pic12 from '../event/pic12.jpg';
import vid1 from '../event/video.mp4';
import vid2 from '../event/vid1.mp4';
import vid3 from '../event/vid2.mp4';
import vid4 from '../event/vid3.mp4';
import vid5 from '../event/vid4.mp4';









const Gallery = () => {
  // Image list
  const photos = [
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8,
    Pic9,
    Pic10,
    Pic11,
    Pic12
   
  ];

  // Video list
  const videos = [
    vid1,
    vid2,
    vid3,
    vid4,
    vid5
  ];

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openLightbox = (src) => {
    setCurrentImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
  };

  return (
    <>
      <Header />
      <main className="gallery-page">
        <h1 className="gallery-title">Gallery</h1>

        {/* ---------- IMAGE SWIPER ---------- */}
        <section className="photo-section">
          <h2>Photos</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {photos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="photo-card" onClick={() => openLightbox(src)}>
                  <img src={src} alt={`Gallery ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ---------- SCROLLABLE VIDEO SECTION ---------- */}
        <section className="video-section">
          <h2>Videos</h2>
          <div className="video-scroll">
            {videos.map((link, index) => (
              <div key={index} className="video-card">
                <iframe
                  src={link}
                  title={`video-${index}`}
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- LIGHTBOX ---------- */}
        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={currentImg} alt="Full Screen" />
          </div>
        )}

      </main>
      <Footer />
    </>
  );
};

export default Gallery;
