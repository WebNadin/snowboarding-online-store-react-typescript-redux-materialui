import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";
import {Grid, Link} from "@mui/material";
import {styled} from "@mui/material/styles";
import React from "react";
import Typography from "@mui/material/Typography";
import {pages} from "./Header";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const TitleFooter = styled('div')(({ theme }) => ({
  color: myTheme.dark.text.secondary,
  fontSize: '.9em',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 600,
  margin: '1.5em',
}));
const LinksFooter = styled('div')(({ theme }) => ({
  backgroundColor: myTheme.dark.background.secondary,
  fontSize: '.9em',
  textAlign: 'center',
  display: 'flex',
  fontWeight: 600,
  padding: '3em',
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
              columnSpacing={{ sm: 4, md: 10 }}
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum exercitationem illum optio pariatur voluptatem. Aut eligendi natus nisi quo recusandae.
          </Grid>
        </Grid>
        <Divider color="#1c1c1c"/>
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
            justifyContent: 'flex-end',
          }}
          >
            {pages.map((page, index,array) => (
              <Typography key={page.title}>
                <Link
                  href={page.href}
                  textAlign="center"
                  sx={{
                    textDecoration: 'none',
                    color: myTheme.dark.text.primary
                  }}
                >
                  {page.title}
                </Link>
                {index < array.length-1 && "/"}
              </Typography>
            ))}
          </Box>
        </Container>
      </LinksFooter>
    </Box>
  )
}

export default Footer;