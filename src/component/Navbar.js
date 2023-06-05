import React from "react";
import { AppBar, Box, Button, CssBaseline, Stack, Toolbar, Typography, Link, ListItem } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box >
            <CssBaseline />
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant="h5">
                            <Link component={RouterLink} to={'/'} sx={{ color: 'white', textDecoration: 'none' }}>
                                News Web
                            </Link>
                        </Typography>
                    </Stack>
                    <Stack>
                        <ListItem>
                            <Link component={RouterLink} to={"/login"}>
                                <Button variant='text' sx={{ color: 'white', pr: 2 }} startIcon={<LoginIcon />}> Login </Button>
                            </Link>
                        </ListItem>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;