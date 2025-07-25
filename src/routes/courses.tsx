import { Box, Grid, List, ListItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

const courses = [
    'Beginners', 'Improvers', 'Intermediate', 'Footwork'
];

const Courses = () => {
    useEffect(() => { document.title = 'Lumos - Courses'; }, []);

    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <PageContainer>
            <Typography
                sx={{
                    WebkitTextStrokeWidth: isSmallScreen ? 0.5 : 1,
                    WebkitTextStrokeColor: '#000'
                }} color='primary' variant={isSmallScreen ? 'h5' : 'h3'} textAlign='center'>Learn the Lumos Latin way!</Typography>

            <Grid container spacing={2} mt={2}>
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
                        alt="Salsa lessons"
                        src="salsa-1.jpg"
                    />
                    <Stack alignItems='center' justifyContent='center'
                        sx={{ position: 'absolute', background: 'transparent', left: 0, right: 0, bottom: 0, height: '100%', textAlign: 'center' }}>
                        <Typography sx={{
                            WebkitTextStrokeWidth: 0.5,
                            WebkitTextStrokeColor: '#000'
                        }} color='primary' variant={isSmallScreen ? 'h5' : 'h3'}>Salsa</Typography>
                        <List>
                            {courses.map(course => <ListItem>
                                <Typography sx={{
                                    WebkitTextStrokeWidth: 0.5,
                                    WebkitTextStrokeColor: '#000'
                                }} color='primary' variant={isSmallScreen ? 'h6' : 'h4'}>{course}</Typography>
                            </ListItem>)}
                        </List>
                    </Stack>
                </Grid>

                <Grid size={{ lg: 6 }} sx={{ position: 'relative', display: 'inline-block' }}>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'block',
                            borderRadius: 2,
                            boxShadow: ({ shadows }) => shadows[8]
                        }}
                        alt="Salsa lessons"
                        src="bachata-1.jpg"
                    />
                    <Stack alignItems='center' justifyContent='center' sx={{ position: 'absolute', background: 'transparent', left: 0, right: 0, bottom: 0, height: '100%', textAlign: 'center' }}>
                        <Typography sx={{
                            WebkitTextStrokeWidth: 0.5,
                            WebkitTextStrokeColor: '#000'
                        }} color='primary' variant={isSmallScreen ? 'h5' : 'h3'}>Bachata</Typography>
                        <List>
                            {courses.map(course => <ListItem>
                                <Typography sx={{
                                    WebkitTextStrokeWidth: 0.5,
                                    WebkitTextStrokeColor: '#000'
                                }} color='primary' variant={isSmallScreen ? 'h6' : 'h4'}>{course}</Typography>
                            </ListItem>)}
                        </List>
                    </Stack>
                </Grid>

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
                        alt="Salsa lessons"
                        src="bachata-2.jpg"
                    />
                    <Stack alignItems='center' justifyContent='center' sx={{ position: 'absolute', background: 'transparent', left: 0, right: 0, bottom: 0, height: '100%', textAlign: 'center' }}>
                        <Typography sx={{
                            WebkitTextStrokeWidth: 0.5,
                            WebkitTextStrokeColor: '#000'
                        }} color='primary' variant={isSmallScreen ? 'h5' : 'h3'}>Reggaeton</Typography>
                        <List>
                            {courses.map(course => <ListItem>
                                <Typography sx={{
                                    WebkitTextStrokeWidth: 0.5,
                                    WebkitTextStrokeColor: '#000'
                                }} color='primary' variant={isSmallScreen ? 'h6' : 'h4'}>{course}</Typography>
                            </ListItem>)}
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export const Route = createFileRoute('/courses')({
    component: Courses,
})