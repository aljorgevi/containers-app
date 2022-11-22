import Link from "next/link";
import PropTypes from "prop-types";

const Links = ({ styleClass, toggleSidebar }) => {
	return (
		<ul className={styleClass}>
			<li>
				<Link href="/" className="page-link" onClick={toggleSidebar}>
					<a>Acerca</a>
				</Link>
			</li>
			<li>
				<Link href="/" className="page-link">
					<a>Galeria</a>
				</Link>
			</li>
			<li>
				<Link href="/" className="page-link">
					<a>Blog</a>
				</Link>
			</li>
			<li>
				<Link href="/contacto" className="page-link">
					<a>Contacto</a>
				</Link>
			</li>
		</ul>
	);
};

export default Links;

Links.propTypes = {
	styleClass: PropTypes.string,
	toggleSidebar: PropTypes.func.isRequired,
};
