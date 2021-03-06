import React from "react";
import Box from "@mui/material/Box";
import {Button, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {NavLink, pages} from "./Header";
import {myTheme} from "../styles/myTheme";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import Burton from '../images/brands/burton.png';
import Darkstar from '../images/brands/darkstar.png';
import Dc from '../images/brands/dc.png';
import Nitro from '../images/brands/nitro.png';
import Salomon from '../images/brands/salomon.png';
import Vans from '../images/brands/vans.png';
import { ReactComponent as Facebook } from '../images/social/facebook.svg';
import { ReactComponent as GooglePlus } from '../images/social/google-plus.svg';
import { ReactComponent as LinkedIn } from '../images/social/linkedin2.svg';
import { ReactComponent as Twitter } from '../images/social/twitter.svg';

const TitleFooter = styled('div')(() => ({
  color: myTheme.dark.text.secondary,
  fontSize: '.9em',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 600,
  margin: '1.5em',
}));
const LinksFooter = styled('div')(() => ({
  backgroundColor: myTheme.dark.background.secondary,
  color: myTheme.dark.text.secondary,
  fontSize: '.9em',
  textAlign: 'center',
  display: 'flex',
  fontWeight: 600,
}));

export interface IReview {
  name: string,
  text: string,
  date: string,
}

const ReviewFooter = ({ review }: {review: IReview}) => {
  return (
    <Box mt={2} mb={3}>
      <Typography color={myTheme.common.accent} sx={{fontSize: '0.9em'}}>{review.name}</Typography>
      <Typography sx={{fontSize: '0.9em'}}>{review.text}</Typography>
    </Box>
  )
}
const DividerFooterLinks = () => {
  return (
    <Typography component='span' sx={{fontSize: '0.9em', m: 1}}>/</Typography>
  )
}

interface IBrand {
  title: string,
  src: string,
}

const BrandsList = () => {
  const brands = [
    {
      title: 'burton',
      src: Burton,
    },
    {
      title: 'darkstar',
      src: Darkstar,
    },
    {
      title: 'dc',
      src: Dc,
    },
    {
      title: 'nitro',
      src: Nitro,
    },
    {
      title: 'salomon',
      src: Salomon,
    },
    {
      title: 'vans',
      src: Vans,
    }
  ];
  return (
    <Grid container spacing={2}>
      {brands.map((brand: IBrand) => (
        <Grid key={brand.title} item xs={4} sx={{
          display: 'flex',
          justifyContent: 'center',
          minWidth: '70px'
        }}>
        <Box sx={{
          bgcolor: myTheme.light.background.primary,
          p: 1,
          width: '100%',
          textAlign: 'center',
        }}>
          <img
            src={brand.src}
            srcSet={brand.src}
            alt={brand.title}
            loading="lazy"
            width='70px'
            height= '70px'
          />
        </Box>
        </Grid>
      ))}
    </Grid>
  );
}

const EmailForm = () => {
  const EmailButton = () => (
    <Button color='primary' size='small' sx={{
      borderRadius: '0',
      bgcolor: myTheme.dark.text.secondary,
      color: myTheme.dark.background.primary,
      '&:hover': {
        bgcolor: 'rgba(255,255,255,0.54)',
      }
    }}>
      <ArrowForwardIosIcon fontSize='small'/>
    </Button>
  )
  return (
    <Box  sx={{
      mb: {
        xs: 4,
        sm: 0
      },
      mt: {
        xs: 0,
        sm: 0
      },
      display: 'flex',
      height: '44px',
      justifyContent: 'center',
    }}>
      <TextField
        id="send-email"
        label="Enter email for newsletter"
        variant="filled"
        size="small"
        InputProps={{
          style: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            color: myTheme.dark.text.secondary,
            backgroundColor: myTheme.dark.background.secondary,
            borderRadius: '0',
            fontSize: '0.9em',
            minWidth: '16em'
          },
          disableUnderline: true
        }}
        InputLabelProps={{
          style: {
            color: myTheme.dark.text.secondary,
            fontSize: '0.9em'
          } }}
      />
      <EmailButton />
    </Box>
  );
}

const Socials = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'noWrap',
      justifyContent: 'center',
    }}>
      <Box sx={{
        bgcolor: myTheme.dark.background.secondary,
        transition: 'background .3s',
        '&:hover': {
          bgcolor: myTheme.dark.text.primary,
          transition: 'background .3s',
        }
      }}>
        <IconButton
          size='small'
          sx={{
            borderRadius: 0,
            '&:hover': {
              bgcolor: 'transparent'
            }
          }}
          aria-label="facebook.com"
          onClick={() => window.open('https://www.facebook.com')}
        >
          <Facebook style={{
            fill: myTheme.dark.text.secondary,
          }}/>
        </IconButton>
      </Box>
      <Box sx={{
        bgcolor: myTheme.dark.background.secondary,
        transition: 'background .3s',
        '&:hover': {
          bgcolor: myTheme.dark.text.primary,
          transition: 'background .3s',
        },
        ml: 1,
      }}>
        <IconButton size='small' aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com')}>
          <LinkedIn style={{
            fill: myTheme.dark.text.secondary,
          }}/>
        </IconButton>
      </Box>
      <Box sx={{
        bgcolor: myTheme.dark.background.secondary,
        transition: 'background .3s',
        '&:hover': {
          bgcolor: myTheme.dark.text.primary,
          transition: 'background .3s',
        },
        ml: 1,
      }}>
        <IconButton size='small' aria-label="twitter.com" onClick={() => window.open('https://www.twitter.com')}>
          <Twitter style={{
            fill: myTheme.dark.text.secondary,
          }}/>
        </IconButton>
      </Box>
      <Box sx={{
        bgcolor: myTheme.dark.background.secondary,
        transition: 'background .3s',
        '&:hover': {
          bgcolor: myTheme.dark.text.primary,
          transition: 'background .3s',
        },
        ml: 1,
      }}>
        <IconButton size='small' aria-label="google.com" onClick={() => window.open('https://www.google.com')}>
          <GooglePlus style={{
            fill: myTheme.dark.text.secondary,
          }}/>
        </IconButton>
      </Box>
    </Box>
  )
}

const NavLinkFooter = styled(NavLink)`
  color: #6b6b6b;
`;
const Footer = () => {
  return (
    <Box sx={{
      flex: "0 0 auto",
      backgroundColor: myTheme.dark.background.primary,
      color: myTheme.dark.text.primary,
      fontSize: '.9em',
      letterSpacing: '0.5px',
      lineHeight: '1.5',
      textAlign: 'justify',
    }}
    >
      <Container maxWidth="xl">
        <Grid container
              rowSpacing={{xs: 2}}
              columnSpacing={{ sm: 4, md: 8 }}
              sx={{ p: 3 }}
        >
          <Grid item
                xs={12}
                md={4}
          >
            <TitleFooter>make the right choice</TitleFooter>
            <Typography fontSize='.9em'>The snow is soft and you won't fall going at high speeds when you first start out. The great news is that once you fall, you can get right back up and try again! Trust us, EVERYONE falls at the beginning. Snowboarding is worth the effort, though. Learning is part of the fun and you'll feel like a rockstar when you make it down the hill (or half the hill) without falling for the first time.</Typography>
          </Grid>
          <Grid item
                xs={12}
                md={4}
          >
            <TitleFooter>reviews</TitleFooter>
            <ReviewFooter review={{
              name: 'Albert P.',
              text: 'Just what I was looking for. Top quality and good price.',
              date: 'Nov 11, 2021',
            }} />
            <ReviewFooter review={{
              name: 'Max S.',
              text: 'I wish it had something near the boot to help keep snow out when snowboarding. Other than that I liked them. They were comfortable and I liked the depth on the zipper pant side pocket - good for a phone and wallet..',
              date: 'Oct 22, 2020',
            }} />
          </Grid>
          <Grid item
                xs={12}
                md={4}
          >
            <TitleFooter>brands</TitleFooter>
            <BrandsList />
          </Grid>
        </Grid>
      </Container>
      <Divider color="#1c1c1c"/>
      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 3,
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        }}>
          <EmailForm />
          <Socials />
        </Box>
      </Container>
      <LinksFooter>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'space-between',
            },
            flexFlow: 'row wrap',
            alignItems: 'center',
            p: 3,
          }}
          >
            <Box>
              <Typography component='div' align='left' fontSize='0.9em'>Copyright ?? Snowboarding 2022. </Typography>
              <Typography component='div' align='left' fontSize='0.9em'>Designed by EnzoLiVolti.</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              order: {
                xs: -1,
                sm: 0
              },
              width: {
                xs: '100%',
                sm: 'auto',
              },
              mb: {
                xs: 3,
                sm: 0,
              }
            }}>
              {pages.map((page, index,array) => (
                <Typography key={page.title} fontSize='0.9em'>
                  <NavLinkFooter
                    to={`/${page.href}`}
                  >
                    {page.title}
                  </NavLinkFooter>
                  {index < array.length-1 && <DividerFooterLinks />}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </LinksFooter>
    </Box>
  )
}

export default Footer;