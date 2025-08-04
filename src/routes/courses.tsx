import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';
import { CourseItem } from '../components/CourseItem';
import { useTranslation } from 'react-i18next';

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
                    '19:00-20:00 | Mondays, Veem House for Performances',
                    '19:00-20:00 | Wednesdays, De Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    '20:15-21:15 | Mondays, Veem House for Performances',
                    '20:15-21:15 | Wednesdays, De Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    '21:15-22:15 | Mondays, Veem House for Performances',
                    '21:15-22:15 | Wednesdays, De Kompaszaal'
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
                    '19:00-20:00 | Tuesdays, Veem House for Performances',
                    '20:15-21:15 | Wednesdays, De Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    '20:15-21:15 | Tuesdays, Veem House for Performances',
                    '19:00-20:00 | Wednesdays, De Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    '21:15-22:15 | Tuesdays, Veem House for Performances'
                ]
            },
            {
                title: 'Footwork',
                info: [
                    '21:15-22:15 | Wednesdays, De Kompaszaal'
                ]
            }
        ]
    },
    {
        title: 'Reggaeton',
        backgroundImage: "reggaeton-1.jpg"
    }
];

const Courses = () => {
    useEffect(() => { document.title = 'Lumos - Courses'; }, []);

    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <PageContainer>
            <Typography
                color='black'
                variant={isSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                {t('courses.header')}
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