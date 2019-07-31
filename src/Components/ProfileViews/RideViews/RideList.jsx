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
import { fetchRideList } from '../../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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

function RideList() {
	const classes = styles();
	const [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}

	return (
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
							<li>Here is a stat</li>
							<li>here is the next stat</li>
							<li>All time stats</li>
						</ul>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
}

fetchRideList.propTypes = {

	dispatch: PropTypes.func
}

export default connect()(RideList);

