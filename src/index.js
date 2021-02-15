import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
	return (
		<div>
			<Header />
			<Card
				icon="fas fa-building image "
				title="About Us"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			/>
			<Card
				icon="fas fa-globe-americas image"
				title="Our Value"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				color="lightgray"
			/>
			<Card
				icon="fas fa-handshake image"
				title="Our Mission"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			/>
			<Contact />
		</div>
	);
};

// HEADER
const Header = () => {
	return (
		<div className="header">
			<h1>Company</h1>
			<p>We Specalize in something...</p>
		</div>
	);
};

// CARD
const Card = (props) => {
	return (
		<div className="flex" style={{ backgroundColor: `${props.color}` }}>
			<div className="content">
				<div className="icon" style={{ fontSize: '3em', color: 'orangered' }}>
					<i className={props.icon} />
				</div>
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</div>
	);
};

// CONTACT
const Contact = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Contact Us</h1>
			<div className="contact-bigger">
				<div className="contact-big">
					<p>Contact us and will get back to you within 24 hours</p>
					<ul>
						<li>
							<i class="fas fa-map-marker-alt" /> Kampala,Uganda
						</li>
						<li>
							<i class="fas fa-mobile-alt" /> +112 000 800 900
						</li>
						<li>
							<i class="far fa-envelope" /> Company@gmail.com
						</li>
					</ul>
				</div>
				<div className="contact-small">
					<h4>Contact</h4>
					<div>
						<input type="email" placeholder="email address" style={{ outline: 'none' }} />
						<br />
						<br />
						<textarea className="comments" rows="6" cols="25" />
						<br />
						<button>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
