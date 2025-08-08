import { List, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FaqItem, type FaqItemProps } from "./FaqItem";

const question: FaqItemProps[] = [
    {
        question: 'contact.faq.questionOne',
        answer: 'contact.faq.answerOne',
    },
    {
        question: 'contact.faq.questionTwo',
        answer: 'contact.faq.answerTwo',
    },
    {
        question: 'contact.faq.questionThree',
        answer: 'contact.faq.answerThree',
    },
    {
        question: 'contact.faq.questionFour',
        answer: 'contact.faq.answerFour',
    },
    {
        question: 'contact.faq.questionFive',
        answer: 'contact.faq.answerFive',
    }
];

export const Faq = () => {
    const { breakpoints } = useTheme();
    const isExtraSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Stack width={isExtraSmallScreen ? '100%' : '50%'}>
            <Typography
                color='black'
                variant={isExtraSmallScreen ? 'h5' : 'h3'}
                textAlign='center'>
                FAQ
            </Typography>
            <List>
                {question.map(question =>
                    <FaqItem {...question} />
                )}
            </List>
        </Stack>
    );
};
