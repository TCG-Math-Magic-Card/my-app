import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    );
}

export default RulePage;