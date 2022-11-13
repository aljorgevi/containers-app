import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import CustomButton from '../UI/Button/Button';

export default function NewsLetter() {
	return (
		<Wrapper>
			{/* TODO: change secondary theme to white */}
			<TextField
				className='input-sub'
				color='secondary'
				id='outlined-basic'
				label='Email'
				variant='outlined'
				focused
			/>
			<CustomButton className='btn-sub'>Suscribirme!</CustomButton>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.input-sub {
		width: 255px;
	}

	.btn-sub {
		margin-top: 10px;
	}

	@media (min-width: 768px) {
		gap: 10px;

		/* .input-sub {
			width: 355px;
		} */
	}
`;
