import { Email, Facebook, Instagram } from "@mui/icons-material";
import { Box, IconButton, Link, Stack, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import type { JSX } from "react";

const TikTok = ({ color = "#000000" }) => {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100%"
            height="100%"
        >
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg>
    );
};

type SocialIconButtonProps = {
    link: string;
    size: number;
    children: JSX.Element;
};

const SocialIconButton = ({ link, size = 24, children }: SocialIconButtonProps) =>
    <Link underline='none' target='_blank' href={link}>
        <IconButton
            disableRipple
            sx={{
                bgcolor: '#000',
                color: ({ palette }) => palette.secondary.main,
                width: size + 10,
                height: size + 10
            }}>
            <SvgIcon inheritViewBox sx={{ width: size, height: size }}>
                {children}
            </SvgIcon>
        </IconButton>
    </Link>;

export const Footer = () => {
    const { breakpoints } = useTheme();
    const isSmallScreen = useMediaQuery(breakpoints.down(1000));

    return (
        <footer>
            <Stack
                position='sticky'
                bottom={0}
                left={0}
                height={isSmallScreen ? 100 : 200}
                width='100%'
                sx={{
                    background: ({ palette }) => `linear-gradient(${palette.primary.main}, ${palette.secondary.main})`,
                }}
                mt={isSmallScreen ? 2 : 20}
            >
                <Box
                    component="img"
                    zIndex={2}
                    position='absolute'
                    bottom={0}
                    left={0}
                    right={0}
                    margin='auto'
                    sx={{
                        height: isSmallScreen ? '150px' : '400px',
                        width: isSmallScreen ? '150px' : '400px',
                    }}
                    alt="Lumos Gem"
                    src="lumos-gem.png"
                />
                <Stack
                    justifyContent='flex-end'
                    alignItems='center'
                    px={isSmallScreen ? 2 : 10}
                    zIndex={3}
                    height='100%'
                    direction='row'
                    spacing={isSmallScreen ? 1 : 2}>
                    <SocialIconButton
                        link='mailto:info@lumoslatin.nl'
                        size={isSmallScreen ? 16 : 24}>
                        <Email />
                    </SocialIconButton>

                    <SocialIconButton
                        link='https://www.instagram.com/lumoslatin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                        size={isSmallScreen ? 16 : 24}>
                        <Instagram />
                    </SocialIconButton>

                    <SocialIconButton
                        link='https://www.tiktok.com/@lumoslatindance?_t=ZG-8yb3rkVzEG0&_r=1'
                        size={isSmallScreen ? 16 : 24}>
                        <TikTok color='inherit' />
                    </SocialIconButton>

                    <SocialIconButton
                        link='https://www.facebook.com/share/1CDP3cBRsB/?mibextid=wwXIfr'
                        size={isSmallScreen ? 16 : 24}>
                        <Facebook />
                    </SocialIconButton>
                </Stack>
            </Stack>
        </footer >);
};