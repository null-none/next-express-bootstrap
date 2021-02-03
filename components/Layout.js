import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);
