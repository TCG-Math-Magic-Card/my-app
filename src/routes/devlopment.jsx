import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Devlopment() {

    const [content, setContent] = useState('')
    const { t, i18n } = useTranslation();


    useEffect(() => {
        fetch(t('devlopment_md'))
            .then(response => response.text())
            .then(data => {
                setContent(data);
            })

    }, [i18n.language])

    return (
        <>
            <Grid item justifyContent={"left"}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </Grid>
        </>
    );
}


export default Devlopment;