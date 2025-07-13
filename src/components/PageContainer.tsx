import { Container, useMediaQuery, useTheme } from "@mui/material";

type PageContainerProps = { children: React.ReactNode, disableBorders?: boolean };

export const PageContainer = ({ children, disableBorders = false }: PageContainerProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                p: ({ spacing }) => disableBorders ? spacing(0) : isSmallScreen ? spacing(4, 4, 10, 4) : spacing(4, 35),
                m: ({ spacing }) => spacing(isSmallScreen ? 10 : 12.5, 0, 0, 0),
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {children}
        </Container>);
};