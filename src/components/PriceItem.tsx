import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import type { PriceItemProps } from '../routes/prices';


export const PriceItem = ({ title, subtitle, info, cost }: PriceItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <Grid>
            <Stack maxWidth={600} boxShadow={({ shadows }) => shadows[8]} border={4} borderRadius={10} borderColor='#000' height='fit-content' pb={2}>
                <Box textAlign='center' borderBottom='4px solid #000' p={2} sx={{
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                    borderTopLeftRadius: '35px', borderTopRightRadius: '35px'
                }}>
                    <Typography
                        fontFamily='Chau Philomene One'
                        color='black'
                        variant={isSmallScreen ? 'h4' : 'h2'}
                        whiteSpace='nowrap'>
                        {title}
                    </Typography>
                    <Typography
                        fontFamily='Chau Philomene One'
                        color='black'
                        variant={isSmallScreen ? 'h6' : 'h5'}
                        whiteSpace='pre-line'>
                        {subtitle}
                    </Typography>
                    <Typography color='black' variant={isSmallScreen ? 'h6' : 'h5'}>{cost}</Typography>
                </Box>
                <Typography
                    my={2}
                    px={4}
                    color='black'
                    variant={isSmallScreen ? 'body1' : 'h6'}
                    textAlign='center'
                    whiteSpace='pre-line'>
                    {info}
                </Typography>
            </Stack>
        </Grid>
    );
}