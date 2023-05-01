import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";

import logoWhite from "../assets/icons/logoWhite.png";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);
	return null;
};

const Footer = () => {
	return (
		<div>
			{/* <!-- Footer --> */}
			<footer className="bg-redLogo/80 dark:bg-redLogo ">
				{/* <!-- Flex Container --> */}
				<div className=" flex flex-col-reverse justify-between px-6 py-2 mx-auto space-y-8 tracking-wide font-semibold md:flex-row md:px-0 md:space-y-0 lg:px-8">
					{/* <!-- Logo and social links container --> */}
					<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-center md:justify-center">
						<div className="mx-auto my-6 text-center text-ice/70 md:hidden">
							Akropolis Engenharia LTDA 2023
						</div>
						{/* <!-- Logo --> */}
						<a href="#" onClick={ScrollToTop} aria-label="logo akropolis">
							<img
								src={logoWhite}
								className="h-[70px] w-[180px] md:h-[80px] md:w-[200px] lg:h-[90px]  lg:w-[220px] opacity-90 dark:hover:opacity-80"
								alt="logo akropolis"
							/>
						</a>
						{/* <!-- Social Links Container --> */}
						<div className="flex items-center justify-center mx-auto flex-row gap-2">
							{/* <!-- NavLink 1 --> */}
							<a
								target="_blank"
								href="https://instagram.com/akropolisengenharia"
								aria-label="clique aqui para nos seguir no Instagram">
								<BsInstagram className="text-ice/90 text-xl hover:text-ice/90 duration-200 ease-linear dark:hover:text-darkIce/80" />
							</a>

							{/* <!-- NavLink 2 --> */}
							<a
								href="https://wa.me/5583999699443"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="clique aqui para nos chamar no Whatsapp">
								<MdOutlineWhatsapp className="text-ice/90 text-2xl hover:text-ice/90 duration-200 ease-linear dark:hover:text-darkIce/80" />
							</a>
							{/* <!-- NavLink 3 --> */}
							<a
								href="mailto:akropolisengenharialtda@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="clique aqui para nos chamar no Whatsapp">
								<MdOutlineMailOutline className="text-ice/90 text-2xl hover:text-ice/90 duration-200 ease-linear dark:hover:text-darkIce/80" />
							</a>
						</div>
					</div>
					{/* <!-- List Container --> */}
					<div className="flex justify-around space-x-32">
						<div className="flex flex-col space-y-2 text-center text-md text-ice/70 md:flex-row md:space-y-0 md:items-center md:gap-3 md:mr-16 lg:gap-8 lg:mr-32">
							<Link to="/" onClick={ScrollToTop} className=" footer-link">
								Home
							</Link>
							<Link to="/empreendimentos" className="footer-link">
								Empreendimentos
							</Link>
							<Link to="/sobre" className="footer-link">
								Sobre Nós
							</Link>
							<Link to="/faleconosco" className="footer-link">
								Fale Conosco
							</Link>
						</div>
					</div>
					<a
						className="whatsapp_float"
						href="https://wa.me/5583999699443"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="clique aqui para nos chamar no Whatsapp">
						<i className="fa fa-whatsapp whatsapp-icon"></i>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
