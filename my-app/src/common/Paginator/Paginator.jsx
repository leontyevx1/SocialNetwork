import React from 'react';
import classes from "./Paginator.module.css";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.userPage}>
            <div className={classes.unSelectedPage}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}
                        </span>
                })}
            </div>
        </div>
    );
};

export default Paginator;