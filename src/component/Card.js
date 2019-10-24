import React from 'react';

const Card = (props) => {
	return(
		<div className='bg-light-blue dib br3 pa2 ma2 grow bw5 shadow-100'>
		<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
		<div>
		<h2>{props.name}</h2>
		<p>{props.email}</p>
		</div>
		</div>
		);
}

export default Card;