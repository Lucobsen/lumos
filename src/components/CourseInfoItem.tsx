import { ChevronRight } from "@mui/icons-material";
import { useMediaQuery, ListItem, SvgIcon, Typography, useTheme, Collapse, Stack } from "@mui/material";
import { useState } from "react";
import type { Course } from "./CourseItem";

type CourseInfoItemProps = {
    course: Course;
};

export const CourseInfoItem = ({ course }: CourseInfoItemProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    const [isOpen, setIsOpen] = useState(false);

    return (
        <ListItem disableGutters disablePadding>
            <Stack>
                <Stack
                    direction='row'
                    alignItems='center'
                    onClick={() => setIsOpen(prev => !prev)}
                    sx={{ cursor: 'pointer' }}>
                    <SvgIcon fontSize={isSmallScreen ? 'small' : 'medium'} sx={{ transform: isOpen ? 'rotate(90deg)' : 'none' }} color='secondary' inheritViewBox>
                        <ChevronRight />
                    </SvgIcon>
                    <Typography
                        color='secondary'
                        variant={isSmallScreen ? 'h6' : 'h4'}>
                        {course.title}
                    </Typography>
                </Stack>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Stack pl={5}>
                        {course.info.map(info =>
                            <Typography
                                color='secondary'
                                variant='body1'>
                                {info}
                            </Typography>
                        )}
                    </Stack>
                </Collapse>
            </Stack>
        </ListItem>
    );
};