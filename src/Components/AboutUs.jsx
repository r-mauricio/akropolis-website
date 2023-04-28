import React from "react";
import { Link } from "react-router-dom";
import photo from "/deck.jpeg";

const AboutUs = () => {
	return (
		<div className="overflow-hidden flex flex-col bg-ice/50 w-full md:flex-row dark:bg-darkMediumGray/10">
			<div className="flex flex-col py-8 px-12  md:px-16">
				<h1 className="text-redLogo/80 font-bold uppercase text-2xl  dark:text-darkIce/70">
					Sobre nós
				</h1>
				<p className="pt-6 pb-3 text-lg font-medium tracking-wide text-darkGray/90 dark:text-lightLogo ">
					Desde 1992 edificando sonhos
				</p>
				<p className=" text-gray-500/80 pb-8 tracking-wide dark:text-darkIce/80 ">
					Naturais da cidade do Maior São João no Mundo, nossa querida Campina
					Grande, em 1992 foi fundada a Akrópolis Engenharia no pedaço de
					paraíso, chamado de Cabedelo. Nesta época, poucos eram os prédios da
					região, e a Akrópolis já foi carimbando sua marca, acompanhando e
					participando do crescimento da cidade
				</p>
				<Link
					to="/sobre"
					className="flex items-center justify-center w-44 h-10  bg-redLogo/90  text-ice rounded-md text-md  uppercase  hover:bg-redLogo ease-in-out duration-300 dark:text-darkIce/90 ">
					conheça
				</Link>
			</div>
			<div className="flex py-4 px-1  items-center justify-center md:px-8">
				<img
					src={photo}
					alt="Akropolis engenharia"
					className="h-72 w-auto bg-gradient-to-r from-black/70 md:w-auto md:h-auto  rounded-3xl "
				/>
			</div>
		</div>
	);
};

export default AboutUs;
