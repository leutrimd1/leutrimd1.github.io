import styled from "@emotion/styled"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material"
import todoGif from '/Todo-list-gif-demo.gif';
import webRTCGif from '/WebRTC-Chat.gif';

const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "1rem" 
});


const ProjectCard = ({ image, chips, description, repoLink, demoLink }: {
    image: any,
    chips: Array<string>,
    description: string,
    repoLink: string,
    demoLink: string
}) => {
    return (
        <Card id="projects">
            <CardMedia
                component={"img"}
                image={image} />
            <CardContent>
                <Typography sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {chips.map((chip: string, index: number) => (
                        <Chip key={index} label={chip} />
                    ))}
                </Box>
            </CardContent>
            <CardActions>
                <Button href={repoLink} target="_blank" >
                    Go to Repo
                </Button>
                <Button href={demoLink} target="_blank" >
                    Go to live demo
                </Button>
            </CardActions>
        </Card>
    );
}

const todoAppDescription = "My personal to-do list app. I host the Nodejs API server at home and have a DNS CNAME record that points to the github pages deployment of the frontend. The NodeJs server is visable at https://github.com/LeutrimD1/todo-server";
const todoAppChips = ["Kubernetes", "React/Redux", "NodeJs API Server"];
const todoAppRepoLink = "https://github.com/LeutrimD1/todo-page";
const todoAppDemoLink = "https://todos.leutrimdema.com";

const webRTCChips = ["React Native", "WebRTC", "Fleck C# web socket signaling server"];
const webRTCRepoLink = "https://github.com/LeutrimD1/webrtc-client";
const webRTCDemoLink = "";

export default function Projects() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ProjectCard
                        image={todoGif}
                        chips={todoAppChips}
                        description={todoAppDescription}
                        repoLink={todoAppRepoLink}
                        demoLink={todoAppDemoLink}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ProjectCard
                        image={webRTCGif}
                        chips={webRTCChips}
                        description={"WIP --- \n a chat app using webRTC to connect peers directly after discovery. Planning to host the signaling server in my k3s cluster and have github pages server the react native dist at chat.leutrimdema.com... currently does not have a demo link"}
                        repoLink={webRTCRepoLink}
                        demoLink={webRTCDemoLink}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}