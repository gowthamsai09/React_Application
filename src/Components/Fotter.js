import React from "react";
import './Styles.css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {' By Gowtham Sai '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations','Our Developers'],
    },
    {
      title: 'Features',
      description: ['Create Yourself','Random feature','Team feature','Developer stuff',
      ],
    },
    {
      title: 'Pateners',
      description: ['Facebook', 'Instagram', 'Twitter', 'Google'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

function Fotter() {
  return (
    <div>
      <Container id="Footer"
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  )
}

export default Fotter
