import React, { Component } from 'react';

class MonitoringUsers extends Component {
	componentDidMount() {

	}
	tableType(list, users) {
		if (list == true) {
			var rows = [];

			for (var i = 0; i < users.length; i++) {
				rows.push(
					<tr>
						<td>{users[i].name}</td>
						<td>{users[i].email}</td>
						<td><a href={"/user_monitoring_profile/"+users[i].id}>activty</a></td>
						<td><a href="">delete</a></td>
					</tr>
				);		
			}
			return (
				<div>
					<div class="app-title-space">
						<div class="app-titles">
							<div id="idea-icon-title"></div>
							<p class="app-title">User Monitoring</p>
						</div>
					</div>

					<table id="user-info">
						<tbody>			
							<tr>
								<th>User</th>
								<th>E-mail</th>
								<th></th>
								<th></th>
							</tr>
							{rows}
						</tbody>
					</table>
				</div>
			)
		} else {
			return (
				<div>
					<div class="app-title-space">
						<div class="app-titles">
							<div id="idea-icon-title"></div>
							<p class="app-title">User Monitoring</p>
						</div>
					</div>

					<table id="user-info">
						<tbody>			
							<tr>
								<th>Controller</th>
								<th>Action</th>
								<th>Time</th>
								<th>Approximate Duration</th>
							</tr>
							<tr>
								<td>User</td>
								<td>Index</td>
								<td>September 12, 2019</td>
								<td>12 minutes</td>
							</tr>
							<tr>
								<td>User</td>
								<td>Index</td>
								<td>September 18, 2019</td>
								<td>10 minutes</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		}

	}
	render() {
		return (
			<div>
				{this.tableType(this.props.list, this.props.users)}
			</div>
		)
	}
}

MonitoringUsers.propTypes = {
	users: PropTypes.array,
	list: PropTypes.bool
};

export default MonitoringUsers;
