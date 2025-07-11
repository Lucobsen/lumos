import { Link, Stack, SvgIcon, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { Email, Instagram, PhoneAndroid } from '@mui/icons-material';

const Contact = () => {
    useEffect(() => { document.title = 'Lumos - Contact Us'; }, []);

    return (
        <PageContainer>
            <Typography color='secondary' variant='h4' textAlign='center' mb={2}>Got a question? <br /> We would love to hear from you!</Typography>

            <Stack alignItems='left' p={2} border={2} borderRadius={2} borderColor='secondary.main' direction='column' gap={2} bgcolor='primary.light' maxWidth={500}>
                <Stack direction='row' alignItems='center' gap={2}>
                    <SvgIcon color='secondary' inheritViewBox>
                        <PhoneAndroid />
                    </SvgIcon>
                    <Typography color='secondary' variant='h5'>+31 999 99999 999</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' gap={2}>
                    <SvgIcon color='secondary' inheritViewBox>
                        <Email />
                    </SvgIcon>
                    <Typography color='secondary' variant='h5'>lumoslatin@gmail.nl</Typography>
                </Stack>

                <Stack direction='row' alignItems='center' gap={2}>
                    <SvgIcon color='secondary' inheritViewBox>
                        <Instagram />
                    </SvgIcon>
                    <Link underline='none' target='_blank' href='https://www.instagram.com/lumoslatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                        <Typography color='secondary' variant='h5'>lumoslatin</Typography>
                    </Link>
                </Stack>
            </Stack>
        </PageContainer>
    );
};

export const Route = createFileRoute('/contact')({
    component: Contact,
});