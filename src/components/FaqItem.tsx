import { ChevronRight, KeyboardArrowDown } from "@mui/icons-material";
import { Collapse, ListItem, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type FaqItemProps = {
    question: string;
    answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    const [isOpen, setIsOpen] = useState(false);

    return (
        <ListItem onClick={() => setIsOpen(prev => !prev)} sx={{ pb: isExtraSmallScreen ? 2 : 5 }}>
            <Stack width='100%'>
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    justifyContent={isExtraSmallScreen ? 'flex-start' : 'center'}
                    sx={{ cursor: 'pointer' }}>
                    <SvgIcon
                        fontSize={isExtraSmallScreen ? 'small' : 'medium'}
                        sx={{
                            color: '#000',
                            background: ({ palette }) => `linear-gradient(${palette.secondary.main}, ${palette.primary.main})`,
                            border: '2px solid black',
                            borderRadius: 2
                        }}>
                        {isOpen ? <KeyboardArrowDown /> : <ChevronRight />}
                    </SvgIcon>
                    <Typography
                        color='black'
                        variant={isExtraSmallScreen ? 'h6' : 'h5'}>
                        {t(question)}
                    </Typography>
                </Stack>
                <Collapse in={isOpen}>
                    <Typography
                        mt={1}
                        color='black'
                        variant={isExtraSmallScreen ? 'body1' : 'h6'}
                        textAlign='center'>
                        {t(answer)}
                    </Typography>
                </Collapse>
            </Stack>
        </ListItem >
    );
};
