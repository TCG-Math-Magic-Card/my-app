import { useTranslation } from "react-i18next";
import CardBox from "./card/cardBox";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

// 简单规则的页面
function SimpleRule() {
    const { t } = useTranslation();
    return (
        <>
            <Grid container spacing={2} width="100%" >
                <Grid
                    item
                    xs={12}>
                    <Typography
                        display="flex"
                        justifyContent="center"
                        variant="h1">{t("简易规则")}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <Typography
                        display="flex"
                        justifyContent="center"
                        variant="h2">{t("值卡")}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    justifyContent="center">
                    <Paper
                        elevation={12}
                        height="fixed"
                        width="100%"
                        sx={{
                            background: "#4a86e8",
                            // paddingLeft: 0,
                            // paddingRight: 0,
                            // border: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                        }}
                    >
                        <Grid container spacing={2} width="100%">
                            <Grid
                                m={2}
                                item
                            >
                                <CardBox
                                    size={500}
                                    _id="000001"
                                    name={t('sample.name')}
                                    lang={t('sample.lang')}
                                    // type='value-assertion'
                                    type='value'
                                    desc={t('sample.desc')}
                                    sx={{
                                        marginTop: "10px"
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            m={8}
                            item
                        >
                            {/* 这里是描述文案 */}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default SimpleRule;