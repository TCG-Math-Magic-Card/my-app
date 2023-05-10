import { Card } from '../../../node_modules/mmcjs/src/index';
import { useEffect, useRef, useState } from 'react';


function CardBox({
    _id,
    name,
    lang = 'cn',
    type = 'value',
    desc = '',
    vp = 1,
    dp = 1,
    pic = 'https://raw.githubusercontent.com/TCG-Math-Magic-Card/mmcjs/math/pic/000001.jpg',
    formulaPic = 'https://raw.githubusercontent.com/TCG-Math-Magic-Card/mmcjs/main/pic/1.svg',
    size = [813, 1185],
    lazy = false,
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
    const [card, setCard] = useState(null);
    const canvas = useRef(null);
    const size2 = Array.isArray(size) ? size : [size, size / 813 * 1185];
    const observer = useRef();
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
        if (!lazy) {
            renderCard(data);
        }
    }, [canvas]);

    // useEffect(() => setCardData(data), [data])

    useEffect(() => {
        if (!lazy) {
            renderCard(data);
        }
    }, [canvas]);

    // 检查数据的变化
    useEffect(() => {
        if (card) {
            card.feedData(data);
            if (!lazy) {
                card.render();
            }
        }
    }, [name, desc]);

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                renderCard(data);
            }
        });
    }
    useEffect(() => {
        const Observer = new IntersectionObserver(handleIntersection);
        canvas.current && Observer.observe(canvas.current);
        observer.current = Observer;
        return () => observer.current.disconnect();
    }, []);

    return (
        <canvas width={size2[0]} height={size2[1]} ref={canvas} />
    );
}

export default CardBox;