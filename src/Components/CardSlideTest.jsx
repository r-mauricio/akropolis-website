import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import predios from "../../public/infoPredio";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const CardSlideTest = () => {
	return (
		<>
			<Swiper
				className="max-w-[650px] flex items-center justify-center py-3 px-4  "
				slidesPerView={1}
				spaceBetween={0}
				navigation={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
					976: {
						slidesPerView: 2,
						spaceBetween: 0,
					},
				}}
				modules={[Pagination, Navigation]}>
				{predios.map((predio) => (
					<SwiperSlide key={predio.id}>
						<div className="flex text-center items-center justify-center  ">
							<div className=" border border-gray-200 rounded-lg shadow mx-auto  dark:border-darkBlack group">
								<div className="bg-ice w-64 h-[350px] rounded-lg dark:bg-darkMediumGray">
									<a
										href={`/empreendimentos/${predio.id}`}
										aria-label="clique aqui para abrir página no empreendimento">
										<img
											className="rounded-t-lg object-cover object-center w-72 h-[160px] group-hover:shadow-3xl  group-hover:opacity-90 ease-in-out duration-300"
											src={predio.thumbImg.image}
											alt={predio.alt}
										/>
									</a>
									<div className="px-4 py-4 group-hover:bg-gray-200 group-hover:rounded-b-lg ease-in-out duration-300 dark:group-hover:bg-darkBlack/60 ">
										<a
											href={`/empreendimentos/${predio.id}`}
											aria-label="clique aqui para abrir página no empreendimento">
											<h5 className="mb-2 text-xl font-semibold tracking-tight text-black/70 group-hover:text-redLogo/80 ease-in-out duration-300 dark:text-darkIce/90 dark:group-hover:text-darkIce">
												{predio.title}
											</h5>
										</a>
										<p className="mb-1 font-semibold text-gray-400 dark:text-gray-400">
											{predio.category}
										</p>
										<p className="mb-1 mx-1 text-black/60 text-md font-medium dark:text-gray-400">
											{predio.desc}
										</p>

										<Link
											to={`/empreendimentos/${predio.id}`}
											aria-label="clique aqui para abrir página no empreendimento"
											className="inline-flex items-center my-1 px-12 py-2 text-sm  text-center text-white bg-redLogo rounded-md hover:px-[52px]  ease-in-out duration-500  dark:bg-darkIce/30  dark:text-darkIce dark:hover:text-darkIce">
											SAIBA MAIS
										</Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default CardSlideTest;
