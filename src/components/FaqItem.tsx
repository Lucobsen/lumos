import { ChevronRight, KeyboardArrowDown } from "@mui/icons-material";
import { ListItem, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FaqItemProps = {
    question: string;
};

export const FaqItem = ({ question }: FaqItemProps) => {
    const { t } = useTranslation();
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    const [isOpen, setIsOpen] = useState(false);

    return (
        <ListItem onClick={() => setIsOpen(prev => !prev)}>
            <Stack>
                <Stack direction='row' spacing={1} alignItems='flex-start'>
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
                        variant={isExtraSmallScreen ? 'body1' : 'h6'}>
                        {t(question)}
                    </Typography>
                </Stack>
                {isOpen &&
                    <Typography
                        pl={5}
                        color='black'
                        variant={isExtraSmallScreen ? 'caption' : 'body1'}>
                        Blahahahahahhahaha
                    </Typography>
                }
            </Stack>
        </ListItem >
    );
};
