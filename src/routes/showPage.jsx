import { Box, Grid, Paper, Typography } from "@mui/material";
import './showPage.css'
import { useTranslation } from 'react-i18next';

// 展示页
function ShowPage() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Box
                xs="auto"
                justifyContent="center"
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    flexGrow: 1,
                    '& > :not(style)': {
                        m: 1,
                        height: 600,
                        width: 800,
                    },
                }}>
                <Paper
                    elevation={12}
                    className="banner"
                >
                    <Typography
                        className="h1-shadow"
                        variant="h1"
                        sx={{
                            fontWeight: "blod",
                            padding: 3,
                            lineHeight: 1.0,
                        }}
                    >
                        {t('欢迎来到')}
                    </Typography>
                    <Typography
                        className="h1-shadow"
                        variant="h1"
                        display="flex"
                        justifyContent="center"
                        sx={{
                            fontWeight: 10,
                            color: "white",
                            lineHeight: 2.5,
                        }}>
                        {t('数学魔法卡')}
                    </Typography>
                    <Typography
                        className="h1-shadow"
                        variant="h1"
                        display="flex"
                        justifyContent="flex-end"
                        sx={{
                            padding: 2,
                            fontWeight: "blod",
                            lineHeight: 2.5,
                        }}>
                        {t('的世界!')}
                    </Typography>
                </Paper>
            </Box>
        </>
    );
}

export default ShowPage;