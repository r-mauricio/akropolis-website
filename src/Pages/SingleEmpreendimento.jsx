import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useParams } from "react-router-dom";
import predios from "../../public/infoPredio";
import SlideEmpreendimentos from "../Components/SlideEmpreendimentos";

const SingleEmpreendimento = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 0,
	});

	const { predioId } = useParams();
	const predio = predios.find((predio) => predio.id == predioId);
	const { title, category, img, content, description } = predio;
	const openLightboxOnSlide = (i) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: i,
		});
	};

	return (
		<div>
			<div>
				<FsLightbox
					toggler={lightboxController.toggler}
					sources={[...img]}
					slide={lightboxController.slide}
				/>
				<div>
					<SlideEmpreendimentos
						image={img}
						id={predio.id}
						openLightboxOnSlide={openLightboxOnSlide}
					/>
					<div className="container flex flex-col  mx-auto overflow-hidden  w-full h-full ">
						<h2 className="mt-4 mx-5 text-redLogo/80 font-bold text-2xl md:text-3xl md:mt-8 md:mx-0 dark:text-darkIce/70">
							{title}
						</h2>
						<h2 className="my-3 mx-5 text-gray-500/50 font-bold text-sm md:tracking-wider md:text-md md:mx-0 dark:text-darkIce">
							{category}
						</h2>
						<div className="mt-4 mb-8 mx-5 md:mx-0">
							<h1 className=" text-darkGray/90 text-lg font-medium tracking-wide dark:text-lightLogo ">
								Sobre o empreendimento
							</h1>
							<p className="mt-4 text-gray-500 text-sm md:text-base dark:text-darkIce">
								{content}
							</p>
						</div>
						<div className="flex flex-col pb-8 max-w-[900px] mx-5 md:mx-0">
							<h1 className="mb-1 text-redLogo dark:text-lightLogo font-bold tracking-widest">
								Características:
							</h1>
							<ul className="flex flex-col flex-wrap items-start justify-start  list-[circle] md:flex-row md:items-center">
								{description.map((desc, i) => {
									return (
										<li
											key={i * 2}
											className="text-sm font-medium w-60 tracking-wider text-black py-1 mx-6 dark:text-white/80">
											{description[i].desc}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleEmpreendimento;
