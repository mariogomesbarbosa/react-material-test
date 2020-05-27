import React from 'react';
import TextField from '@material-ui/core/TextField';

function TextInput(props) {
  return (
		<div className="Input-wraper">
			<div style={styles.inputLabel}>{props.label}</div>
			<TextField 
				id={props.id} 
				placeholder={props.placeholder} 
				variant={props.variant} 
				fullWidth={props.fullWidth}
				disabled={props.desabled}
			/>
		</div>
	);
}

const styles = {
	inputLabel: {
		fontSize: '14px',
  	fontWeight: 500,
  	fontFamily: 'Montserrat',
  	color: '#474F60',
  	textAlign: 'left',
  	margin: '0px 0px 8px 2px',
	}
}

export default TextInput;