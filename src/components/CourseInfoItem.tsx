import { ChevronRight, KeyboardArrowDown } from "@mui/icons-material";
import { useMediaQuery, ListItem, SvgIcon, Typography, useTheme, Collapse, Stack } from "@mui/material";
import { useState } from "react";
import type { Class } from "../routes/courses";

export const CourseInfoItem = ({ title, info }: Class) => {
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
                    sx={{ cursor: 'pointer' }}
                    spacing={1}>
                    <SvgIcon
                        fontSize={isSmallScreen ? 'small' : 'medium'}
                        sx={{
                            borderRadius: 1,
                            border: '2px solid #000',
                            background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                            color: '#000',
                            boxShadow: ({ shadows }) => shadows[2]
                        }}
                        inheritViewBox>
                        {isOpen ? <KeyboardArrowDown /> : <ChevronRight />}
                    </SvgIcon>
                    <Typography
                        color='black'
                        variant={isSmallScreen ? 'h6' : 'h4'}>
                        {title}
                    </Typography>
                </Stack>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Stack pl={1}>
                        {info.map(info =>
                            <Typography
                                color='black'
                                variant={isSmallScreen ? 'body1' : 'h6'}>
                                {info}
                            </Typography>
                        )}
                    </Stack>
                </Collapse>
            </Stack>
        </ListItem>
    );
};