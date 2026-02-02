import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { BrutalistCard } from "../components/BrutalistCard";

const Container = styled("div")({
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto"
});

export default function Experience() {
    return (
        <Container>
            <Box id="experience" sx={{ mt: 6, mb: 6 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        mb: 6,
                        textShadow: '4px 4px 0px #FF6B35',
                        display: 'inline-block',
                        borderBottom: '6px solid #0A0A0A',
                        pb: 1,
                    }}
                >
                    EXPERIENCE
                </Typography>

                {/* Paycom — Software Developer IV */}
                <BrutalistCard accentcolor="#00FF94" accentposition="left" sx={{ mb: 4, textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                        Software Developer IV — Paycom
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: 600 }}>
                        Feb 2023 – Nov 2025
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Built near real-time update systems for Paycom's Mission Control Indicators,
                            serving 3,000+ daily users and processing tens of thousands of daily requests
                            using RabbitMQ, JavaScript, PHP, and WebSockets.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Developed a React + Redux chatbot UI integrated with Paycom's internal LLM,
                            collaborating closely with the Data Science team to connect and refine model data flows.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Led architectural design for a customizable dashboard system utilizing Highcharts,
                            enabling dynamic user-built analytics dashboards.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Directed the modernization of legacy MVC pages into Slim and Laravel–based frameworks,
                            improving performance, structure, and long-term maintainability.
                        </Typography>
                    </Box>
                </BrutalistCard>

                {/* Paycom — Software Developer III */}
                <BrutalistCard accentcolor="#FF6B35" accentposition="left" sx={{ mb: 4, textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
                        Software Developer III — Paycom
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Mentored junior developers in API design, debugging strategies,
                            React development, and backend business logic patterns.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Performed high-quality code reviews to ensure consistency, clarity,
                            and adherence to engineering best practices.
                        </Typography>
                    </Box>
                </BrutalistCard>

                {/* Paycom — Software Developer II */}
                <BrutalistCard accentcolor="#FFD60A" accentposition="left" sx={{ mb: 4, textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
                        Software Developer II — Paycom
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Delivered production features across React, PHP, and SQL with a focus on clarity,
                            user experience, and performance.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Wrote unit tests using PHP PEST to ensure reliability and reduce regression.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Refactored high-traffic SQL queries to significantly reduce execution time
                            and improve application responsiveness.
                        </Typography>
                    </Box>
                </BrutalistCard>

                {/* CG Infinity */}
                <BrutalistCard accentcolor="#FF006E" accentposition="left" sx={{ mb: 4, textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                        Software Developer — CG Infinity
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: 600 }}>
                        Oct 2021 – Feb 2023
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Contracted to Brinks Home to design and develop an ASP.NET Core API
                            for receiving Medallia survey results and storing them in SQL Server.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                            • Automated survey intake, reducing manual processing and accelerating customer feedback workflows.
                        </Typography>
                    </Box>
                </BrutalistCard>
            </Box>
        </Container>
    );
}
