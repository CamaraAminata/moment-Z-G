import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import ChairIcon from '@mui/icons-material/Chair';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WaterIcon from '@mui/icons-material/Water';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const Locaux = () => {
    return (
        <>
        <h2>Nos Locaux</h2>
        <Box sx={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', borderRadius: '8px', boxShadow: 3, maxWidth: '900px',  margin: 'auto',marginBottom: '120px' ,}}>
          <p>Un espace zen, où luxe et sérénité se rencontrent. Notre équipe passionnée vous accueille dans un cadre raffiné pour vous offrir des moments de pure détente et de revitalisation.</p>
            <List sx={{ padding: 0 }}>
                <Box>
                    <ListItem>
                        <Typography variant="h6" component="h3">Surface:</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Idéale 40 m²" />
                    </ListItem>
                </Box>
                <Divider />
                <Box>
                    <ListItem>
                        <Typography variant="h6" component="h3">Équipement:</Typography>
                    </ListItem>
                    <List sx={{ paddingLeft: '20px' }}>
                        <ListItem>
                            <ListItemIcon>
                                <ChairIcon sx={{ color: '#007bff' }} />
                            </ListItemIcon>
                            <ListItemText secondary={<>2 fauteuils massant haut de gamme <i>(incluant un tapis sous chaque fauteuil)</i></>} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <WaterIcon sx={{ color: '#17a2b8' }} />
                            </ListItemIcon>
                            <ListItemText secondary="Projecteur d'aurore boréale" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <HeadphonesIcon sx={{ color: '#007bff' }} />
                            </ListItemIcon>
                            <ListItemText secondary="Casque Bose" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SpaIcon sx={{ color: '#28a745' }} />
                            </ListItemIcon>
                            <ListItemText secondary="Diffuseur d'huiles essentielles, etc." />
                        </ListItem>
                    </List>
                </Box>
                <Divider />
                <Box>
                    <ListItem>
                        <Typography variant="h6" component="h3">Petit Comptoir:</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <WaterIcon sx={{ color: '#17a2b8' }} />
                        </ListItemIcon>
                        <ListItemText secondary="Distributeur d'eau filtrée froide et chaude" />
                    </ListItem>
                </Box>
                <Divider />
                <Box>
                    <ListItem>
                        <Typography variant="h6" component="h3">Décoration:</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Contemporaine avec des lignes épurées, des matières brutes et des tons neutres ponctués de touches de couleurs vives." />
                    </ListItem>
                </Box>
            </List>
        </Box>
        </>
    );
};

export default Locaux; 