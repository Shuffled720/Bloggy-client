
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">IIT Indore</Typography>
                <Text variant="h5">Hello👋 I'm Vishal

                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    to reach me---------:
                    <Box component="span" style={{ marginLeft: 5, display:'flex' }}>
                        <Link sx={{mx:2}} href="https://www.instagram.com/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                        
                        <Link href="mailto:ee210002083@iiti.ac.in?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>
                    </Box>

                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;