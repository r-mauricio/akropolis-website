import React from "react";

import CardSlideTest from "./CardSlideTest";

const Empreendimentos = () => {
	return (
		<div className=" overflow-hidden flex flex-col items-center justify-center h-auto w-full dark:bg-darkGray">
			<div className="flex flex-col bg-ice md:flex-row dark:bg-darkGray">
				<div className="py-8 px-4 md:bg-slate-200/30  md:w-6/7 md:dark:bg-darkBlack">
					<h1 className="text-redLogo/60 font-bold text-sm tracking-wider dark:text-darkIce/70">
						EMPREENDIMENTOS
					</h1>
					<h1 className="text-lightLogo/70  pt-8 text-start font-bold text-2xl md:pt-4 md:leading-10 md:tracking-wide">
						Nossos predios Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Eligendi, voluptas?
					</h1>
				</div>
				<div className="flex items-center  justify-center px-4 pb-4 md:px-8 md:pt-8 lg:pt-0 ">
					<h3 className="text-slate-400/80 text-start text-xl  md:pt-auto dark:text-darkIce/50">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
						nostrum deserunt accusantium magni odio sit illo et non. Magni,
						fuga!
					</h3>
				</div>
				<div className="hidden md:bg-gradient-to-b md:from-redLogo md:to-redLogo/70 md:flex  md:w-64 md:h-auto dark:md:bg-gradient-to-b dark:md:from-redLogo/70 dark:md:to-redLogo/40"></div>
			</div>
			<div>
				<CardSlideTest />
			</div>
		</div>
	);
};

export default Empreendimentos;
