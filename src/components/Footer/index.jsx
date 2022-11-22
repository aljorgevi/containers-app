import Link from "next/link";
import styled from "styled-components";

import SocialLinks from "../SocialLinks";
import CustomButton from "../UI/Button/Button";
import NewsLetter from "./NewsLetter";

export default function Footer() {
	return (
		<Wrapper className="section-fluid">
			<div className="center max-width-responsive">
				<article className="contact">
					<h4>Contacto</h4>
					<div>
						<p>contacto@lokicars.cl</p>
						<p className="phone">+569 31967364</p>
						<p>Lunes - Domingo</p>
						<p>24h</p>

						<CustomButton>
							<Link href="/contacto">Contactanos!</Link>
						</CustomButton>
					</div>
				</article>
				<article className="social">
					<h4>Social</h4>
					<SocialLinks className="social-links" />
				</article>
				<article className="subscription">
					<h4>Newsletter</h4>
					<p>Subscríbete a nuestra newsletter y recibe noticias y actualizaciones</p>
					<NewsLetter />
				</article>
				<article className="location">
					<h4>Ubicacion</h4>
					<p>Puerto Montt, Chile</p>
				</article>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: var(--grey-1000);
	color: var(--text-white);

	.center {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 66px 30px;
		flex-wrap: wrap;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 15px 0;

		h4 {
			margin-bottom: 1.78rem;
		}

		p {
			font-size: calc((0.8 - 1) * 1.2vw + 1.2rem);
		}
	}

	p {
		letter-spacing: 0.05rem;
	}

	.contact {
		p {
			margin: 0;
		}

		.phone {
			margin-bottom: 15px;
		}
	}

	.social {
		h4 {
			margin-bottom: 5px;
		}
	}

	.social-links {
		display: flex;
		gap: 15px;
		font-size: 24px;

		a {
			color: var(--white);
		}
	}

	.subscription {
	}

	.location {
	}

	@media (min-width: 768px) {
		p {
			font-size: calc((0.8 - 1) * 1.2vw + 1rem) !important;
		}

		.center {
			flex-direction: row;
			padding: 70px 20px;
		}

		article {
			width: 25%;
		}
	}
`;
