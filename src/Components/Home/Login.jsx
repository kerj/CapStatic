import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { fetchProfile } from '../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00897b'
		},
		secondary: {
			main: '#009688'
		}
	}
})
theme = responsiveFontSizes(theme);

const styles = makeStyles(theme => ({
	container: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0'
	},
	input: {
		margin: theme.spacing(1),
	},
	form: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	}
}));

function Login({dispatch}) {
	const classes = styles();
	return (
		<Grid className={classes.container}
			container
			direction='column'
			alignItems='center'
			justify='space-between'
			align='center'
			spacing={0}
		>
			<MuiThemeProvider theme={theme}>
				<Card>
					<CardContent id="firebaseui-auth-container">
						<form id="loader" className={classes.form} onSubmit={e => {
							e.preventDefault();
							if(1 > 2){
								return;
							}
							dispatch(fetchProfile())
						}}>
							<Input
								placeholder='User Name'
								className={classes.input}
								inputProps={{
									'aria-label': 'description'
								}}
							/>
							<Input

								type='password'
								placeholder='Password'
								className={classes.input}
								inputProps={{
									'aria-label': 'description'
								}}
							/>
							<CardActions>
								<Button color='primary' variant="contained" type='submit'>Login</Button>
							</CardActions>
						</form>
					</CardContent>
				</Card>
			</MuiThemeProvider>
		</Grid>
	)
}

Login.propTypes = {
	dispatch: PropTypes.func
};

export default connect()(Login);

