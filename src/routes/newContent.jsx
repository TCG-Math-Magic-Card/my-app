import { Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown'

import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const contact = await (await fetch(params.path)).text();
    return { contact };
}

function NewContent() {
    const { contact } = useLoaderData()
    return (
        <>
            <Grid item justifyContent={"left"}>
                <ReactMarkdown>{contact}</ReactMarkdown>
            </Grid>
        </>
    );
}

export default NewContent;