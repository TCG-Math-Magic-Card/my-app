import CardBox from "./card/cardBox";

// 简单规则的页面
function SimpleRule() {
    return (
        <>
            <CardBox
                size={700}
                _id="000001"
                name='最初的数字 1'
                lang='cn'
                type='value'
                desc={"范畴:自然数/奇数\r\n当使用此卡设置值并成功设置在【值区】时，你可以从卡组获取一张【自然数】范畴的断言"}
            ></CardBox >
        </>
    );
}

export default SimpleRule;