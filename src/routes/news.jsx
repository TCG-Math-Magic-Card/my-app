import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function News() {

    const newList = [
        {
            title: 'New!数学魔法卡网站建立',
            desc: '数学魔法卡网站正式成立上线，欢迎使用和提意见。',
            img: '',
            date: '2023-05-11',
        },
    ]

    return (
        <>
            <Grid Grid
                container
                justifyContent="center"
                spacing={2}
                style={{ marginTop: '8px' }
                }>
                {
                    newList.map(item => {
                        return (
                            <Grid
                                justifyContent="center"
                                item xs={12}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    {/* sx={{ maxWidth: 900 }} */}
                                    <Card >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image="pic/Card_temp_cn.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}({item.date})
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.desc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </>
    );
}

export default News;
