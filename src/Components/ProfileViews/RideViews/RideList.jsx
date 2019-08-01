import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchRideList, makeMap } from '../../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ride from './Ride';



const styles = makeStyles(theme => ({
	palette: {
		primary: {
			main: '#00897b'
		},
		secondary: {
			main: '#009688'
		},
	},
	card: {
		maxWidth: 300,
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	testcolor: {
		color: '#00897b',
	}
}));



function RideList(props) {
	console.log(props);
	
	const classes = styles();
	const [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}

	return (
		// <div>
		// 	<h1>{props.masterRideList[0].name}</h1>
		// </div>
		<div className={classes.container}>
			<Card className={classes.card}>
				<CardHeader
					title="My Rides"
				/>
				<CardActions id='last' disableSpacing>
					<IconButton
						color='primary'
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent className={classes.testcolor}>
						<ul>
							{Object.keys(props.masterRideList).map((rideId) => {
							let ride = props.masterRideList[rideId];
							return <Ride 
							Name={ride.name}
							Distance={ride.distance}
							key={rideId}
							/>
							})}
						</ul>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
}

RideList.propTypes = {
	masterRideList: PropTypes.object,
	dispatch: PropTypes.func
}

const mapStateToProps = state => {
	return {
		masterRideList: state.masterRideList
	};
};

export default connect(mapStateToProps)(RideList);


