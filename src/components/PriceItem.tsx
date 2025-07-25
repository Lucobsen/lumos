import { Box, List, ListItem, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

type PriceItemProps = { title: string, infoItems: string[], cost: string };

export const PriceItem = ({ title, infoItems, cost }: PriceItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <Stack boxShadow={({ shadows }) => shadows[8]} border={2} borderRadius={4} borderColor='#000' height='fit-content' pb={2}>
            <Box textAlign='center' bgcolor='primary.light' borderBottom='2px solid #000' p={2} sx={{ borderTopLeftRadius: '14px', borderTopRightRadius: '14px' }}>
                <Typography color='black' variant={isSmallScreen ? 'h5' : 'h3'}>{title}</Typography>
                <Typography color='black' variant={isSmallScreen ? 'h6' : 'h4'}>{cost}</Typography>
            </Box>
            <List>
                {infoItems.map(info =>
                    <ListItem>
                        <Stack direction='row' spacing={1} alignItems='center'>
                            <SvgIcon inheritViewBox sx={{ color: '#000' }}><HorizontalRuleIcon /></SvgIcon>
                            <Typography color='black' variant={isSmallScreen ? 'body1' : 'h6'}>{info}</Typography>
                        </Stack>
                    </ListItem>
                )}
            </List>
        </Stack>
    );
}