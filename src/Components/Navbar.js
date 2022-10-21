import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useLocation } from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

const drawerWidth = 240;


function DrawerAppBar(props) {
    const loc = useLocation();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <TaskIcon /> AKSH DESAI
            </Typography>
            <Divider />

            <List>
                <ListItem key="Home" disablePadding style={{ backgroundColor: loc.pathname === "/" ? "grey" : "" }}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText> <NavLink sx={{ textUnderlinePosition: "none", color: "whitesmoke" }} to="/" end style={({ isActive }) => { return { backgroundColor: isActive ? "grey" : "", fontWeight: isActive ? "bold" : "", padding: isActive ? "10px" : "", textDecoration: "none" } }}>Home</NavLink> </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem key="Contact" disablePadding style={{ backgroundColor: loc.pathname === "/contact" ? "grey" : "" }}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText > <NavLink sx={{ backgroundColor: "grey", color: "whitesmoke" }} to="/contact" style={({ isActive }) => { return { backgroundColor: isActive ? "grey" : "", fontWeight: isActive ? "bold" : "", padding: isActive ? "10px" : "", textDecoration: "none" } }}>Contact</NavLink> </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem key="Login" disablePadding style={{ backgroundColor: loc.pathname === "/login" ? "grey" : "" }}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText > <NavLink sx={{ textUnderlinePosition: "none", color: "whitesmoke" }} to="/login" style={({ isActive }) => { return { backgroundColor: isActive ? "grey" : "", fontWeight: isActive ? "bold" : "", padding: isActive ? "10px" : "", textDecoration: "none" } }}>Login</NavLink> </ListItemText>                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" color='secondary'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        AKSH DESAI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button color="inherit" component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} sx={{ textTransform: "none" }} to="/" end>Home</Button>

                        <Button color="inherit" component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} sx={{ textTransform: "none" }} to="/contact">Contact</Button>

                        {localStorage.getItem("token") === null ?   (<Button color="inherit" component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} sx={{ textTransform: "none" }} to="/login">Login/Regsitration</Button>) :   (<Button color="inherit" component={NavLink} style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} sx={{ textTransform: "none" }} to="/dashboard">Dashboard</Button>)}
                      
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
