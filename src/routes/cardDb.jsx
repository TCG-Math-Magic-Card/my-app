import { Grid, Paper } from "@mui/material";

function CardDb() {
    return (
        <>
            <Grid container spacing={2} style={{ height: '90vh', marginTop: '8px' }}>
                <Grid item xs={10}>
                    <Paper elevation={12} style={{ height: '100%' }}>这个纸片会自适应整个屏幕</Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={12} style={{ height: '100%' }}>这个纸片会自适应整个屏幕</Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default CardDb;
