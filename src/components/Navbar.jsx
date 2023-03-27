import Image from "next/image";
import PropTypes from "prop-types";
import { FaAlignRight } from "react-icons/fa";

import Links from "./Links";
import Link from "next/link";
import logo from "../../public/logo-removebg-preview.png";
import styles from "../../styles/Navbar.module.css";

const Navbar = ({ toggleSidebar }) => {
	//
	return (
		<div className="section-center navbar">
			<nav className={styles.Navbar}>
				<header>
					<section>
						<div className={styles.Logo}>
							<Link href="/">
								<a className={styles.LogoImage}>
									<Image
										src={logo}
										alt="image jorge"
										width={100}
										height={100}
										objectFit="contain"
									/>
								</a>
							</Link>
						</div>

						<button type="button" className={styles.Toggle} onClick={toggleSidebar}>
							<FaAlignRight />
						</button>
					</section>
					<Links styleClass={styles.Links} />
				</header>
			</nav>
		</div>
	);
};

export default Navbar;

Navbar.propTypes = {
	toggleSidebar: PropTypes.func.isRequired,
};
