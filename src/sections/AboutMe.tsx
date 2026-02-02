import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

const Container = styled("div")({
    textAlign: "center"
});

export default function AboutMe() {
    return (
        <Container>
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        mb: 2,
                        textShadow: '4px 4px 0px #00FF94',
                        display: 'inline-block',
                        borderBottom: '6px solid #0A0A0A',
                        pb: 1,
                    }}
                >
                    ABOUT ME
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 3, fontSize: '1.125rem', lineHeight: 1.7 }}>
                I'm Leutrim — a Full Stack Developer focused on building clean, scalable,
                and user-centric web and mobile applications.
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 3, fontSize: '1.125rem', lineHeight: 1.7 }}>
                I recently worked at Paycom, contributing to mission-critical internal
                CRM system using PHP, React/Redux, C#, WebSockets, RabbitMQ, couchbase, and SQL.
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", fontSize: '1.125rem', lineHeight: 1.7 }}>
                When I'm not outside enjoying nature, I enjoy building personal projects
                that benefit myself and others.
            </Typography>
        </Container>
    );
}
