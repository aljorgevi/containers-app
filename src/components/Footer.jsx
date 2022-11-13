import styled from 'styled-components';
import Button from '@mui/material/Button';

export default function Footer() {
	return (
		<Wrapper className='section-center'>
			<div className='center'>
				<article className='contact'>
					<h4>Contact</h4>
					<div>
						<p>email</p>
						<p>week days</p>
						<p>horario</p>
						{/* TODO: change the colour primary to loki colours  */}
						<Button variant='outlined'>Contactanos!</Button>
					</div>
				</article>
				<article className='social'>
					<h3>Social</h3>
					<div>iconos</div>
				</article>
				<article className='subscription'>
					<h3>Subscribe</h3>
					<p>descripcion</p>
					<input type='text' name='' id='' />
					<button>Subscribirme!</button>
				</article>
				<article className='location'>
					<h3>Ubicacion</h3>
					<p>direccion</p>
				</article>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	.center {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 50px 0;
		flex-wrap: wrap;
	}

	.contact {
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.social {
	}

	.subscription {
	}

	.location {
	}
`;
