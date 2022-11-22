import Button from "@mui/material/Button";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function CustomButton({ children, className }) {
	return (
		<Button color="primary" className={`${styles.Button} ${className}`} variant="outlined">
			{children}
		</Button>
	);
}

CustomButton.propTypes = {
	className: PropTypes.string,
};
