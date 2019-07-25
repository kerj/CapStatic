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


const styles = makeStyles(theme => ({
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
}));

export default function ProfileStats() {
	const classes = styles();
	const [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		console.log();
		
		setExpanded(!expanded);
	}

	return (
		<div>

			<Card className={classes.card}>
				<CardContent>
					<h4>Last Ride Stats</h4>
				</CardContent>
				<CardActions id='last' disableSpacing>
					<IconButton
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
					<CardContent>
						<ul>
							<li>Here is a stat</li>
							<li>here is the next stat</li>
						</ul>
					</CardContent>
				</Collapse>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<h4>Past 90 Days Stats</h4>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
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
					<CardContent>
						<ul>
							<li>Here is a stat</li>
							<li>here is the next stat</li>
						</ul>
					</CardContent>
				</Collapse>
			</Card>
			<Card className={classes.card}>
				<CardContent>
					<h4>All Time Stats</h4>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
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
					<CardContent>
						<ul>
							<li>Here is a stat</li>
							<li>here is the next stat</li>
						</ul>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
}
