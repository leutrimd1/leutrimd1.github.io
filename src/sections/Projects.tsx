import styled from "@emotion/styled"
import { Box, Grid, Typography } from "@mui/material"
import { BrutalistCard } from "../components/BrutalistCard"
import { BrutalistButton } from "../components/BrutalistButton"
import { BrutalistChip } from "../components/BrutalistChip"
import todoGif from '/todo-list-demo.gif';
import webRTCGif from '/WebRTC-Chat.gif';

const Container = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "2rem"
});


const ProjectCard = ({ image, chips, description, repoLink, demoLink, accentColor }: {
    image: any,
    chips: Array<string>,
    description: string,
    repoLink: string,
    demoLink: string,
    accentColor: string
}) => {
    return (
        <BrutalistCard id="projects" accentcolor={accentColor} accentposition="top" sx={{ padding: 0, overflow: 'hidden' }}>
            <Box
                component="img"
                src={image}
                alt="Project demo"
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    border: 'none',
                    borderBottom: '5px solid #0A0A0A'
                }}
            />
            <Box sx={{ padding: '24px' }}>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {chips.map((chip: string, index: number) => (
                        <BrutalistChip key={index} label={chip} />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <BrutalistButton href={repoLink} target="_blank" color="primary">
                        REPO →
                    </BrutalistButton>
                    <BrutalistButton href={demoLink} target="_blank" color="secondary">
                        LIVE DEMO →
                    </BrutalistButton>
                </Box>
            </Box>
        </BrutalistCard>
    );
}

const todoAppDescription = "My personal to-do list app. I host the Nodejs API server at home and have a DNS CNAME record that points to the github pages deployment of the frontend. The NodeJs server is visable at https://github.com/LeutrimD1/todo-server";
const todoAppChips = ["Kubernetes", "React/Redux", "NodeJs API Server"];
const todoAppRepoLink = "https://github.com/LeutrimD1/todo-page";
const todoAppDemoLink = "https://todos.leutrimdema.com";

const webRTCDesciption = "A chat app using webRTC to connect peers directly after discovery which is done via a signaling server that I host on my k3s cluster. I use GitHub pages to serve the client to users.";
const webRTCChips = ["React Native", "WebRTC", "Fleck C# web socket signaling server"];
const webRTCRepoLink = "https://github.com/LeutrimD1/webrtc-client";
const webRTCDemoLink = "https://webrtc-client.leutrimdema.com";

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
                        accentColor="#00FF94"
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ProjectCard
                        image={webRTCGif}
                        chips={webRTCChips}
                        description={webRTCDesciption}
                        repoLink={webRTCRepoLink}
                        demoLink={webRTCDemoLink}
                        accentColor="#FF6B35"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}