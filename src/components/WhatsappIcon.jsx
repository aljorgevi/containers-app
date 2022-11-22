import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
	return (
		<Container target="_blank" href="https://wa.link/5zvjjw">
			<FaWhatsapp className="wsp-icon" />
		</Container>
	);
};

export default WhatsappIcon;

const Container = styled.a`
	.wsp-icon {
		background-color: var(--white);
		border-radius: 30px;
		color: green;
		font-size: 47px;
		padding: 4px;
		margin-right: 10px;
		position: fixed;
		z-index: 20;
		right: 30px;
		bottom: 30px;
		transition: transform 800ms cubic-bezier(0.36, -0.62, 0.66, 1.51);
		&:hover {
			transform: rotateY(360deg);
		}
	}
`;
