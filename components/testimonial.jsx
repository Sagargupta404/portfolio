"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Working with Sagar was one of the smoothest collaborations I’ve had. He understands requirements quickly, suggests improvements, and delivers on time with clean, scalable code.",
    name: "Amit Sharma – Product Manager",
    bg: "/bc1.jpg",
  },
  {
    quote:
      "Sagar is not just a developer, he’s a problem solver. He combines technical expertise with creativity and communication skills, which makes working with him a delight.",
    name: "Priya Verma – UX Designer",
    bg: "/bc2.jpg",
  },
  {
    quote:
      "His work ethic is amazing! Even under pressure, he maintains focus and delivers quality results. The project exceeded expectations because of his dedication.",
    name: "Rahul Mehta – Team Lead",
    bg: "/bc.jpg",
  },
  {
    quote:
      "What impressed me the most is his ability to pick up new technologies quickly. He adapts fast, experiments, and makes sure the end result looks modern and performs well.",
    name: "Neha Gupta – Software Engineer",
    bg: "/bc4.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-black py-20 px-5">
      <h2 className="text-center text-3xl font-bold text-white mb-20">
        🌟 What People <span className="text-red-600">Say</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-full mx-500"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative p-8 rounded-2xl border border-white/20 bg-cover bg-center transition duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)] hover:scale-103"
              style={{
                backgroundImage: `url(${item.bg})`,
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

              {/* Text */}
              <div className="relative z-10">
                <p className="text-lg text-white leading-relaxed">
                  “{item.quote}”
                </p>
                <h4 className="mt-6 text-md font-semibold text-yellow-200">
                  — {item.name}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
