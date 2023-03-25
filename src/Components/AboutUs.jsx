import React from "react";
import { Link } from "react-router-dom";
import photo from "/deck.jpeg";

const AboutUs = () => {
	return (
		<div className="overflow-hidden flex flex-col bg-ice w-full md:flex-row dark:bg-darkGray">
			<div className="flex flex-col my-8 mx-4">
				<h1 className="text-redLogo/60 font-bold uppercase text-sm tracking-wider dark:text-darkIce/70">
					Sobre nós
				</h1>
				<p className="pt-4 text-black/90 dark:text-lightLogo/70 font-semibold">
					Desde 1992 edificando sonhos
				</p>
				<p className=" pb-8 dark:text-lightLogo/70 ">
					Naturais da cidade do Maior São João no Mundo, nossa querida Campina
					Grande, em 1992 foi fundada a Akrópolis Engenharia no pedaço de
					paraíso, chamado de Cabedelo. Nesta época, poucos eram os prédios da
					região, e a Akrópolis já foi carimbando sua marca, acompanhando e
					participando do crescimento da cidade...
				</p>
				<Link
					to="/sobre"
					className="flex bg-redLogo font-semibold w-48 h-12 items-center justify-center  text-ice rounded-lg text-md uppercase tracking-widest hover:bg-lightLogo hover:font-bold ease-in-out duration-300 dark:text-darkIce dark:hover:text-darkIce">
					conheça
				</Link>
			</div>
			<div className="flex py-4 items-center justify-center ">
				<img
					src={photo}
					alt="Akropolis engenharia"
					className="h-64 w-auto bg-gradient-to-r from-black/70 md:h-auto md:w-auto rounded-3xl "
				/>
			</div>
		</div>
	);
};

export default AboutUs;
