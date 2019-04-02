import React, { Component } from 'react';
import colors from '../json_data/course_colors.js';

class Course extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let tab = document.getElementsByClassName('tab')[this.props.position];
		let tabStatus = document.getElementsByClassName('tab-status')[this.props.position];
		let tabStatusIcon = document.getElementsByClassName('tab-icon-status')[this.props.position];
		let moreInfo = document.getElementsByClassName('click-me')[this.props.position];

		tab.style.backgroundColor = colors[this.props.courseType];

		tabStatus.addEventListener("click", function() {
			tabStatus.style.display = "none";
			tabStatusIcon.style.backgroundImage = "url('/assets/check.gif?v=" + new Date().valueOf() + "')";
			tabStatusIcon.style.display = "block";
		});

		tabStatusIcon.addEventListener("click", function() {
			tabStatus.style.display = "block";
			tabStatusIcon.style.display = "none";
		});

		if (this.props.enrolled === true) {
			tabStatus.style.display = "none";
			tabStatusIcon.style.backgroundImage = "url('/assets/check.gif?v=" + new Date().valueOf() + "')";
			tabStatusIcon.style.display = "block";		
		}

		moreInfo.addEventListener("click", function() {
			document.getElementsByClassName('more-info')[this.props.position].classList.toggle('show');
			moreInfo.classList.toggle('flip');
		}.bind(this));
	}
	render() {
		return (
			<div className="course">
				<div className="tab">
					<div className="tab-container">
						<p className="tab-text">{this.props.courseId}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<i>A Boring Course</i></p>
						<p className="tab-status no-outline" id={this.props.courseId}>Enroll</p>
						<div className="tab-icon-status" id={this.props.courseId+"-Unenrolled"}>
						</div>
					</div>
				</div>
				<div>
					<p className="course-desc">{this.props.description}</p><br/>
				</div>
				<div className="more-info">
					<p><div className="desc-color">Professor</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.professor}</p>
					<p><div className="desc-color">Enrollment</div>&nbsp;&nbsp;&nbsp;{this.props.count} / {this.props.capOff}</p>
					<p><div className="desc-color">Duration</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.startDate} to {this.props.endDate}</p>
				</div>
				<div>
					<p className="click-me">↑</p>
				</div>
			</div>
		)
	}
}

export default Course;
