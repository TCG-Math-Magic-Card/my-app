import { useTranslation } from "react-i18next";
import CardBox from "./card/cardBox";

// 简单规则的页面
function SimpleRule() {
    const { t } = useTranslation();
    return (
        <>
            <CardBox
                size={700}
                _id="000001"
                name={t('sample.name')}
                lang={t('sample.lang')}
                type='value-assertion'
                desc={t('sample.desc')}
            ></CardBox >
        </>
    );
}

export default SimpleRule;