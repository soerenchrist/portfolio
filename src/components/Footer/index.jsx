import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Sören Christ
			<small className={Styles.byline}>🚀 Built with Astro</small>
		</footer>
	);
}
export default Footer;
