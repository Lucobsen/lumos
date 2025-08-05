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
                    'Mondays 19:00-20:00 | Veem House for Performances',
                    'Wednesdays 19:00-20:00 | De Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    'Mondays 20:15-21:15 | Veem House for Performances',
                    'Wednesdays 20:15-21:15 | De Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    'Mondays 21:15-22:15 | Veem House for Performances',
                    'Wednesdays 21:15-22:15 | De Kompaszaal'
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
                    'Tuesdays 19:00-20:00 | Veem House for Performances',
                    'Wednesdays 20:15-21:15 | De Kompaszaal'
                ]
            },
            {
                title: 'Improvers',
                info: [
                    'Tuesdays 20:15-21:15 | Veem House for Performances',
                    'Wednesdays 19:00-20:00 | De Kompaszaal'
                ]
            },
            {
                title: 'Intermediate',
                info: [
                    'Tuesdays 21:15-22:15 | Veem House for Performances'
                ]
            },
            {
                title: 'Footwork',
                info: [
                    'Wednesdays 21:15-22:15 | De Kompaszaal'
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
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <PageContainer>
            <Typography
                color='black'
                variant={isExtraSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                {t('courses.header')}
            </Typography>

            <Grid container mt={2} rowSpacing={4}>
                {courses.map((course, index) =>
                    <CourseItem {...course} swapSides={index % 2 !== 0} />
                )}
            </Grid>
        </PageContainer>
    );
}

export const Route = createFileRoute('/courses')({
    component: Courses,
})