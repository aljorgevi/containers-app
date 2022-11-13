import PropTypes from 'prop-types';
import { socialLinks } from '../constants';

const SocialLinks = ({ className }) => {
	return (
		<ul className={className}>
			{socialLinks.map(item => {
				const { url, id, icon, rel, target } = item;

				return (
					<li key={id}>
						<a href={url} rel={rel} target={target}>
							{icon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;

SocialLinks.propTypes = {
	className: PropTypes.string
};
