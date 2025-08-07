import { Grid, Box, Typography, useMediaQuery, useTheme, Stack, Button, Tab, Tabs } from "@mui/material";
import { CourseInfoItem } from "./CourseInfoItem";
import type { CourseItemProps } from "../routes/courses";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const CourseItem = ({ title, backgroundImage, classes, swapSides }: CourseItemProps & { swapSides: boolean }) => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isMediumScreen = useMediaQuery(breakpoints.down('md'));
    const isSmallScreen = useMediaQuery(breakpoints.down('sm'));
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    const [selectedButton, setSelectedButton] = useState('dates');


    const direction = swapSides ? 'row-reverse' : 'row';

    return (
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Stack direction={isSmallScreen ? 'column' : direction} spacing={2}>
                <Box
                    component="img"
                    loading='eager'
                    sx={{
                        border: '4px solid black',
                        borderRadius: 10,
                        width: isSmallScreen ? '100%' : '40%',
                        boxShadow: ({ shadows }) => shadows[8],
                        alignSelf: 'flex-start'
                    }}
                    alt={`${title} lessons`}
                    src={backgroundImage}
                />
                {classes ?
                    <Stack height='100%' justifyContent='center' alignItems='flex-start' width={isSmallScreen ? '100%' : '60%'}>
                        <Typography
                            alignSelf='center'
                            color='black'
                            variant={isExtraSmallScreen ? 'h4' : 'h2'}
                            fontFamily='Chau Philomene One'>
                            {title}
                        </Typography>

                        <Box width='100%' mb={1}>
                            <Tabs value={selectedButton} onChange={(_, value) => setSelectedButton(value)} >
                                <Tab
                                    disableRipple
                                    disableFocusRipple
                                    disableTouchRipple
                                    label={t('courses.dates')}
                                    value='dates'
                                    sx={{
                                        width: '50%',
                                        '&.MuiButtonBase-root': {
                                            maxWidth: 'unset',
                                            color: "#000"
                                        }
                                    }}
                                />
                                <Tab
                                    disableRipple
                                    disableFocusRipple
                                    disableTouchRipple
                                    label={t('courses.levelInfo')}
                                    value='info'
                                    sx={{
                                        width: '50%',
                                        '&.MuiButtonBase-root': {
                                            maxWidth: 'unset',
                                            color: "#000"
                                        }
                                    }}
                                />
                            </Tabs>
                        </Box>

                        <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 2 : 0}>
                            <Grid container spacing={2} px={2}>
                                {classes.map(classItem => {
                                    return (selectedButton === 'dates' ? <CourseInfoItem {...classItem} /> :
                                        <Grid size={12}>
                                            <Typography
                                                color='black'
                                                variant={isExtraSmallScreen ? 'h6' : 'h4'}
                                                sx={{ textDecoration: 'underline' }}>
                                                {classItem.title}
                                            </Typography>
                                            <Stack>
                                                <Typography
                                                    whiteSpace='pre-line'
                                                    variant='body1'
                                                    color="#000">
                                                    {t(`courses.info.${title.toLowerCase()}.${classItem.title.toLowerCase()}`)}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    );
                                })}
                            </Grid>

                            <Stack
                                direction={isSmallScreen ? 'row' : 'column'}
                                spacing={2}
                                justifyContent={isSmallScreen ? 'center' : 'flex-start'}
                                alignItems='center'>
                                <Link to="/schedule">
                                    <Button
                                        disableRipple
                                        sx={{
                                            color: 'white',
                                            width: isMediumScreen ? '150px' : '200px',
                                            height: '50px',
                                            borderRadius: 10,
                                            fontWeight: 'bold',
                                            background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                                        }}
                                        variant='contained'>
                                        {t("navItems.schedule")}
                                    </Button>
                                </Link>
                                <Link to="/prices">
                                    <Button
                                        disableRipple
                                        sx={{
                                            color: 'white',
                                            width: isMediumScreen ? '150px' : '200px',
                                            height: '50px',
                                            borderRadius: 10,
                                            fontWeight: 'bold',
                                            background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                                        }}
                                        variant='contained'>
                                        {t("navItems.prices")}
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack> :
                    <Stack width='100%' alignItems='center' justifyContent='center'
                        textAlign='center'>
                        <Typography
                            color='black'
                            fontFamily='Chau Philomene One'
                            variant={isSmallScreen ? 'h4' : 'h2'}>
                            {title}
                        </Typography>
                        <Typography
                            color='black'
                            variant={isSmallScreen ? 'h6' : 'h4'}>
                            Coming Soon...
                        </Typography>
                    </Stack>
                }
            </Stack>
        </Grid >
    );
};