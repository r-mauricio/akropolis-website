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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
						corrupti tenetur quidem, debitis veritatis, dolorum temporibus
						ducimus perspiciatis aperiam iure maiores cupiditate error fuga?
						Impedit, distinctio corporis vero voluptatibus optio dicta dolorem
						error, excepturi dignissimos nisi aliquam eligendi in laboriosam
						placeat ullam facere vitae quod nihil exercitationem, ipsa natus
						voluptatem?
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
