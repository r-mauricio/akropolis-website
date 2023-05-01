import React from "react";

import CardSlideTest from "./CardSlideTest";

const Empreendimentos = () => {
	return (
		<div className=" overflow-hidden  flex flex-col items-center justify-center  w-full dark:bg-darkGray">
			<div className="flex flex-col bg-ice/50 lg:flex-row w-full dark:bg-darkGray">
				<div className="py-8 px-12  w-full text-center">
					<h1 className="uppercase text-redLogo/80 font-bold text-2xl  dark:text-darkIce/70">
						Empreendimentos
					</h1>
					<h1 className="text-darkGray/90 pt-6 text-lg font-medium tracking-wide dark:text-lightLogo ">
						Para moradia ou investimento, temos o empreendimento ideal para você
					</h1>
					<h2 className="text-slate-400   text-lg pt-2 dark:text-darkIce/50">
						1, 2 ou 3 quartos. Aqui você escolhe
					</h2>
				</div>

				{/* <div className="hidden md:bg-gradient-to-b md:from-redLogo md:to-redLogo/70 md:flex  md:w-48 md:h-auto dark:md:bg-gradient-to-b dark:md:from-redLogo/70 dark:md:to-redLogo/40">
				</div> */}
			</div>
			<div>
				<CardSlideTest />
			</div>
		</div>
	);
};

export default Empreendimentos;
