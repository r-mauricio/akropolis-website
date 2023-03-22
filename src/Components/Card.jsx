import React from "react";
import { Link } from "react-router-dom";

const Card = ({ predios }) => {
	return (
		<div className="flex flex-wrap items-center justify-center mt-4  ">
			{predios.map((predio) => {
				return (
					<div
						key={predio.id}
						className=" flex flex-grow items-center justify-center self-stretch max-w-sm  rounded-lg  mx-2 my-4 dark:bg-darkGray dark:border-darkBlack group">
						<Link to={`/empreendimentos/${predio.id}`}>
							<div className="bg-ice h-full w-72 rounded-lg dark:bg-darkMediumGray">
								<img
									className="rounded-t-lg  object-cover object-center w-72 h-[250px] group-hover:shadow-3xl group-hover:opacity-90 ease-in-out duration-300"
									src={predio.img[0].image}
									alt={predio.alt}
								/>
								<div className="py-4 pb-4  text-center group-hover:bg-gray-200 group-hover:rounded-b-lg ease-in-out duration-300 dark:group-hover:bg-darkGray">
									<h5 className="mb-2 mx-8  text-2xl font-bold tracking-tight text-black/70 group-hover:text-redLogo/80 ease-in-out duration-300  dark:text-darkIce/90 dark:group-hover:text-lightLogo">
										{predio.title}
									</h5>
									<p className="mb-1 font-semibold text-gray-400/90 dark:text-gray-400">
										{predio.category}
									</p>
									{predio.category === "Entregue" ? (
										<p className="mb-1 font-semibold text-black/90 dark:text-gray-400">
											{predio.description[0].desc}
										</p>
									) : (
										<p className="mb-1 font-semibold text-black/90 dark:text-gray-400">
											{predio.desc}
										</p>
									)}

									<p className="inline-flex items-center mt-2 px-12 py-2 text-sm font-medium text-center text-white bg-redLogo rounded-lg hover:text-redLogo/80  hover:px-[52px] hover:font-bold hover:bg-white ease-in-out duration-500 focus:ring-4 focus:outline-none focus:ring-redLogo dark:bg-darkIce/70 dark:hover:bg-redLogo/70 dark:focus:ring-redLogo/70 dark:text-darkIce dark:hover:text-darkIce">
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
