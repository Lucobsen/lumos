import { Grid, Box, Typography, List, useMediaQuery, useTheme, Skeleton } from "@mui/material";
import { CourseInfoItem } from "./CourseInfoItem";
import type { CourseItemProps } from "../routes/courses";
import { Suspense } from "react";

export const CourseItem = ({ title, backgroundImage, classes }: CourseItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }} sx={{ position: 'relative', display: 'inline-block' }}>
            <Box
                borderRadius={10}
                border={4}
                borderColor='#000'
                position='relative'
                boxShadow={({ shadows }) => shadows[8]}>
                <Suspense fallback={<Skeleton height={isSmallScreen ? '206px' : '360px'} width='100%' />}>
                    <Box
                        component="img"
                        loading='eager'
                        sx={{
                            width: '100%',
                            height: isSmallScreen ? '206px' : '360px',
                            display: 'block',
                            borderTopLeftRadius: 35,
                            borderTopRightRadius: 35,
                            borderBottom: '4px solid #000'
                        }}
                        alt={`${title} lessons`}
                        src={backgroundImage}
                    />
                </Suspense>
                <Typography
                    textAlign='center'
                    color='black'
                    variant={isSmallScreen ? 'h4' : 'h2'}
                    pt={2}
                    px={2}>
                    {title}
                </Typography>
                {classes ?
                    <List sx={{
                        px: 4,
                        mb: 1,
                        bgcolor: '#fff',
                        borderBottomRightRadius: 35,
                        borderBottomLeftRadius: 35
                    }} >
                        {classes.map(classItem =>
                            <CourseInfoItem {...classItem} />
                        )}
                    </List> :
                    <Box display='flex' px={4} mb={4} mt={1} justifyContent='center'>
                        <Typography
                            color='black'
                            variant={isSmallScreen ? 'h4' : "h3"}>
                            Coming Soon...
                        </Typography>
                    </Box>
                }
            </Box>
        </Grid >
    );
};