import React, { useState, useEffect } from "react";
import { debounce } from "../helpers/debounce";

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logoWhite from "../assets/icons/logoWhite.png";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);
	return null;
};

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// theme
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	// mobile menu
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	// nav scroll
	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;

		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 35) ||
				currentScrollPos < 10
		);

		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	const navbarStyles = {
		transition: "top 0.6s",
	};

	return (
		<div
			style={
				!showLinks ? { ...navbarStyles, top: visible ? "0" : "-95px" } : null
			}
			className={
				"border-t-4  border-lightLogo container mx-auto max-w-full p-[5px] bg-ice/90 fixed z-20 dark:bg-darkBlack/90  dark:border-redLogo/80"
			}>
			<div className="flex items-center justify-between">
				<NavLink to="/" onClick={ScrollToTop}>
					{theme === "light" ? (
						<img
							src={logo}
							alt="Akropolis Logo"
							className=" h-[60px] w-[120px] md:h-[70px] md:w-[160px]  "
						/>
					) : (
						<img
							src={logoWhite}
							alt="Akropolis Logo"
							className=" h-[60px] w-[120px] md:h-[70px] md:w-[160px] "
						/>
					)}
				</NavLink>

				<div className="hidden lg:flex space-x-12 pr-[30px]  text-md  tracking-wide">
					<NavLink to="/" className={theme === "light" ? "link" : "dark-link"}>
						Home
					</NavLink>
					<NavLink
						to="/empreendimentos"
						className={theme === "light" ? "link" : "dark-link"}>
						Empreendimentos
					</NavLink>
					<NavLink
						to="/sobre"
						className={theme === "light" ? "link" : "dark-link"}>
						Sobre nós
					</NavLink>
					<NavLink
						to="/faleconosco"
						className={theme === "light" ? "link" : "dark-link"}>
						Fale Conosco
					</NavLink>
					{theme === "light" ? (
						<button className="text-black/70" onClick={handleThemeSwitch}>
							<MdDarkMode size={15} />
						</button>
					) : (
						<button className="text-darkIce/80" onClick={handleThemeSwitch}>
							<BsFillLightbulbFill size={15} />
						</button>
					)}
				</div>
				{/* Hamburger Icon  */}
				{showLinks ? (
					<button
						className="ml-auto mr-3 open block hamburger lg:hidden focus:outline-none"
						aria-label="clique aqui para fechar menu"
						onClick={toggleLinks}>
						<span className="open dark:bg-darkLightGray hamburger-top"></span>
						<span className="open dark:bg-darkLightGray hamburger-middle"></span>
						<span className="open dark:bg-darkLightGray hamburger-bottom"></span>
					</button>
				) : (
					<button
						className="block mr-3 hamburger lg:hidden focus:outline-none"
						aria-label="clique aqui para abrir menu"
						onClick={toggleLinks}>
						<span className="dark:bg-darkLightGray hamburger-top"></span>
						<span className="dark:bg-darkLightGray hamburger-middle"></span>
						<span className="dark:bg-darkLightGray hamburger-bottom"></span>
					</button>
				)}

				{/*  Mobile Menu  */}
				{showLinks ? (
					<div className=" lg:hidden">
						<div className=" absolute flex flex-col items-center justify-center  mt-8 space-y-12 font-bold bg-gray-300 text-redLogo w-screen h-screen left-0 drop-shadow-md group dark:text-darkIce/80 dark:bg-darkGray">
							{theme === "light" ? (
								<button onClick={handleThemeSwitch}>
									<MdDarkMode size={15} />
								</button>
							) : (
								<button onClick={handleThemeSwitch}>
									<BsFillLightbulbFill size={15} />
								</button>
							)}
							<NavLink
								onClick={showLinks}
								to="/"
								className=" tracking-widest  footer-link">
								Home
							</NavLink>
							<NavLink
								onClick={showLinks}
								to="/empreendimentos"
								className="  tracking-widest  footer-link">
								Empreendimentos
							</NavLink>
							<NavLink
								onClick={showLinks}
								to="/sobre"
								className="  tracking-widest  footer-link">
								Sobre Nós
							</NavLink>
							<NavLink
								onClick={showLinks}
								to="/faleconosco"
								className=" tracking-widest footer-link">
								Fale Conosco
							</NavLink>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
