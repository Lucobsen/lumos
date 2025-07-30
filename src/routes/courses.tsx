import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { CourseItem } from '../components/CourseItem';

export type Class = { title: string; info: string[] };

export type CourseItemProps = {
    title: string;
    backgroundImage: string;
    classes?: Class[]
};

const courses: CourseItemProps[] = [
    {
        title: 'Salsa',
        backgroundImage: "salsa-1.jpg",
        classes: [
            {
                title: 'Beginners',
                info: [
                    '- Mondays at Veemhuis',
                    '- Wednesdays at Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    '- Mondays at Veemhuis',
                    '- Wednesdays at Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    '- Mondays at Veemhuis',
                    '- Wednesdays at Kompaszaal'
                ]
            },
        ]
    },
    {
        title: 'Bachata',
        backgroundImage: "bachata-1.jpg",
        classes: [
            {
                title: 'Beginners',
                info: [
                    '- Tuesdays at Veemhuis',
                    '- Wednesdays at Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    '- Tuesdays at Veemhuis',
                    '- Wednesdays at Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    '- Tuesdays at Veemhuis'
                ]
            },
            {
                title: 'Footwork',
                info: [
                    '- Wednesdays at Kompaszaal'
                ]
            }
        ]
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
                color='black'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                Have a look at our classes!
            </Typography>

            <Grid container spacing={2} mt={2}>
                {courses.map((course) =>
                    <CourseItem {...course} />
                )}
            </Grid>
        </PageContainer>
    );
}

export const Route = createFileRoute('/courses')({
    component: Courses,
})