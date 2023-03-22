import React from "react";
import sobre from "../assets/data/sobre.jpg";

const Sobre = () => {
	return (
		<div className=" mx-auto overflow-hidden flex  bg-white w-full h-full dark:bg-darkGray">
			<div className="flex flex-col lg:flex-row mx-8 mt-24 md:mt-8 ">
				<div className="space-y-4 md:ml-12 lg:ml-6">
					<h1 className="text-redLogo/60 font-bold text-3xl md:tracking-wider md:text-4xl dark:text-darkLightGray/70">
						Sobre Nós
					</h1>
					<h2 className="text-gray-500/80 font-semibold lg:mr-8">
						Desde 1992 edificando sonhos.
					</h2>
					<h2 className="text-gray-500/80 font-semibold lg:mr-8">
						Naturais da cidade do Maior São João no Mundo, nossa querida Campina
						Grande, em 1992 foi fundada a Akrópolis Engenharia no pedaço de
						paraíso, chamado de Cabedelo. Nesta época, poucos eram os prédios da
						região, e a Akrópolis já foi carimbando sua marca, acompanhando e
						participando do crescimento da cidade. Estabelecemos uma rede
						diversificada de empreendimentos, capazes de atender diferentes
						necessidades para cada perfil de cliente. Temos empreendimentos
						residenciais multifamiliares e de flats, atendendo a pequenas ou
						grandes famílias e investidores.
					</h2>
				</div>
				<div className="flex py-4 items-center justify-center ">
					<img
						src={sobre}
						alt="Akropolis engenharia"
						className="h-auto w-full  md:h-auto md:w-auto rounded-3xl "
					/>
				</div>
			</div>
		</div>
	);
};

export default Sobre;
