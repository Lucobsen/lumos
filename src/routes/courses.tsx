import { Box, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/PageContainer'
import { useEffect } from 'react';

const Courses = () => {
    useEffect(() => { document.title = 'Lumos - Courses'; }, []);

    return (
        <PageContainer>
            <Typography color='secondary' variant='h3' textAlign='center'>Learn the Lumos Latin way!</Typography>
            <Typography color='secondary' variant='h6' textAlign='center'>At Lumos we offer a wide range of courses to suit all levels and styles.</Typography>

            <Grid container spacing={4} mt={2}>
                <Grid size={{ lg: 4 }} sx={{ position: 'relative', display: 'inline-block' }}>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'block',
                            borderRadius: 2,
                            boxShadow: ({ shadows }) => shadows[8]
                        }}
                        alt="Salsa lessons"
                        src="salsa-1.jpg"
                    />
                    <Stack alignItems='center' justifyContent='center' sx={{ position: 'absolute', background: 'transparent', bottom: '35%', left: 0, right: 0, textAlign: 'center' }}>
                        <Typography color='white' variant='h3'>Salsa</Typography>
                        <List>
                            <ListItem>
                                <Typography color='white' variant='h4'>Absolute Beginners</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Beginners Plus</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Improvers</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Intermediate</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>

                <Grid size={{ lg: 4 }} sx={{ position: 'relative', display: 'inline-block' }}>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'block',
                            borderRadius: 2,
                            boxShadow: ({ shadows }) => shadows[8]
                        }}
                        alt="Salsa lessons"
                        src="bachata-1.jpg"
                    />
                    <Stack alignItems='center' justifyContent='center' sx={{ position: 'absolute', background: 'transparent', bottom: '35%', left: 0, right: 0, textAlign: 'center' }}>
                        <Typography color='white' variant='h3'>Bachata</Typography>
                        <List>
                            <ListItem>
                                <Typography color='white' variant='h4'>Absolute Beginners</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Beginners Plus</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Improvers</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Intermediate</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>

                <Grid size={{ lg: 4 }} sx={{ position: 'relative', display: 'inline-block' }}>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'block',
                            borderRadius: 2,
                            boxShadow: ({ shadows }) => shadows[8]
                        }}
                        alt="Salsa lessons"
                        src="bachata-2.jpg"
                    />
                    <Stack alignItems='center' justifyContent='center' sx={{ position: 'absolute', background: 'transparent', bottom: '35%', left: 0, right: 0, textAlign: 'center' }}>
                        <Typography color='white' variant='h3'>Reggaeton</Typography>
                        <List>
                            <ListItem>
                                <Typography color='white' variant='h4'>Absolute Beginners</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Beginners Plus</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Improvers</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography color='white' variant='h4'>Intermediate</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </PageContainer>
    );
}

export const Route = createFileRoute('/courses')({
    component: Courses,
})