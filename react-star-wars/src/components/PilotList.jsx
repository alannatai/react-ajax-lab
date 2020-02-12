import React from 'react';

const PilotList = (props) => {
  console.log(props.pilots)
  const pilots = props.pilots
  
	return (
		<div>
      {pilots.map(pilot => <p key={pilot.name}>{pilot.name}</p>)}
		</div>
	);
};

export default PilotList;
