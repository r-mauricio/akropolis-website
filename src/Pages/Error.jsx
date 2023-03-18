import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="container mx-auto h-screen w-full text-3xl text-gray-700 font-bold ">
			<h1 className="pt-16 ">Eita! Essa página não existe.</h1>
			<Link to="/" className="bg-redLogo/70 rounded text-ice/90">
				Voltar para a pagina principal
			</Link>
		</div>
	);
};

export default Error;
