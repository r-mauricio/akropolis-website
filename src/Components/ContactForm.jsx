import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();
		if (name === "" || message === "") {
			alert("Preencha todos os campos...");
			return;
		}
		const templateParams = {
			from_name: name,
			message: message,
			email: email,
		};
		emailjs
			.send(
				"service_5eqpo8f",
				"template_z2ssdpb",

				templateParams,
				"-2o2bIsGMfvCG7yR5"
			)

			.then((response) => {
				console.log("email enviado", response.status, response.text);
			});
		setName("");
		setEmail("");
		setMessage("");
	};
	(err) => {
		console.log("erro:", err);
	};
	return (
		<div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow  p-8 dark:bg-darkGray dark:border-darkBlack">
			<form className="space-y-6" onSubmit={sendEmail}>
				<div>
					<label className="block mb-2 text-md font-medium text-gray-700 dark:text-darkIce">
						Nome Completo
					</label>
					<input
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-redLogo/70 focus:border-redLogo/70 block w-full p-2.5 dark:bg-darkBlack/80 dark:border-gray-600 dark:placeholder-darkIce dark:text-darkIce"
						placeholder="Digite seu nome"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-md font-medium text-gray-700 dark:text-darkIce">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-redLogo/70 focus:border-redLogo/70 block w-full p-2.5 dark:bg-darkBlack/80 dark:border-gray-600 dark:placeholder-darkIce dark:text-darkIce"
						placeholder="Digite seu email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
				</div>
				<div>
					<label className="block mb-2 text-md font-medium  text-gray-700 dark:text-darkIce">
						Mensagem
					</label>
					<textarea
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-redLogo/70 focus:border-redLogo/70 block h-32 w-full p-2.5 dark:bg-darkBlack/80 dark:border-gray-600 dark:placeholder-darkIce dark:text-darkIce"
						placeholder="Digite sua mensagem..."
						type="text"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
				</div>
				<input
					type="submit"
					className="w-full text-white uppercase tracking-wider  bg-redLogo/80 font-medium rounded-md text-sm px-5 py-2.5 text-center hover:bg-redLogo duration-200 ease-linear"
					value="Enviar Mensagem"
				/>
			</form>
		</div>
	);
};

export default ContactForm;
