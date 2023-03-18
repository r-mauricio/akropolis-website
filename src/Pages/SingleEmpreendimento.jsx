import React from "react";
import { useParams } from "react-router-dom";
import predios from "../../public/infoPredio";
import SlideEmpreendimentos from "../Components/SlideEmpreendimentos";

const SingleEmpreendimento = () => {
	const { predioId } = useParams();
	const predio = predios.find((predio) => predio.id == predioId);
	const { title, category, img, content, description } = predio;
	return (
		<div className=" ">
			<SlideEmpreendimentos image={img} id={predio.id} />

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
								key={i}
								className="mb-3  text-redLogo/40 font-semibold text-md  md:text-md dark:text-darkIce/80">
								{description[i].desc}
							</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SingleEmpreendimento;
