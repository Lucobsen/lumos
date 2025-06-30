import { Container, useMediaQuery, useTheme } from "@mui/material";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(900));

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                p: ({ spacing }) => isSmallScreen ? spacing(4) : spacing(4, 8),
                m: ({ spacing }) => spacing(isSmallScreen ? 12.5 : 15, 0, 0, 0),
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {children}
        </Container>);
};