import { List, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FaqItem } from "./FaqItem";

const question = [
    'contact.faq.questionOne',
    'contact.faq.questionTwo',
    'contact.faq.questionThree',
    'contact.faq.questionFour'
];

export const Faq = () => {
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Stack>
            <Typography
                color='black'
                variant={isExtraSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                FAQ
            </Typography>
            <List>
                {question.map(question =>
                    <FaqItem question={question} />
                )}
            </List>
        </Stack>
    );
};
