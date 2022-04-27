import React from 'react';
import s from "./users.module.css";

type SelectorType = {
    totalCount: number,
    pageSize: number,
    callBack: (page: number) => void,
    currentPage: number,
}

export const Selector: React.FC<SelectorType> = ({totalCount, pageSize, callBack, currentPage}) => {

    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <span>{pages.map((p, index) => <span key={index} onClick={() => callBack(p)}
                                                 className={`${currentPage === p && s.selectedPages}`}> {p} </span>)}</span>
        </div>
    );
};
