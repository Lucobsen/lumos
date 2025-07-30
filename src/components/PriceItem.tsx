import { Box, Button, Link, Stack, Typography } from '@mui/material';
import type { PriceItemProps } from '../routes/prices';


export const PriceItem = ({ title, subtitle, info, cost, actionItem }: PriceItemProps) => {
    return (
        <Stack boxShadow={({ shadows }) => shadows[8]} border={4} borderRadius={10} borderColor='#000' pb={2}>
            <Box textAlign='center' borderBottom='4px solid #000' p={2} sx={{
                background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                borderTopLeftRadius: '35px', borderTopRightRadius: '35px'
            }}>
                <Typography
                    fontFamily='Chau Philomene One'
                    color='black'
                    variant='h5'>
                    {title}
                </Typography>
                <Typography
                    fontFamily='Chau Philomene One'
                    color='black'
                    variant='h6'
                    whiteSpace='pre-line'>
                    {subtitle}
                </Typography>
                <Typography color='black' variant='h6'>{cost}</Typography>
            </Box>
            <Stack my={2} px={4} spacing={2} alignItems='center'>
                <Typography
                    color='black'
                    variant='body1'
                    textAlign='center'
                    whiteSpace='pre-line'>
                    {info}
                </Typography>
                {actionItem &&
                    <Link target='_blank' href={actionItem.actionUrl}>
                        <Button
                            disableRipple
                            sx={{
                                color: 'white',
                                width: '200px',
                                height: '50px',
                                borderRadius: 10,
                                fontWeight: 'bold',
                                background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                            }}
                            variant='contained'>
                            {actionItem.actionText}
                        </Button>
                    </Link>
                }
            </Stack>
        </Stack>
    );
}