import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import { repatchaKey } from "../config/google";
import { ErrorTextBlock } from "./UI/ErrorTextBlock/ErrorTextBlock";

const ContactForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const captchaRef = useRef(null);
	const [showCapatchaError, setShowCapatchaError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState(null);

	const onSubmit = async (values, event) => {
		event.preventDefault();
		setIsLoading(true);
		setFetchError(null);

		// if (!captchaRef.current.getValue()) {
		// 	setShowCapatchaError(true);
		// 	setIsLoading(false);
		// 	return;
		// }]

		setShowCapatchaError(false);

		const formValuesJSON = JSON.stringify(values);

		const res = await fetch("/api/mail", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: formValuesJSON,
		});

		if (res.ok) {
			return router.push("/success");
		} else {
			setIsLoading(false);
			setFetchError(
				"hubo un error con enviando tu mensaje, prueba otra vez o escribenos por whastapp o directamente a nuestro email de contacto"
			);
		}
	};

	const handleRecaptcha = () => {
		if (captchaRef.current.getValue()) {
			setShowCapatchaError(false);
		}
	};

	return (
		<Container>
			<article className="contact-form">
				<h3>contáctanos</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							placeholder="nombre"
							{...register("name", { required: true })}
						/>
						{errors.name && <p className="error">Campo obligatorio</p>}

						<input
							className="form-control"
							type="email"
							placeholder="email"
							name="email"
							{...register("email", { required: true })}
						/>
						{errors.email && <p className="error">Campo obligatorio</p>}
						<input
							className="form-control"
							type="text"
							placeholder="telefono"
							name="phone"
							{...register("phone", { required: true })}
						/>
						{errors.phone && <p className="error">Campo obligatorio</p>}

						<textarea
							className="form-control"
							type="text"
							placeholder="Indíquenos tu consulta y te contactaremos lo antes posible."
							name="message"
							{...register("message", { required: true })}
						/>
						{/* {showCapatchaError && (
							<p className='error mt-1'>Captcha es obligatorio</p>
						)} */}
						{errors.message && <p className="error">Campo obligatorio</p>}

						{/* // TODO: get a re captcha for container page */}
						{/* <div className='g-wrapper'>
							<div className='g-recaptcha'>
								<ReCAPTCHA
									ref={captchaRef}
									sitekey={repatchaKey}
									onChange={handleRecaptcha}
								/>
							</div>
						</div> */}

						{fetchError && <ErrorTextBlock />}
					</div>

					<button type="submit" className="btn submit-btn">
						{isLoading ? "Enviando..." : "Enviar"}
					</button>
				</form>
			</article>
		</Container>
	);
};

ContactForm.propTypes = {
	cars: PropTypes.array.isRequired,
};

const Container = styled.div`
	margin-top: 20px;
	z-index: 10;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-bottom: 20px;

	.contact-form {
		background: var(--white);
		border-radius: var(--borderRadius);
		text-align: center;
		box-shadow: var(--light-shadow);
		transition: var(--transition);
		width: 90vw;
		max-width: 35rem;
		&:hover {
			box-shadow: var(--dark-shadow);
		}

		h3 {
			padding-top: 1.25rem;
			color: var(--grey-500);
		}
	}

	.form-group {
		padding: 1rem 1.5rem;
	}

	.form-control {
		line-height: 40px;
		height: 40px;
		display: block;
		width: 100%;
		padding: 0.75rem 1rem;
		border: 1px solid #ccc;
		margin-bottom: 0.725rem;
		background: var(--grey-100);
		border-radius: var(--borderRadius);
		text-transform: uppercase;
		letter-spacing: var(--letterSpacing);
		&:focus {
			border: 3px solid #0075ff;
			outline: 0px !important;
			-webkit-appearance: none;
			box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
		}
		&:active {
			opacity: 0.8;
			border: 1px solid #ccc;
		}
	}
	.form-control::placeholder {
		font-family: var(--headingFont);
		color: var(--grey-600);
		text-transform: uppercase;
		letter-spacing: var(--letterSpacing);
	}

	.submit-btn {
		display: block;
		width: 100%;
		padding: 1rem;
		border-bottom-left-radius: var(--borderRadius);
		border-bottom-right-radius: var(--borderRadius);
		border-top-right-radius: 0;
		border-top-left-radius: 0;
		cursor: pointer;
	}

	textarea {
		min-height: 200px;
	}

	select {
		border: none;
		background: var(--grey-100);
		border-radius: var(--borderRadius);
		text-transform: uppercase;
		letter-spacing: var(--letterSpacing);
		width: 100%;
		border-radius: 3px;
		height: 40px;
		line-height: 40px;
		transition: 0.3s ease all;
		border: 1px solid #ccc;
		display: block;
		margin-bottom: 20px;
	}

	label {
		height: 40px;
		line-height: 40px;
		transition: 0.3s ease all;
		display: flex;
		margin-bottom: 5px;
		font-family: var(--headingFont);
		color: var(--grey-700);
		text-transform: uppercase;
		letter-spacing: var(--letterSpacing);
	}

	.loading-container {
		max-height: 500px;
	}

	.error {
		text-align: left;
		margin-top: -8px;
		margin-bottom: 0.5rem;
		font-size: 12px;
		color: #bb2929;
	}
	.controller-container {
		margin: 10px 0;
		display: flex;
	}

	.g-wrapper {
		text-align: center;
	}

	.g-recaptcha {
		display: inline-block;
	}

	@media (max-width: 326px) {
		.g-recaptcha {
			transform: scale(0.77);
			transform-origin: 0 0;
			-webkit-transform: scale(0.77);
			-moz-transform: scale(0.77);
			-ms-transform: scale(0.77);
			-o-transform: scale(0.77);
			transform: scale(0.77);
			-webkit-transform-origin: 0 0;
			-moz-transform-origin: 0 0;
			-ms-transform-origin: 0 0;
			-o-transform-origin: 0 0;
			transform-origin: 0 0;
			margin: 0 auto;
		}
	}
`;

export default ContactForm;
