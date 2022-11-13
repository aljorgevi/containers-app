import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const SocialLinks = ({ styleClass }) => {
	return (
		<ul className={styleClass}>
			<li>
				<a href='www.linkedin.com/in/jorgeamena'>
					<FaInstagram className='social-icon linkedin-icon' />
				</a>
			</li>
			<li>
				<Link href='https://github.com/aljorgevi'>
					<a>
						<FaFacebookF className='social-icon github-icon' />
					</a>
				</Link>
			</li>
			<li>
				<Link href='https://github.com/aljorgevi'>
					<a>
						<FaWhatsapp className='social-icon github-icon' />
					</a>
				</Link>
			</li>
		</ul>
	);
};
export default SocialLinks;
