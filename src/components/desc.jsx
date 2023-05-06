import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import QuizIcon from '@mui/icons-material/Quiz';
import { useTranslation } from 'react-i18next';
import './desc.css'

// 描述游戏的
function DescMMC() {
    const { t } = useTranslation();
    return (
        <Grid container spacing={2} width="100%" >
            <Grid
                item
                xs={12}
                justifyContent="center">
                <Paper
                    elevation={12}
                    height="fixed"
                    width="100%"
                    sx={{
                        background: "#567a54",
                        paddingLeft: 0,
                        paddingRight: 0,
                        // border: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item >
                            <QuizIcon sx={{ color: '#6aba7e', fontSize: "400px" }} />
                        </Grid>
                        <Grid item >
                            {/* 这里要处理多排数据的显示 */}
                            <Box width="1200px" m={5}>
                                <Typography className='question' variant="h3">{t("Q: 什么是TCG?")}</Typography>
                                <Typography className='anser' variant="h6">
                                    {t("A: TCG 是 Trading Card Game 的缩写，翻译为“交换卡牌游戏”。这类游戏通常是指玩家使用自己的卡片组合来与其他玩家对抗。每个卡片代表着不同的角色、能力或装备等，可以通过购买卡片包或者与其他玩家交换来获取更多的卡片，从而丰富自己的卡片库并提高在游戏中的实力。知名的 TCG 游戏包括《魔法飞球》（Magic: The Gathering）、《炉石传说》（Hearthstone）、《游戏王》（Yu-Gi-Oh!）等。")}
                                </Typography>
                                <Typography className='question' variant="h3">
                                    {t("Q: 数学魔法卡是一个什么样的游戏？")}
                                </Typography>
                                <Typography className='anser' variant="h6">
                                    {t("A: 数学魔法卡，是一个致力于将纯粹的数学概念融入到桌游中的游戏。当然里面会有魔法的部分，但是我保证核心获胜的机制是数学概念。")}
                                </Typography>
                                <Typography className='question' variant="h3">
                                    {t("Q: 为什么要设计这样的游戏？")}
                                </Typography>
                                <Typography className='anser' variant="h6">
                                    {t("A: 单纯出于好玩。")}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default DescMMC;