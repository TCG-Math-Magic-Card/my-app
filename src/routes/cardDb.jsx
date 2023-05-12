import { Dialog, Grid, ImageList, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import CardBox from "../components/card/cardBox";
import { useEffect, useState } from "react";
import { Category } from "@mui/icons-material";

function CardDb() {
    const { t, i18n } = useTranslation()

    const [cardList, setCardList] = useState([]);
    const [open, setOpen] = useState(false);
    const [showData, setShowData] = useState();

    function findById(id) {
        for (const tmp of cardList) {
            if (tmp._id === id) {
                return packageData(tmp);
            }
        }
        return null;
    }

    function handleOpen(event) {
        setOpen(true);
        const data = findById(event.currentTarget.id);
        setShowData({ ...data, size: 600 });
    }

    function handleClose() {
        setOpen(false)
    }

    useEffect(() => {
        if (localStorage.getItem(`__MMC__store__${i18n.language}`)) {
            const a = JSON.parse(localStorage.getItem(`__MMC__store__${i18n.language}`))
            setCardList(a);
        } else {
            fetch(`https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/${t('db')}`)
                .then(response => response.json())
                .then(data => {
                    setCardList(data);
                    localStorage.setItem(`__MMC__store__${i18n.language}`, JSON.stringify(data));
                })
                .catch(error => console.error(error));
        }

    }, [i18n.language]);


    // const cardList = [
    //     {
    //         size: 300,
    //         _id: "000003",
    //         name: t('sample3.name'),
    //         lang: t('sample3.lang'),
    //         type: 'assertion',
    //         desc: t('sample3.desc'),
    //         formulaPic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000003.svg",
    //         pic: "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000003.png",
    //         lazy: true
    //     },
    //     {
    //         "_id": "000001",
    //         "name": "Junior Number One",
    //         "type": "value-assertion",
    //         "desc": "When set this card in [Value Area], you can take a card with [Natural] Category from desk to your hand.",
    //         "category": [
    //             "Natural",
    //             "Assertion",
    //             "Odd"
    //         ],
    //         "author": "robzhou",
    //         "formulaPic": "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/000002.svg",
    //         "pic": "https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/000002.png",
    //         "vp": 1,
    //         "dp": 1
    //     }
    // ]

    function packageData(item) {
        return {
            ...item,
            lang: i18n.language,
            size: 300,
            lazy: true,
            formulaPic: item.formulaPic ? item.formulaPic : `https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/svg/${item._id}.svg`,
            pic: item.pic ? item.pic : `https://raw.githubusercontent.com/TCG-Math-Magic-Card/db/main/pic/${item._id}.png`,
            desc: `${t("category")}:${item.category.join('/')}\r\n${item.desc}`
        }
    }

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
                            const innerData = packageData(item);
                            return (
                                <div key={innerData._id} onClick={handleOpen} id={innerData._id}>
                                    <CardBox  {...innerData} />
                                </div>
                            );
                        })}
                    </ImageList>
                </Grid>
                <Grid item xs={1}>
                    <Paper elevation={12} style={{ height: '100%' }}>Coming soon……</Paper>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} open={open}>
                <CardBox {...showData} size={600}></CardBox>
            </Dialog>
        </>
    );
}

export default CardDb;
