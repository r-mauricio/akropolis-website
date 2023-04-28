import React from "react";
import sobre from "../assets/data/sobre.jpg";

const Sobre = () => {
	return (
		<div className="overflow-hidden flex  bg-white w-full h-full dark:bg-darkGray md:py-[92px] md:mx-auto md:container">
			<div className="flex flex-col lg:flex-row mx-8 mt-24 md:mt-8 ">
				<div className="space-y-4">
					<h1 className="text-redLogo/80 font-bold text-2xl md:text-4xl dark:text-darkIce/70">
						Sobre Nós
					</h1>
					<h2 className="text-darkGray/90 text-lg font-medium tracking-wide  dark:text-lightLogo lg:mr-8">
						Desde 1992 edificando sonhos.
					</h2>
					<h2 className="text-gray-500/80 lg:mr-8">
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
				<div className="flex py-4 items-center justify-center md:py-8">
					<img
						src={sobre}
						alt="Akropolis engenharia"
						className="h-auto w-full  md:h-auto md:w-auto rounded-lg "
					/>
				</div>
			</div>
		</div>
	);
};

export default Sobre;
