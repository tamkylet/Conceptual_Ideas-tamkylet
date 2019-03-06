import React, { Component } from 'react';
import SideNavigationBar from './side_navigation_bar.js';

class SandwichNavigation extends Component {
	componentDidMount() {
		var sandwich = document.getElementById('sandwich');
		var navey = document.querySelector('#side-navigate');
		var outNavey = document.querySelector('#inner-body');
		var wholeBody = document.getElementsByTagName('body')[0];

		sandwich.addEventListener("click", function() {
			this.classList.toggle('change');
			navey.classList.toggle('slide');
			outNavey.classList.toggle('slide');
			wholeBody.classList.toggle('slide');
		});

		outNavey.addEventListener("mousedown", function() {
			if(navey.classList.contains('slide')) {
				sandwich.classList.toggle('change');
				navey.classList.toggle('slide');
				this.classList.toggle('slide');
				wholeBody.classList.toggle('slide');
			}
		});

		// for mobile support
		outNavey.addEventListener("touchstart", function() {
			if(navey.classList.contains('slide')) {
				sandwich.classList.toggle('change');
				navey.classList.toggle('slide');
				this.classList.toggle('slide');
				wholeBody.classList.toggle('slide');
			}
		});
	}
	render() {
		return (
			<div>
				<div id="sandwich">
					<div id="bar1"></div>
					<div id="bar2"></div>
					<div id="bar3"></div>
				</div>
				<SideNavigationBar signedin={this.props.signedin} admin={this.props.admin} />
			</div>
		)
	}
}

SandwichNavigation.propTypes = {
	signedin: PropTypes.bool,
	admin: PropTypes.bool
};

export default SandwichNavigation;
