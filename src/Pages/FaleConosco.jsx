import React from "react";
import bg from "../assets/data/contato.jpg";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import ContactForm from "../Components/ContactForm";

const FaleConosco = () => {
	return (
		<div className=" container mx-auto overflow-hidden flex flex-col  w-full h-full pb-8 md:pb-0 md:py-[92px] ">
			<div
				className="mx-8 mt-24 md:mt-8 
				">
				<div className=" space-y-4 max-w-max">
					<h1 className="text-redLogo/80 font-bold text-2xl md:text-4xl dark:text-darkIce/70">
						Fale Conosco
					</h1>
					<h2 className="text-darkGray/90 text-lg font-medium tracking-wide  dark:text-lightLogo lg:mr-8">
						Tem alguma dúvida ou pergunta? Será nosso prazer atendê-lo.
					</h2>
					<div className=" flex  py-4 items-center  justify-center ">
						<div className="flex flex-col md:flex-col-reverse justify-center items-center  md:relative">
							<div className="w-96 md:ml-96 md:absolute">
								<ContactForm />
							</div>
							<div className="   py-8 md:pb-0">
								<img
									src={bg}
									alt="Akropolis engenharia"
									className="h-[300px] w-screen md:h-[550px] md:w-screen rounded-md   "
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-row  flex-wrap gap-6 md:gap-24 md:py-12">
						<div className="flex flex-col   pt-4 md:pt-0 ">
							<h2 className="uppercase text-sm font-bold tracking-wider text-gray-700 pb-2 dark:text-darkIce/90">
								Atendimento Online
							</h2>
							<div className="flex flex-row  items-center group">
								<a
									href="https://wa.me/5583999699443"
									target="_blank"
									rel="noopener noreferrer">
									<MdOutlineWhatsapp className="inline-block text-gray-400 text-2xl duration-200 ease-linear group-hover:text-gray-600 dark:group-hover:text-darkIce/90" />
									<h2 className="inline-block ml-1 text-gray-400 text-sm font-medium duration-200 tracking-wide ease-linear group-hover:text-gray-600 dark:group-hover:text-darkIce/90">
										+55 83 999699443
									</h2>
								</a>
							</div>
						</div>
						<div className="flex  flex-col">
							<h2 className="uppercase text-sm font-bold tracking-wider text-gray-700 pb-2  pt-4 md:pt-0 dark:text-darkIce/90">
								Atendimento Via E-mail
							</h2>
							<div className="flex   flex-row items-center group">
								<a
									href="mailto:akropolisengenharialtda@gmail.com"
									target="_blank"
									rel="noopener noreferrer">
									<MdOutlineMailOutline className="inline-block text-gray-400 text-2xl  duration-200 ease-linear group-hover:text-gray-600 dark:group-hover:text-darkIce/90" />
									<h2 className="inline-block ml-1 text-gray-400 text-sm font-medium duration-200 ease-linear tracking-wide group-hover:text-gray-600 dark:group-hover:text-darkIce/90">
										akropolisengenharia@gmail.com
									</h2>
								</a>
							</div>
						</div>
						<div className="flex  flex-col">
							<h2 className="uppercase text-sm font-bold tracking-wider text-gray-700 pb-2 dark:text-darkIce/90">
								Siga-nos no Instagram
							</h2>
							<a
								target="_blank"
								href="https://instagram.com/akropolisengenharia">
								<BsInstagram className="text-gray-400 text-xl duration-200 ease-linear hover:text-gray-600 dark:hover:text-darkIce/90" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaleConosco;
