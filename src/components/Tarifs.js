import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const Tarifs = () => {
    return (
        <>
        <h2>Nos Services</h2>
        <Box sx={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', borderRadius: '8px', boxShadow: 3, maxWidth: '900px', margin: 'auto' }}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <AccessTimeIcon sx={{ color: '#007bff' }} />
                    </ListItemIcon>
                    <ListItemText primary={<>Séance de <strong>10</strong> minutes : <strong>10€</strong></>} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <AccessTimeIcon sx={{ color: '#007bff' }} />
                    </ListItemIcon>
                    <ListItemText primary={<>Séance de <strong>20</strong> minutes : <strong>20€</strong></>} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <AccessTimeIcon sx={{ color: '#007bff' }} />
                    </ListItemIcon>
                    <ListItemText primary={<>Séance de <strong>30</strong> minutes : <strong>30€</strong></>} />
                </ListItem>
            </List>
            <Divider />
            <Typography variant="body1" component="p" sx={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                <LocalCafeIcon sx={{ color: '#17a2b8', marginRight: '8px' }} />
                Nous offrons une infusion à la valériane pour une expérience complète de relaxation.
            </Typography>
        </Box>
        </>
    );
};

export default Tarifs; 