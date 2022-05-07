import React, {useState} from 'react';
import style from "./users.module.css";
type SelectorType = {
    totalCount: number,
    callBack: (page: number) => void,
    currentPage: number,
}
export const Selector: React.FC<SelectorType> = ({totalCount, callBack, currentPage}) => {

    const [startPages, setSmallPages] = useState(1)
    const [endPages, setEndPages] = useState(20)

    let pageCount = Math.ceil(totalCount / 15);
    let pages = [];
    for (let i = startPages; i <= endPages; i++) {
        pages.push(i)
    }
    const clickHandlerPlus = () => {
        setSmallPages(startPages + 20)
        setEndPages(endPages + 20)
    }
    const clickHandlerMin = () => {
        setSmallPages(startPages - 20)
        setEndPages(endPages - 20)
    }

    return (
        <div className={style.selectorContainer}>
            <button onClick={clickHandlerMin} disabled={startPages <= 1}>⟪⟪⟪</button>
            <button className={style.selector}>{pages.map((p, index) => <span key={index} onClick={() => callBack(p)}
                                                                              className={`${currentPage === p && style.selectedPages}`}> {p} </span>)}</button>
            <button onClick={clickHandlerPlus} disabled={endPages > pageCount}>⟫⟫⟫</button>
        </div>
    );
};
