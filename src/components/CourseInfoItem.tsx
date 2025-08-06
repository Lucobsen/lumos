import { useMediaQuery, Typography, useTheme, Stack, Grid } from "@mui/material";
import type { Class } from "../routes/courses";

export const CourseInfoItem = ({ title, dates }: Class) => {
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Grid size={{ xs: 6, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Typography
                color='black'
                variant={isExtraSmallScreen ? 'h6' : 'h4'}
                sx={{ textDecoration: 'underline' }}>
                {title}
            </Typography>
            <Stack>
                {dates.map(dates =>
                    <Typography
                        color='black'
                        variant={isExtraSmallScreen ? 'body1' : 'h6'}>
                        {dates}
                    </Typography>
                )}
            </Stack>
        </Grid>
    );
};