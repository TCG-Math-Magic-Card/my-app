import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';

function RulePage() {

    const [content, setContent] = useState('')
    const { t, i18n } = useTranslation();


    fetch(t('rule_md'))
        .then(response => response.text())
        .then(data => {
            setContent(data);
        })

    return (
        <>
            <Grid item justifyContent="left">
                <ReactMarkdown>{content}</ReactMarkdown>
            </Grid>
        </>
    );
}

export default RulePage;