import { Grid, Box, Typography, List } from "@mui/material";
import { CourseInfoItem } from "./CourseInfoItem";

export type Course = { title: string; info: string[] };

const courses: Course[] = [
    {
        title: 'Beginners',
        info: [
            '- Learn the basics of salsa L.A. style.',
            '- Leading, following, right turns & more.',
            '- Learn to get close & cross-body leads.'
        ]
    },
    {
        title: 'Improvers',
        info: [
            '- Turns, turn and more turns.',
            '- Learn the left turn & travelling turns.',
            '- Time to tackle the final bits of fundamental technique.'
        ]
    },
    {
        title: 'Intermediate',
        info: [
            '- Become the best dancer you can be.',
            '- Here we will start to push you & extract your full potential.',
            '- Learn how to apply all the basics you have learnt in more complex patterns.'
        ]
    },
    {
        title: 'Footwork',
        info: [
            '- Time to go solo.',
            '- Work on developing some fancy footwork.',
            '- Learn to move your body in the best way.'
        ]
    }
];

type CoureItemProps = {
    title: string;
    backgroundImage: string;
};

export const CourseItem = ({ title, backgroundImage }: CoureItemProps) => {
    return (
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }} sx={{ position: 'relative', display: 'inline-block' }}>
            <Box
                borderRadius={2}
                position='relative'
                boxShadow={({ shadows }) => shadows[8]}>
                <Box
                    component="img"
                    loading='eager'
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'block',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    }}
                    alt={`${title} lessons`}
                    src={backgroundImage}
                />
                <Typography
                    color='secondary'
                    variant='h2'
                    sx={{
                        position: 'absolute',
                        top: '150px',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textShadow: '0px 1px 1px #000'
                    }}>
                    {title}
                </Typography>
                <List sx={{
                    px: 1, bgcolor: '#000',
                    borderBottomRightRadius: 8,
                    borderBottomLeftRadius: 8
                }} >
                    {courses.map(course =>
                        <CourseInfoItem course={course} />
                    )}
                </List>
            </Box>
        </Grid >
    );
};