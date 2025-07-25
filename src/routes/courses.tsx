import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { CourseItem } from '../components/CourseItem';

const courses = [
    {
        title: 'Salsa',
        backgroundImage: "salsa-1.jpg"
    },
    {
        title: 'Bachata',
        backgroundImage: "bachata-1.jpg"
    },
    {
        title: 'Reggaeton',
        backgroundImage: "bachata-2.jpg"
    }
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
                {courses.map(({ title, backgroundImage }) => <CourseItem title={title} backgroundImage={backgroundImage} />)}
            </Grid>
        </PageContainer>
    );
}

export const Route = createFileRoute('/courses')({
    component: Courses,
})