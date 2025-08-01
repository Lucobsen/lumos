import { Email, Instagram } from "@mui/icons-material";
import { Box, Link, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Footer = () => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <footer>
            <Stack
                position='sticky'
                bottom={0}
                left={0}
                height={isSmallScreen ? 100 : 200}
                width='100%'
                sx={{
                    background: ({ palette }) => `linear-gradient(${palette.primary.main}, ${palette.secondary.main})`,
                }}
                mt={isSmallScreen ? 0 : 20}
            >
                <Box
                    component="img"
                    zIndex={5}
                    position='absolute'
                    bottom={0}
                    left={0}
                    right={0}
                    margin='auto'
                    sx={{
                        height: isSmallScreen ? '150px' : '400px',
                        width: isSmallScreen ? '150px' : '400px',
                    }}
                    alt="Lumos Gem"
                    src="lumos-gem.png"
                />
                <Stack
                    height='100%'
                    px={isSmallScreen ? 6 : 10}
                    direction={isSmallScreen ? 'row' : 'column'}
                    alignItems={isSmallScreen ? 'center' : 'flex-end'}
                    justifyContent={isSmallScreen ? 'flex-end' : 'center'}
                    spacing={1}>

                    <Link gap={2} alignItems='center' display='flex' flexDirection='row' underline='none' href='mailto:info@lumoslatin.nl'>
                        <SvgIcon sx={{ color: '#000' }} inheritViewBox>
                            <Email />
                        </SvgIcon>
                        {!isSmallScreen && <Typography color='black' variant='h6'>info@lumoslatin.nl</Typography>}
                    </Link>

                    <Link underline='none' target='_blank' href='https://www.instagram.com/lumoslatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                        <Stack direction='row' alignItems='center' spacing={1}>
                            <SvgIcon sx={{ color: '#000' }} inheritViewBox>
                                <Instagram />
                            </SvgIcon>
                            {!isSmallScreen && <Typography color='black' variant='h6'>lumoslatin</Typography>}
                        </Stack>
                    </Link>

                </Stack>
            </Stack>
        </footer >);
};