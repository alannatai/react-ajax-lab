import React from 'react';
import { Link } from 'react-router-dom';

const StarshipPage = ({ starships }) => {
  if (starships.length > 0) {
	return (
		<div className="starships-container">
			{starships.map(starship => (
				<Link
					className="starship-link"
					to={{
						pathname: '/starship',
						state: starship
					}}
					key={starship.name}
				>
					<div className="starship-div">
						<p className="starship-text">{starship.name}</p>
					</div>
				</Link>
			))}
		</div>
  )};
  return (
		<div className="starships-container">
			<div className="loader"></div>
		</div>
	);
};

export default StarshipPage;
