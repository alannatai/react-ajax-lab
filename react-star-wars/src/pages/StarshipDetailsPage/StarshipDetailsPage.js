import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PilotList from '../../components/PilotList';
import { getPilots } from '../../services/sw-api';

const StarshipDetailsPage = ({ location }) => {
	const starship = location.state;
	const [{ pilots, isLoaded }, setState] = useState({
    pilots: [],
    isLoaded: false
  });
  
	useEffect(() => {
			getPilots(starship.pilots).then(pilots => {
				setState({
          pilots: pilots,
          isLoaded: true
				});
      });
	}, [starship]);

	if (isLoaded) {
		return (
			<div className="starship-details-div">
				<table className="starship-details-table">
					<tbody>
						<tr>
							<th>NAME:</th>
							<td>{starship.name}</td>
						</tr>
						<tr>
							<th>MODEL:</th>
							<td>{starship.model}</td>
						</tr>
						<tr>
							<th>PILOTS:</th>
							<td>
                {pilots.length > 0 ? <PilotList pilots={pilots} /> : 'No pilots'}	
							</td>
						</tr>
						<tr>
							<th>
								<Link to="/">BACK</Link>
							</th>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
	return (
		<div className="starship-details-div">
			<div className="loader"></div>
		</div>
	);
};

export default StarshipDetailsPage;
