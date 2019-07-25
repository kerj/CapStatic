import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';
import About from './About'

let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00897b'
		},
		secondary: {
			main: '#009688'
		},
	},
})
theme = responsiveFontSizes(theme);


export default function Footer() {

    const [state, setState] = React.useState({
        bottom: false
    })

    const toggleFooter = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key ==='Shift')) {
            return;
        }
        setState({...state, [side]: open});
    };

    return (
        <MuiThemeProvider>
            <Button color='primary' onClick={toggleFooter('bottom', true)}>More Info</Button>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleFooter('bottom', false)}>
                <About/>
            </Drawer>
        </MuiThemeProvider>
    )
}