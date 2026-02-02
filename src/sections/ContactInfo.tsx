import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
import { Grid, Link, Typography, Box } from "@mui/material";
import { BrutalistCard } from "../components/BrutalistCard";

const ContactInfoCard = ({ icon, title, link, linkValue, bgcolor }: { icon: any, title: string, link: string, linkValue: string, bgcolor: string }) => {
    return (
        <BrutalistCard bgcolor={bgcolor} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Box sx={{ fontSize: '40px', color: '#0A0A0A' }}>
                    {icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0A0A0A' }}>
                    {title}
                </Typography>
                <Link
                    href={linkValue}
                    variant="body1"
                    sx={{
                        color: '#0A0A0A',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        textDecorationThickness: '3px',
                        '&:hover': {
                            textDecorationThickness: '5px',
                        }
                    }}
                >
                    {link}
                </Link>
            </Box>
        </BrutalistCard>
    );
}

export default function ContactInfo() {
    return (
        <Grid id="contact-info" container justifyContent="center" spacing={4} sx={{ padding: '40px 0px' }}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <ContactInfoCard
                    icon={<GitHub />}
                    title="GitHub"
                    link="LeutrimD1"
                    linkValue="https://github.com/LeutrimD1"
                    bgcolor="#00FF94"
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <ContactInfoCard
                    icon={<LinkedIn />}
                    title="LinkedIn"
                    link="Leutrim Dema"
                    linkValue="https://www.linkedin.com/in/leutrim-dema-82bb78220"
                    bgcolor="#FF6B35"
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <ContactInfoCard
                    icon={<Email />}
                    title="Email"
                    link="LeutrimD1@gmail.com"
                    linkValue="mailto:leutrimD1@gmail.com"
                    bgcolor="#FFD60A"
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <ContactInfoCard
                    icon={<Phone />}
                    title="Phone"
                    link="682-558-9208"
                    linkValue="tel:+6825589208"
                    bgcolor="#FF006E"
                />
            </Grid>
        </Grid>
    );
}