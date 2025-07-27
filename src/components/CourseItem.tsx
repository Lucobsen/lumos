import { Grid, Box, Typography, List, useMediaQuery, useTheme } from "@mui/material";
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
                <Box
                    component="img"
                    loading='eager'
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'block',
                        borderTopLeftRadius: 35,
                        borderTopRightRadius: 35,
                        borderBottom: '4px solid #000'
                    }}
                    alt={`${title} lessons`}
                    src={backgroundImage}
                />
                <Typography
                    color='secondary'
                    variant={isSmallScreen ? 'h3' : 'h2'}
                    bgcolor='#fff'
                    borderRadius={6}
                    border='4px solid #000'
                    px={2}
                    py={1}
                    sx={{
                        position: 'absolute',
                        top: isSmallScreen ? '120px' : '180px',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textShadow: '0px 1px 1px #000'
                    }}>
                    {title}
                </Typography>
                <List sx={{
                    px: 4,
                    my: 1,
                    bgcolor: '#fff',
                    borderBottomRightRadius: 35,
                    borderBottomLeftRadius: 35
                }} >
                    {courses.map(course =>
                        <CourseInfoItem course={course} />
                    )}
                </List>
            </Box>
        </Grid >
    );
};