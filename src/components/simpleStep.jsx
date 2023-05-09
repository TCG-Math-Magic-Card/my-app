import { FormControlLabel, Grid, Paper, Radio, RadioGroup, Step, StepButton, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import ExpandCard from "./expendCard";
import { useTranslation } from "react-i18next";
import './simpleStep.css'

// 简单流程介绍
function SimpleStep() {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(0);
    const [chose, setChose] = useState(null);
    const stepList = [
        { step: 0, label: t("游戏准备") },
        { step: 1, label: t("进行阶段1") },
        { step: 2, label: t("进行阶段2") },
        { step: 3, label: t("游戏终止") }
    ];

    const handleChange = (event) => {
        console.log(chose)
        console.log('>>>>>>>>>>>>>>')
        console.log(event.target.value);
        setChose(event.target.value);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <>
            <Grid
                item
                xs={12}
                justifyContent="center">
                <Paper
                    elevation={12}
                    width="100%"
                    sx={{
                        background: "#6fa8dc",
                        // height: ,
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
                            xs={12}
                        >
                            <Stepper nonLinear activeStep={activeStep}>
                                {stepList.map((step) => (
                                    <Step key={step.step} completed={activeStep >= step.step}>
                                        <StepButton color="inherit" onClick={handleStep(step.step)}>
                                            {step.label}
                                        </StepButton>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>

                        {/* 这里针对不同的类型展示不同的内容 */}
                        {activeStep === 0 && (
                            <>
                                <Grid
                                    m={2}
                                    item
                                    xs={2}
                                >
                                    <ExpandCard title={t("卡组构建")} open={true}>
                                        {t("一般要40~60张卡")}<br />
                                        {t("如果没法两个人都有各自的卡组暂时共享一套也是可以的")}<br />
                                    </ExpandCard>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={2}
                                >
                                    <ExpandCard title={t("决定先后")} open={true}>
                                        {t("猜硬币或者猜拳都是可以的")}
                                    </ExpandCard>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={2}
                                >
                                    <ExpandCard title={t("初始手卡")} open={true}>
                                        {t("5张")}
                                    </ExpandCard>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={2}
                                >
                                    <ExpandCard title={t("手卡上限")} open={true}>
                                        {t("不大于7张。在每个回合结束前要弃置至7张。")}
                                    </ExpandCard>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={2}
                                >
                                    <ExpandCard className="golden" title={t("黄金规则")} open={true}>
                                        {t("找一个愿意和你玩这个游戏的朋友!")}
                                    </ExpandCard>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={12}
                                >
                                    <ExpandCard title={t("游戏场地")} open={true}>
                                        <Grid
                                            container
                                            spacing={2}
                                            justifyContent="center">
                                            <Grid item xs={4}>
                                                <Typography variant="h6" >
                                                    {t("现在想象在你和对手之间有一些格子。总共有五个，正好可以放置5张卡片。奇数的位置处专门摆放值卡，偶数的位置处专门摆放算子卡。我们给这五个格子取个名字：“泳道”。奇数位叫做“值区”，偶数位叫做“算子区”。然后随便找个离自己近的位置。取名叫做“断言区”，你可能已经感觉出来了，这里是专门摆放断言卡的。不同的是：值区和算子区只能放着一张卡，断言区可以放许多张。你和对手各有一个断言区。")}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <img src={t("casePic")} />
                                            </Grid>

                                        </Grid>
                                    </ExpandCard>
                                </Grid>
                            </>)
                        }
                        {/* 流程1相关的内容 */}
                        {activeStep === 1 && (
                            <>
                                <Grid
                                    m={5}
                                    item
                                    xs={10}
                                >
                                    <Typography variant="h6" >{t("在摸牌过后可以选择下来的两项中的一项进行，或者什么也不做之间进行下一个阶段。")}</Typography>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={12}
                                >
                                    <ExpandCard title={t("设置值")} >
                                        <Grid
                                            container
                                            spacing={2}
                                            justifyContent="center">
                                            <Grid item xs={12}>
                                                <Typography variant="h6" >
                                                    {t("选择一个还没有使用的【值区】，从手牌正面朝上放置一个值卡。")}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <img src={t("case_value_pic")} />
                                            </Grid>

                                        </Grid>
                                    </ExpandCard>
                                </Grid>
                                <Grid
                                    m={2}
                                    item
                                    xs={12}
                                >
                                    <ExpandCard title={t("设置算子")} >
                                        <Grid
                                            container
                                            spacing={2}
                                            justifyContent="center">
                                            <Grid item xs={12}>
                                                <Typography variant="h6" >
                                                    {t("选择一个还没有使用的【算子区】，从手牌正面朝上放置一个算子卡。")}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <img src={t("case_op_pic")} />
                                            </Grid>
                                        </Grid>
                                    </ExpandCard>
                                </Grid>
                            </>
                        )}

                        {/* 流程2相关的内容 */}
                        {activeStep === 2 && (
                            <>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="center">
                                    <Grid m={5} item xs={12}>
                                        <Typography variant="h6" >
                                            {t("你可以从手卡选择一个断言卡放置在断言区内。")}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <img src={t("case_art_pic")} />
                                    </Grid>
                                </Grid>
                            </>
                        )}
                        {/* 游戏结束相关的内容 */}
                        {activeStep === 3 && (
                            <>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="center">
                                    <Grid item xs={8}>
                                        <Typography variant="h6" >
                                            {t("那么如何判断游戏结束和哪方获胜呢？每次回合结束的时候你们要看泳道内的5个区域是否都被摆满了卡。如果泳道内的卡满了。那么就就终止游戏，开始判断输赢了。")}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" >
                                            {t("正如上面所述的一样。你要计算出泳道内值和算子构成的值。然后每个玩家再用这个值和自己断言区内的每个断言卡进行组合，断言为真胜利点数加上VP,断言为假胜利点数减去DP。然后比较两个那个胜利点数大，大的一方获得胜利。")}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" >
                                            {t("听起来很简单是不是？在游戏中你要预测泳道可能出现的值，并且规划好设置断言的策略，如果设置的太多可能反而让自己失败。")}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <ExpandCard m={5} title={t("测试一下!")} open={true} >
                                            <Grid
                                                container
                                                spacing={2}
                                                justifyContent="center">
                                                <Grid item xs={2}>
                                                    <Typography variant="h6">
                                                        {t("谁赢了？")}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <RadioGroup
                                                        row
                                                        value={chose}
                                                        onChange={handleChange}>
                                                        <FormControlLabel value={0} control={<Radio />} label={t("上方")} />
                                                        <FormControlLabel value={1} control={<Radio />} label={t("下方")} />
                                                    </RadioGroup>
                                                </Grid>
                                                {
                                                    chose == 1 && (
                                                        <Grid item xs={10}>
                                                            <Typography variant="h6" fontStyle={{ color: 'green' }}>
                                                                {t("恭喜你答对了！")}
                                                            </Typography>
                                                        </Grid>
                                                    )
                                                }
                                                {
                                                    chose == 0 && (
                                                        <Grid item xs={10}>
                                                            <Typography variant="h6" fontStyle={{ color: 'red' }} >
                                                                {t("很遗憾.下方获胜了。泳道的值为1+1+1=3。是奇数。下方偶数断言卡一张。总胜利点数-1而上面有两张胜利点数-2。(-1>-2)")}
                                                            </Typography>
                                                        </Grid>
                                                    )
                                                }
                                                <Grid item xs={10}>
                                                    <img src={t("case_art_pic")} />
                                                </Grid>
                                            </Grid>
                                        </ExpandCard>
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Paper >
            </Grid >
        </>
    );
}

export default SimpleStep;