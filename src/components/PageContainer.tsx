import { Container, useMediaQuery, useTheme } from "@mui/material";

type CustomPadding = {
    pt: number;
    pr: number;
    pb: number;
    pl: number;
};

type PageContainerProps = { children: React.ReactNode, disableBorders?: boolean, customPadding?: CustomPadding };

export const PageContainer = ({ children, disableBorders = false, customPadding = { pt: 4, pr: 4, pb: 4, pl: 4 } }: PageContainerProps) => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down('xs'));

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                p: ({ spacing }) => disableBorders ? spacing(0) : spacing(customPadding.pt, customPadding.pr, customPadding.pb, customPadding.pl),
                mt: ({ spacing }) => spacing(isSmallScreen ? 10 : 12.5),
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '80vh'
            }}
        >
            {children}
        </Container>
    );
};