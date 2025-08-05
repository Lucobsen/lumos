import { Grid, Box, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { CourseInfoItem } from "./CourseInfoItem";
import type { CourseItemProps } from "../routes/courses";

export const CourseItem = ({ title, backgroundImage, classes, swapSides }: CourseItemProps & { swapSides: boolean }) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    const direction = swapSides ? 'row-reverse' : 'row';

    return (
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Stack direction={isSmallScreen ? 'column' : direction}>
                <Box
                    component="img"
                    loading='eager'
                    sx={{
                        width: isSmallScreen ? '100%' : '70%',
                    }}
                    alt={`${title} lessons`}
                    src={backgroundImage}
                />
                <Stack justifyContent='center' alignItems='flex-start' width={isSmallScreen ? '100%' : '30%'} py={2}>
                    {classes ?
                        <>
                            <Typography
                                alignSelf='center'
                                color='black'
                                variant={isExtraSmallScreen ? 'h4' : 'h2'}
                                fontFamily='Chau Philomene One'>
                                {title}
                            </Typography>
                            <Grid container spacing={2} px={2}>
                                {classes.map(classItem =>
                                    <CourseInfoItem {...classItem} />
                                )}
                            </Grid>
                        </> :
                        <>
                            <Typography
                                alignSelf='center'
                                textAlign='center'
                                color='black'
                                fontFamily='Chau Philomene One'
                                variant={isSmallScreen ? 'h4' : 'h2'}>
                                {title}
                            </Typography>
                            <Typography
                                alignSelf='center'
                                color='black'
                                variant={isSmallScreen ? 'h6' : 'h4'}>
                                Coming Soon...
                            </Typography>
                        </>
                    }
                </Stack>
            </Stack>
        </Grid >
    );
};