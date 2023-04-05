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
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}>
				{prediosToRender.map((predio) => (
					<SwiperSlide key={predio.id}>
						<div className=" bg-gradient-to-br from-black/70  h-screen min-w-full relative group dark:from-black/50">
							<img
								src={predio.img[0].image}
								className=" w-full h-full object-cover object-center  mix-blend-overlay ease-in-out duration-1000"
							/>
							<div className="absolute top-24 mx-auto  py-4 px-10 max-w-xs  mt-12 rounded-3xl  md:left-4 md:mx-20 md:mt-auto md:py-2 md:px-10  z-10">
								<h1 className="text-ice/80 mr-2 tracking-wide text-2xl font-bold md:leading-tight md:text-4xl lg:text-5xl">
									{predio.title}
								</h1>
								<h2 className="text-ice/80 font-normal  mr-8 pt-2 pb-6 md:text-lg lg:text-2xl">
									{predio.desc}
								</h2>
								<Link
									to={`/empreendimentos/${predio.id}`}
									className="bg-redLogo mx-0  opacity-70 uppercase rounded-lg text-ice font-semibold py-4 px-12 md:w-full md:text-xl hover:opacity-100 hover:text-ice/80 ">
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
