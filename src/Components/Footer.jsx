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
			<footer className="bg-redLogo/80 dark:bg-redLogo">
				{/* <!-- Flex Container --> */}
				<div className=" flex flex-col-reverse justify-between px-6 py-6 mx-auto space-y-8 md:flex-row md:px-48 md:space-y-0 tracking-wider font-semibold">
					{/* <!-- Logo and social links container --> */}
					<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-3 md:items-start">
						<div className="mx-auto my-6 text-center text-ice/70 md:hidden">
							Akropolis Engenharia LTDA 2023
						</div>
						{/* <!-- Logo --> */}
						<a href="#" onClick={ScrollToTop}>
							<img
								src={logoWhite}
								className="h-[70px] w-[180px] md:h-[90px] md:w-[220px] opacity-70 dark:hover:opacity-90"
								alt=""
							/>
						</a>
						{/* <!-- Social Links Container --> */}
						<div className="flex items-center justify-center mx-auto flex-row gap-2">
							{/* <!-- Link 1 --> */}
							<a
								target="_blank"
								href="https://instagram.com/akropolisengenharia">
								<BsInstagram className="text-ice/70 text-2xl dark:hover:text-darkIce/90" />
							</a>

							{/* <!-- Link 2 --> */}
							<a
								href="https://wa.me/5583999699443"
								target="_blank"
								rel="noopener noreferrer">
								<MdOutlineWhatsapp className="text-ice/70 text-3xl dark:hover:text-darkIce/90" />
							</a>
							{/* <!-- Link 3 --> */}
							<a
								href="mailto:akropolisengenharialtda@gmail.com"
								target="_blank"
								rel="noopener noreferrer">
								<MdOutlineMailOutline className="text-ice/70 text-3xl dark:hover:text-darkIce/90" />
							</a>
						</div>
					</div>
					{/* <!-- List Container --> */}
					<div className="flex justify-around space-x-32">
						<div className="flex flex-col space-y-2 text-center text-lg text-ice/70 md:flex-col md:space-y-0 md:items-center md:justify-center md:gap-2">
							<Link
								to="/"
								onClick={ScrollToTop}
								className="hover:text-white/30 dark:hover:text-darkIce/90">
								Home
							</Link>
							<Link
								to="/empreendimentos"
								className="hover:text-white/3 dark:hover:text-darkIce/90">
								Empreendimentos
							</Link>
							<Link
								to="/sobre"
								className="hover:text-white/30 dark:hover:text-darkIce/90">
								Sobre Nós
							</Link>
							<Link
								to="/faleconosco"
								className="hover:text-white/30 dark:hover:text-darkIce/90">
								Fale Conosco
							</Link>
						</div>
					</div>
					<a
						className="whatsapp_float"
						href="https://wa.me/5583999699443"
						target="_blank"
						rel="noopener noreferrer">
						<i className="fa fa-whatsapp whatsapp-icon"></i>
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
