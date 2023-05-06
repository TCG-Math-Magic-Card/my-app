import { Card } from '../../../node_modules/mmcjs/src/index';
import { useEffect, useRef, useState } from 'react';


function CardBox({
    _id,
    name,
    lang = 'cn',
    type = 'value',
    desc = '',
    vp = 0,
    dp = 1,
    pic = 'https://raw.githubusercontent.com/TCG-Math-Magic-Card/mmcjs/math/pic/000001.jpg',
    formulaPic = 'https://raw.githubusercontent.com/TCG-Math-Magic-Card/mmcjs/main/pic/1.svg',
    size = [813, 1185],
}) {
    let data = {
        _id,
        name,
        lang,
        type,
        desc,
        vp,
        dp,
        pic,
        formulaPic,
    };
    // const [cardData, setCardData] = useState();
    const [card, setCard] = useState(null);
    const canvas = useRef(null);

    // 渲染卡片
    const renderCard = (localData) => {
        if (!localData) {
            return;
        }

        const newCard = new Card({
            data: localData,
            size: Array.isArray(size) ? size : [size, size / 813 * 1185],
            canvas: canvas.current,
            moldPath: 'mold',
        });
        newCard.render();
        setCard(newCard);
    };

    useEffect(() => {
        renderCard(data);
    }, [canvas]);

    // useEffect(() => setCardData(data), [data])

    return (
        <canvas ref={canvas} />
    );
}

export default CardBox;