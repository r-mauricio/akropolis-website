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
	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "left") {
			newSlideNumber = slideNumber === 0 ? img.length - 1 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === img.length - 1 ? 0 : slideNumber + 1;

			setSlideNumber(newSlideNumber);
		}
	};
	const { predioId } = useParams();
	const predio = predios.find((predio) => predio.id == predioId);
	const { title, category, img, content, description } = predio;
	return (
		<div>
			<div>
				{open ? (
					<div className="fixed overflow-hidden top-0 left-0 w-screen h-full z-50 flex items-center bg-black/90">
						<AiFillCloseCircle
							className="absolute top-5 right-5 text-2xl text-darkIce pointer"
							onClick={() => handleClose()}
						/>
						<FaArrowCircleLeft
							className="m-5 text-darkIce pointer text-2xl "
							onClick={() => handleMove("left")}
						/>
						<div className="w-full h-full flex justify-center items-center">
							<img
								src={`${img[slideNumber].image}`}
								alt=""
								className="max-w-screen max-h-screen object-cover object-fit"
							/>
						</div>
						<FaArrowCircleRight
							className="m-5 text-darkIce pointer text-2xl"
							onClick={() => handleMove("right")}
						/>
					</div>
				) : (
					<div>
						<SlideEmpreendimentos
							image={img}
							id={predio.id}
							handleOpen={handleOpen}
							handleMove={handleMove}
						/>
						<div className="container flex flex-col  mx-auto overflow-hidden  w-full h-full ">
							<h2 className="mt-4 text-redLogo/60 font-bold text-2xl md:tracking-wider md:text-3xl dark:text-darkLightGray/70">
								{title}
							</h2>
							<h2 className="my-4  text-gray-500/50 font-bold text-sm md:tracking-wider md:text-md dark:text-darkIce">
								{category}
							</h2>
							<div className="mt-4 mb-8">
								<h1 className="uppercase text-black/70 dark:text-darkLightGray font-bold tracking-widest">
									Sobre o empreendimento
								</h1>
								<p className="mt-4 text-redLogo/40 font-noral text-md  mb-4 md:text-md dark:text-darkIce/90">
									{content}
								</p>
							</div>
							<h1 className="uppercase text-black/70 dark:text-darkLightGray font-bold tracking-widest"></h1>
							{description.map((desc, i) => {
								return (
									<div>
										<h2
											key={i * 2}
											className="mb-3  text-redLogo/40 font-semibold text-md  md:text-md dark:text-darkIce/80">
											{description[i].desc}
										</h2>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SingleEmpreendimento;
