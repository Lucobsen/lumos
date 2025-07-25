import { Grid, Box, Stack, Typography, List, ListItem, useMediaQuery, useTheme } from "@mui/material";

const courses = [
    'Beginners', 'Improvers', 'Intermediate', 'Footwork'
];

type CoureItemProps = {
    title: string;
    backgroundImage: string;
};

export const CourseItem = ({ title, backgroundImage }: CoureItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <Grid size={{ lg: 6 }} sx={{ position: 'relative', display: 'inline-block' }}>
            <Box
                component="img"
                loading='lazy'
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'block',
                    borderRadius: 2,
                    boxShadow: ({ shadows }) => shadows[8]
                }}
                alt={`${title} lessons`}
                src={backgroundImage}
            />
            <Stack
                p={1}
                alignItems='center'
                justifyContent='center'
                sx={{
                    position: 'absolute',
                    background: 'transparent',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    textAlign: 'center'
                }}>
                <Typography
                    sx={{
                        WebkitTextStrokeWidth: 0.5,
                        WebkitTextStrokeColor: '#000'
                    }}
                    color='primary'
                    variant={isSmallScreen ? 'h5' : 'h3'}>
                    {title}
                </Typography>
                <List disablePadding>
                    {courses.map(course =>
                        <ListItem disableGutters disablePadding>
                            <Typography
                                sx={{
                                    WebkitTextStrokeWidth: 0.5,
                                    WebkitTextStrokeColor: '#000'
                                }}
                                color='primary'
                                variant={isSmallScreen ? 'h6' : 'h4'}>
                                {course}
                            </Typography>
                        </ListItem>
                    )}
                </List>
            </Stack>
        </Grid>);
};