import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";
import {Grid, Link} from "@mui/material";
import {styled} from "@mui/material/styles";
import React from "react";
import Typography from "@mui/material/Typography";
import {pages} from "./Header";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import burton from '../images/brands/burton.png';
import darkstar from '../images/brands/darkstar.png';
import dc from '../images/brands/dc.png';
import nitro from '../images/brands/nitro.png';
import salomon from '../images/brands/salomon.png';
import vans from '../images/brands/vans.png';

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
      src: burton,
    },
    {
      title: 'darkstar',
      src: darkstar,
    },
    {
      title: 'dc',
      src: dc,
    },
    {
      title: 'nitro',
      src: nitro,
    },
    {
      title: 'salomon',
      src: salomon,
    },
    {
      title: 'vans',
      src: vans,
    }
  ];
  return (
    <Grid container spacing={2}>
      {brands.map((brand: IBrand) => (
        <Grid item xs={4} sx={{
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

const Footer = () => {
  return (
    <Box sx={{
      flex: "0 0 auto",
      backgroundColor: myTheme.dark.background.primary,
      color: myTheme.dark.text.primary,
      fontSize: '.9em',
      letterSpacing: '0.5px',
      lineHeight: '1.5',
      textAlign: 'justify'
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
          <div>form button</div>
          <div>social platform icons</div>
        </Box>
      </Container>
      <LinksFooter>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexFlow: 'row wrap',
            alignItems: 'center',
            p: 3,
          }}
          >
            <Box>
              <Typography component='div' align='left' fontSize='0.9em'>Copyright © Snowboarding 2022. </Typography>
              <Typography component='div' align='left' fontSize='0.9em'>Designed by EnzoLiVolti.</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
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
                  <Link
                    href={page.href}
                    textAlign="center"
                    sx={{
                      textDecoration: 'none',
                      color: myTheme.dark.text.secondary
                    }}
                  >
                    {page.title}
                  </Link>
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