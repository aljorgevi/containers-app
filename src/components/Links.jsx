import { FaAlignRight, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';

const Links = ({ styleClass, toggleSidebar }) => {
	return (
		<ul className={styleClass}>
			<li>
				<Link href='/' className='page-link' onClick={toggleSidebar}>
					<a>Acerca</a>
				</Link>
			</li>
			<li>
				<Link href='/' className='page-link'>
					<a>Galeria</a>
				</Link>
			</li>
			<li>
				<Link href='/' className='page-link'>
					<a>Blog</a>
				</Link>
			</li>
			<li>
				<Link href='/contacto' className='page-link'>
					<a>Contacto</a>
				</Link>
			</li>
		</ul>
	);
};

export default Links;
