import React from "react";
import { Link } from "react-router-dom";

const Card = ({ predios }) => {
	return (
		<div className="flex flex-wrap w-auto items-center justify-center mt-4  ">
			{predios.map((predio) => {
				return (
					<div
						key={predio.id}
						className=" flex flex-grow items-center justify-center  max-w-sm  rounded-lg  mx-2 my-4 dark:bg-darkGray dark:border-darkBlack group">
						<Link to={`/empreendimentos/${predio.id}`}>
							<div className="bg-ice w-[270px] h-[350px] rounded-lg dark:bg-darkMediumGray">
								<img
									className="rounded-t-lg  object-cover object-center w-72 h-[160px] group-hover:shadow-3xl group-hover:opacity-90 dark:group-hover:opacity-70 ease-in-out duration-300"
									src={predio.img[0]}
									alt={predio.alt}
								/>
								<div className="py-4 pb-4  text-center group-hover:bg-gray-200 group-hover:rounded-b-lg ease-in-out duration-300 dark:group-hover:bg-darkGray/70">
									<h5 className="mb-2 mx-4  text-xl font-semibold tracking-tight text-black/70 group-hover:text-redLogo/80 ease-in-out duration-300  dark:text-darkIce/90 dark:group-hover:text-darkIce">
										{predio.title}
									</h5>
									<p className="mb-1 font-semibold text-gray-400/90 dark:text-gray-400">
										{predio.category}
									</p>
									{predio.category === "Entregue" ? (
										<p className="mb-1 mx-1  text-black/60 text-md font-medium  dark:text-gray-400">
											{predio.description[0].desc}
										</p>
									) : (
										<p className="mb-1 mx-1  text-black/60 text-md font-medium  dark:text-gray-400">
											{predio.desc}
										</p>
									)}

									<p className="inline-flex items-center my-4 px-12 py-2 text-sm  text-center text-white bg-redLogo rounded-md  ease-linear duration-300  dark:bg-darkIce/30  dark:text-darkIce dark:hover:text-darkIce">
										SAIBA MAIS
									</p>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
