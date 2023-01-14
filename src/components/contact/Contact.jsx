
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Vishal Kumar
Crazy Full Stack Web Developer | I help people build jaw-dropping websites with amazing visual elements | Web 3.0 Maniac | Technical Content Writer</Typography>    
                <Text variant="h5">
                    Reach out to me on:
                    
                    <Link sx={{mx:2}} href="" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    <br/>
                    Send me an Email :
                    
                    <Link sx={{mx:2}} href="" target="_blank" color="inherit">
                        <Email />
                    </Link>
                    <br/>
                    Git-hub link:
                    
                    <Link sx={{mx:2}} href="" target="_blank" color="inherit">
                        <GitHub />
                    </Link>
                    <br/>
                    
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;