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
                    '- Learn the basics of salsa L.A. style.',
                    '- Leading, following, right turns & more.',
                    '- Learn to get close & cross-body leads.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    '- Turns, turn and more turns.',
                    '- Learn the left turn & travelling turns.',
                    '- Time to tackle the final bits of fundamental technique.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    '- Become the best dancer you can be.',
                    '- Here we will start to push you & extract your full potential.',
                    '- Learn how to apply all the basics you have learnt in more complex patterns.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
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
                    '- Learn the basics of salsa L.A. style.',
                    '- Leading, following, right turns & more.',
                    '- Learn to get close & cross-body leads.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    '- Turns, turn and more turns.',
                    '- Learn the left turn & travelling turns.',
                    '- Time to tackle the final bits of fundamental technique.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    '- Become the best dancer you can be.',
                    '- Here we will start to push you & extract your full potential.',
                    '- Learn how to apply all the basics you have learnt in more complex patterns.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
                ]
            },
            {
                title: 'Footwork',
                info: [
                    '- Time to go solo.',
                    '- Work on developing some fancy footwork.',
                    '- Learn to move your body in the best way.',
                    '- Days: Mondays & Tuesdays',
                    '- Locations: Veemhuis, Kompaszaal'
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
                textAlign='center'
                sx={{ textShadow: ({ palette }) => `0px 2px 2px ${palette.secondary.main}` }}>
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