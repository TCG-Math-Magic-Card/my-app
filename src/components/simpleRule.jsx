import { useTranslation } from "react-i18next";
import CardBox from "./card/cardBox";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import './simpleRule.css'
import SimpleStep from "./simpleStep";

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
                {/* 值卡 */}
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
                        <Grid
                            direction="row"
                            container
                            spacing={0}>
                            <Grid
                                m={5}
                                item
                                xs={7}
                            >
                                <Typography color={"white"} variant="h3">{t("值卡表示最纯粹的值。比如数字1或者数字2。它们的意义和你平时理解的数学上的1和2是差不多的。只是以卡片的形式体现。")}</Typography>
                                <br />
                                <br />
                                <br />
                                <Typography className="item-desc" variant="h4">- {t("右侧的图片就是一张值卡")}</Typography>
                                <Typography className="item-desc" variant="h4">- {t("【最初的数字 1】是卡片的名字")}</Typography>
                                <Typography className="item-desc" variant="h4">- {t("黑板（也就是公式区）中的白字是它的值。")}</Typography>
                                <Typography className="item-desc" variant="h4">- {t("下方的描述是效果，在简易规则里你可以忽略这些。")}</Typography>
                                <Typography className="item-desc" variant="h4">- {t("圆圈中的黄色代表了这张卡是值卡。请习惯利用颜色分辨卡的功能。")}</Typography>
                                {/* 这里是描述文案 */}
                            </Grid>
                            <Grid
                                m={2}
                                xs={3}
                                item
                            >
                                <Box>
                                    <CardBox
                                        size={500}
                                        _id="000001"
                                        name={t('sample.name')}
                                        lang={t('sample.lang')}
                                        type='value'
                                        desc={t('sample.desc')}
                                        lazy={true}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <Typography
                        display="flex"
                        justifyContent="center"
                        variant="h2">{t("算子卡")}</Typography>
                </Grid>
                {/* 算子卡介绍页面 */}
                <Grid
                    item
                    xs={12}
                    justifyContent="center">
                    <Paper
                        elevation={12}
                        height="fixed"
                        width="100%"
                        sx={{
                            background: "#f9cb9c",
                            minWidth: "100%",
                            maxWidth: "100%",
                        }}
                    >
                        <Grid
                            direction="row"
                            container
                            spacing={0}>
                            <Grid
                                m={2}
                                xs={4}
                                item
                            >
                                <Box>
                                    <CardBox
                                        size={500}
                                        _id="000002"
                                        name={t('sample2.name')}
                                        lang={t('sample2.lang')}
                                        type='operator'
                                        desc={t('sample2.desc')}
                                        vp={0}
                                        dp={0}
                                        formulaPic="https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg"
                                        pic="https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png"
                                        lazy={true}
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                m={5}
                                item
                                xs={6}
                            >
                                <Typography color={"white"} variant="h3">
                                    {t("算子这个概念可能在你的生活中并不常见，但是你一定知道+这个符号。它一般也被叫做加法符号，我们这里说的算子卡就是类型与+、-之类你常见的技术符号。你可能也感觉到了，算子卡表示的符号可以把两个‘值’（游戏里对应值卡）链接在一起，从而形成一个新的式子。比如：1+1,4-3之类的。")}
                                </Typography>
                                <br />
                                <br />
                                <br />
                                <Typography className="item-desc" variant="h4">- {t("算子由蓝色代表")}</Typography>
                                {/* 这里是描述文案 */}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* 断言卡 */}
                <Grid
                    item
                    xs={12}>
                    <Typography
                        display="flex"
                        justifyContent="center"
                        variant="h2">{t("断言卡")}</Typography>
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
                            background: "#b4a7d6",
                            // paddingLeft: 0,
                            // paddingRight: 0,
                            // border: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                        }}
                    >
                        <Grid
                            direction="row"
                            container
                            spacing={0}>
                            <Grid
                                m={5}
                                item
                                xs={7}
                            >
                                <Typography color={"white"} variant="h3">{t("断言卡上有一句断言，用来描述一个数学概念。比如“这是偶数”、“这是奇数”。通过值卡和算子卡构成的式子我们可以得出一个值。然后我们通过我们的数学知识就可以知道这个断言的真假了。比如 1+1 | 是奇数，1+1 | 是偶数。我们可以知道第一个组合是假，第二个组合是真。")}</Typography>
                                <br />
                                <br />
                                <br />
                                <Typography className="item-desc" variant="h4">- {t("断言由红色代表")}</Typography>
                                <Typography className="item-desc" variant="h4">- {t("VP表示胜利点数，DP表示失败点数")}</Typography>
                                {/* 这里是描述文案 */}
                            </Grid>
                            <Grid
                                m={2}
                                xs={3}
                                item
                            >
                                <Box>
                                    <CardBox
                                        size={500}
                                        _id="000003"
                                        name={t('sample3.name')}
                                        lang={t('sample3.lang')}
                                        type='assertion'
                                        desc={t('sample3.desc')}
                                        formulaPic="https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000003.svg"
                                        pic="https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000003.png"
                                        lazy={true}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* 游戏流程 */}
                <Grid
                    item
                    xs={12}>
                    <Typography
                        display="flex"
                        justifyContent="center"
                        variant="h2">{t("游戏流程")}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <SimpleStep />
                </Grid>
            </Grid>
        </>
    );
}

export default SimpleRule;