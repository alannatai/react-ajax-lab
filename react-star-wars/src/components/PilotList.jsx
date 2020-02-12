import React from 'react';

const PilotList = ({pilots}) => {
  return (
		<div>
      {pilots.map(pilot => <p key={pilot.name}>{pilot.name}</p>)}
		</div>
	);
};

export default PilotList;
