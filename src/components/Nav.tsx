import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Link } from 'react-router';

const pages = ['home', 'gallery', 'contact'];

function Nav() {
    return (
        <AppBar position="absolute" id="nav" style={{background:"transparent"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <PhotoCamera sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                type="submit"
                                key={page}
                                sx={{ my: 2, color: 'white', display: 'block',  }}
                                component={Link} to={`/${page}`}
                                className="navButton"

                            >
                                <MenuItem key={page} id="navButton">
                                    {page}
                                </MenuItem>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nav;
