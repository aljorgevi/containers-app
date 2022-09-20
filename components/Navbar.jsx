import { FaAlignRight } from 'react-icons/fa';
import Links from './Links';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
// import logo from '../public/logo2.png';

const Navbar = ({ toggleSidebar }) => {
	return (
		<nav className={styles.Navbar}>
			<header>
				<section>
					<div className={styles.Logo}>
						<Link href='/'>
							<a className={styles.LogoImage}>
								{/* <Image
									src={logo}
									alt='image jorge'
									width={36}
									height={36}
									style={{ borderRadius: '50%' }}
								/> */}
								Logo
							</a>
						</Link>
					</div>

					<button
						type='button'
						className={styles.Toggle}
						onClick={toggleSidebar}
					>
						<FaAlignRight />
					</button>
				</section>
				<Links styleClass={styles.Links} />
			</header>
		</nav>
	);
};

export default Navbar;
