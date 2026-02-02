import { Grid } from "@mui/material"
import { BrutalistButton } from "../components/BrutalistButton"

export default function QuickNav() {
    return (
        <Grid container justifyContent="center" spacing={3} sx={{ my: 6 }}>
            <Grid size="auto">
                <BrutalistButton href="#projects" color="primary">
                    PROJECTS →
                </BrutalistButton>
            </Grid>
            <Grid size="auto">
                <BrutalistButton href="#experience" color="secondary">
                    EXPERIENCE →
                </BrutalistButton>
            </Grid>
            <Grid size="auto">
                <BrutalistButton href="#contact-info" color="error">
                    CONTACT INFO →
                </BrutalistButton>
            </Grid>
        </Grid>
    );
}