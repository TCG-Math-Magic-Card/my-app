import { ExpandMore } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

// 简单封装的展开卡组
function ExpandCard({ title, open, children }) {
    const [expanded, setExpanded] = useState(open);

    function handleExpandClick() {
        setExpanded(!expanded)
    }

    return (
        <>
            <Card>
                <CardHeader
                    title={title}
                    action={
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                ></CardHeader>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {children}
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}

export default ExpandCard;