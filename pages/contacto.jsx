import styled from 'styled-components';
import Layout from '../src/components/Layout';

const urlImg =
	'https://veztovcaeiriwxlyuibz.supabase.co/storage/v1/object/sign/lokicars/contact-bg-plan.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2tpY2Fycy9jb250YWN0LWJnLXBsYW4uanBlZyIsImlhdCI6MTY2ODM1NTQwNiwiZXhwIjoxOTgzNzE1NDA2fQ.R461_7R0cTVg6vbZa8OW1TVLIDKzh032Hk2UNbpQlc8&t=2022-11-13T16%3A03%3A27.105Z';

export default function Contacto() {
	return (
		<Layout>
			<Wrapper>
				<div
					style={{
						backgroundImage: `url(${urlImg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						height: '100%'
					}}
				/>
				<div className='info' />
			</Wrapper>
		</Layout>
	);
}
const Wrapper = styled.section`
	width: 100%;
	height: calc(100vh - 10.5rem);
	position: relative;

	.info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		background: linear-gradient(
			to right,
			rgba(39, 39, 39, 0.9),
			rgba(39, 39, 39, 0.3)
		);
	}
`;
