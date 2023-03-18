import React, { useState, useEffect } from "react";
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
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	return (
		<div className="border-t-4  border-lightLogo container mx-auto max-w-full p-1 bg-ice fixed z-20 dark:bg-darkBlack dark:border-redLogo/80">
			<div className="flex items-center justify-between">
				<NavLink to="/" onClick={ScrollToTop}>
					{theme === "light" ? (
						<img
							src={logo}
							alt="Akropolis Logo"
							className=" h-[70px] w-[180px] md:h-[90px] md:w-[220px] md:ml-2"
						/>
					) : (
						<img
							src={logoWhite}
							alt="Akropolis Logo"
							className=" h-[70px] w-[180px] md:h-[90px] md:w-[220px] md:ml-2"
						/>
					)}
				</NavLink>

				<div className="hidden lg:flex space-x-16 pr-[30px] text-lightLogo text-md font-semibold tracking-wider dark:text-darkIce/80">
					<NavLink to="/" className="link">
						HOME
					</NavLink>
					<NavLink to="/empreendimentos" className="link">
						EMPREENDIMENTOS
					</NavLink>
					<NavLink to="/sobre" className="link">
						SOBRE NÓS
					</NavLink>
					<NavLink to="/faleconosco" className="link">
						FALE CONOSCO
					</NavLink>
					{theme === "light" ? (
						<button className="" onClick={handleThemeSwitch}>
							<MdDarkMode size={15} />
						</button>
					) : (
						<button className="" onClick={handleThemeSwitch}>
							<BsFillLightbulbFill size={15} />
						</button>
					)}
				</div>
				{/* Hamburger Icon  */}
				{showLinks ? (
					<button
						className="ml-auto  open block hamburger lg:hidden focus:outline-none"
						onClick={toggleLinks}>
						<span className="open dark:bg-darkLightGray hamburger-top"></span>
						<span className="open dark:bg-darkLightGray hamburger-middle"></span>
						<span className="open dark:bg-darkLightGray hamburger-bottom"></span>
					</button>
				) : (
					<button
						className="block hamburger lg:hidden focus:outline-none"
						onClick={toggleLinks}>
						<span className="dark:bg-darkLightGray hamburger-top"></span>
						<span className="dark:bg-darkLightGray hamburger-middle"></span>
						<span className="dark:bg-darkLightGray hamburger-bottom"></span>
					</button>
				)}

				{/*  Mobile Menu  */}
				{showLinks ? (
					<div className=" lg:hidden">
						<div className="absolute flex flex-col items-center justify-center  mt-9 space-y-10 font-bold bg-gray-300 text-redLogo w-screen h-screen left-0 drop-shadow-md group dark:text-darkIce/80 dark:bg-darkGray">
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
								className=" hover:text-lightLogo tracking-widest dark:hover:text-redLogo/80 link">
								HOME
							</NavLink>
							<NavLink
								onClick={showLinks}
								to="/empreendimentos"
								className=" hover:text-lightLogo tracking-widest dark:hover:text-redLogo/80  link">
								EMPREENDIMENTOS
							</NavLink>
							<NavLink
								onClick={showLinks}
								to="/sobre"
								className=" hover:text-lightLogo tracking-widest dark:hover:text-redLogo/80 link">
								SOBRE NÓS
							</NavLink>
							<NavLink
								onClick={showLinks}
								to="/faleconosco"
								className=" hover:text-lightLogo tracking-widest dark:hover:text-redLogo/80 link">
								FALE CONOSCO
							</NavLink>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
