import { Button, Link, Stack, Typography } from '@mui/material';
import type { PriceItemProps } from '../routes/prices';
import { useTranslation } from 'react-i18next';


export const PriceItem = ({ title, subtitle, info, cost, actionItem }: PriceItemProps) => {
    const { t } = useTranslation();

    return (
        <Stack
            minHeight={200}
            boxShadow={({ shadows }) => shadows[8]}
            border={4}
            borderRadius={10}
            borderColor='#000'
            height='100%'>
            <Stack
                spacing={2}
                textAlign='center'
                borderBottom='4px solid #000'
                p={2}
                sx={{
                    background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                    borderTopLeftRadius: '35px', borderTopRightRadius: '35px'
                }}>
                <Typography
                    fontFamily='Chau Philomene One'
                    color='black'
                    variant='h5'>
                    {t(title)}
                </Typography>
                <Typography color='black' variant='h4'>{cost}</Typography>
            </Stack>
            <Stack
                my={2}
                px={4}
                spacing={2}
                alignItems='center'
                justifyContent='space-between'
                height='100%'>
                <Stack>
                    <Typography
                        textAlign='center'
                        fontFamily='Chau Philomene One'
                        color='black'
                        variant='h6'
                        whiteSpace='pre-line'>
                        {t(subtitle)}
                    </Typography>
                    <Typography
                        color='black'
                        variant='body1'
                        textAlign='center'
                        whiteSpace='pre-line'>
                        {t(info)}
                    </Typography>
                </Stack>
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
                            {t(actionItem.actionText)}
                        </Button>
                    </Link>
                }
            </Stack>
        </Stack>
    );
}