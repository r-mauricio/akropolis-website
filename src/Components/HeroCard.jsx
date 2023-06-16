import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import predios from "../../public/infoPredio";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const prediosToRender = predios.slice(0, 2);

export default function HeroCard() {
	return (
		<>
			<Swiper
				className="overflow-hidden h-full w-full "
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				autoplay={{
					delay: 15000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}>
				{prediosToRender.map((predio) => (
					<SwiperSlide key={predio.id}>
						<div className=" bg-gradient-to-br from-black/50  h-screen min-w-full relative group ">
							<img
								src={predio.img[0]}
								alt={`foto ${predio.title}`}
								className=" w-full h-full object-cover object-center  mix-blend-overlay ease-in-out duration-1000"
							/>
							<div className="absolute top-24 mx-auto  py-4 px-14 max-w-xs  mt-12 rounded-3xl  md:top-40 md:left-4 md:mx-24 md:mt-auto md:py-2 md:px-10  z-10">
								<h1 className="text-ice/80 mr-2 tracking-wide text-xl font-bold md:leading-tight md:text-3xl lg:text-4xl">
									{predio.title}
								</h1>
								<h2 className="text-ice/80  text-sm mr-8 pt-2 pb-6 md:text-lg ">
									{predio.desc}
								</h2>
								<Link
									to={`/empreendimentos/${predio.id}`}
									className="bg-redLogo mx-0  opacity-70 uppercase rounded-lg text-ice  py-3 px-8 md:w-full md:text-lg hover:opacity-80 hover:text-ice/80 ">
									saiba mais
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
