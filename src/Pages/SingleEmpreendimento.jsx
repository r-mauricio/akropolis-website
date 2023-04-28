import React, { useState } from "react";
import { useParams } from "react-router-dom";
import predios from "../../public/infoPredio";
import SlideEmpreendimentos from "../Components/SlideEmpreendimentos";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const SingleEmpreendimento = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleBack = () => {
		setSlideNumber(slideNumber === 0 ? img.length - 1 : slideNumber - 1);
	};

	const handleForward = () => {
		setSlideNumber(slideNumber === img.length - 1 ? 0 : slideNumber + 1);
	};
	const { predioId } = useParams();
	const predio = predios.find((predio) => predio.id == predioId);
	const { title, category, img, content, description } = predio;
	return (
		<div>
			<div>
				{open ? (
					<div className="fixed overflow-hidden top-0 left-0 w-screen h-full z-50 flex items-center bg-black/90 select-none">
						<AiFillCloseCircle
							className="absolute top-5 right-5 text-2xl text-darkIce pointer md:w-24 "
							onClick={() => handleClose()}
						/>
						<FaArrowCircleLeft
							className="m-5  text-darkIce pointer text-2xl md:w-48"
							onClick={() => handleBack()}
						/>
						<div className="w-full h-full flex justify-center items-center">
							<img
								src={`${img[slideNumber].image}`}
								alt="foto estacao"
								className="max-w-screen max-h-screen object-cover object-fit"
							/>
						</div>
						<FaArrowCircleRight
							className="m-5  text-darkIce pointer text-2xl md:w-48"
							onClick={() => handleForward()}
						/>
					</div>
				) : (
					<div>
						<SlideEmpreendimentos
							image={img}
							id={predio.id}
							handleOpen={handleOpen}
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
				)}
			</div>
		</div>
	);
};

export default SingleEmpreendimento;
