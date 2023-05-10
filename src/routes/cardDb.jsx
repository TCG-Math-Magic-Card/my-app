import { Grid, ImageList, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import CardBox from "../components/card/cardBox";

function CardDb() {
    const { t } = useTranslation()

    const cardList = [
        {
            size: 300,
            _id: "000003",
            name: t('sample3.name'),
            lang: t('sample3.lang'),
            type: 'assertion',
            desc: t('sample3.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000003.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000003.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000002",
            name: t('sample2.name'),
            lang: t('sample2.lang'),
            type: 'operator',
            desc: t('sample2.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000001",
            name: t('sample.name'),
            lang: t('sample.lang'),
            type: 'value',
            desc: t('sample.desc'),
            // formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            // pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000002",
            name: t('sample2.name'),
            lang: t('sample2.lang'),
            type: 'operator',
            desc: t('sample2.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000002",
            name: t('sample2.name'),
            lang: t('sample2.lang'),
            type: 'operator',
            desc: t('sample2.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000002",
            name: t('sample2.name'),
            lang: t('sample2.lang'),
            type: 'operator',
            desc: t('sample2.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000002",
            name: t('sample2.name'),
            lang: t('sample2.lang'),
            type: 'operator',
            desc: t('sample2.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        },
        {
            size: 300,
            _id: "000002",
            name: t('sample2.name'),
            lang: t('sample2.lang'),
            type: 'operator',
            desc: t('sample2.desc'),
            formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
            pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
            lazy: true
        }
    ]


    return (
        <>
            <Grid container spacing={2} style={{ height: '90vh', marginTop: '8px' }}>
                <Grid item xs={11}>
                    <ImageList
                        sx={{
                            width: '100%',
                            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                            transform: 'translateZ(0)',
                        }}
                        rowHeight={300 / 813 * 1185}
                        cols={5}
                        gap={2}
                    >
                        {cardList.map(item => {
                            return (
                                <CardBox {...item} />
                            );
                        })}
                    </ImageList>
                </Grid>
                <Grid item xs={1}>
                    <Paper elevation={12} style={{ height: '100%' }}>这里是筛选条件</Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default CardDb;
