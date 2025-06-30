import { Stack, Typography } from "@mui/material";

type LocationItemProps = {
    address: string;
    openingHours: string;
};

export const LocationItem = ({ address, openingHours }: LocationItemProps) => {
    return (
        <Stack p={2} border={2} borderRadius={2} borderColor='secondary.main' direction='row' gap={2} bgcolor='primary.light'>
            <iframe
                width="450"
                height="250"
                frame-border="0"
                style={{ border: 0 }}
                referrer-policy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sAdmiraal+de+Ruijterweg+21,+1057+JT+Amsterdam.!5e0!6i10"
                allowFullScreen>
            </iframe>

            <Stack gap={4} justifyContent='center'>
                <Typography color='secondary' variant='h4'>Address: {address}</Typography>
                <Typography color='secondary' variant='h4'>Opening Hours: {openingHours}</Typography>
            </Stack>
        </Stack>
    )
};
