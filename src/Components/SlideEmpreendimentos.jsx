import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SlideEmpreendimentos({ image, openLightboxOnSlide }) {
	return (
		<>
			<Swiper
				className=" w-full h-[350px] pt-[72px] md:pt-[84px] "
				slidesPerView={1}
				spaceBetween={0}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				breakpoints={{
					480: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
				}}
				navigation={true}
				modules={[Pagination, Navigation]}>
				{image.map((img, i) => {
					return (
						<SwiperSlide key={i} className=" text-white h-full ">
							<img
								key={i}
								onClick={() => openLightboxOnSlide(i + 1)}
								src={img}
								className=" object-cover  object-center w-full h-full hover:opacity-90"
								alt="foto predio"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
{
}
