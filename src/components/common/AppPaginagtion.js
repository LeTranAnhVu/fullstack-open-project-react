import React, {useEffect} from "react";
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {useDispatch} from "react-redux";

import {fetchRestaurants} from "../../actions";
import "./AppPagination.scss"


const AppPagination = ({page = null, totalPage = null, position}) => {
    const dispatch = useDispatch();

    const handleClick = (pageNo, special = null) => {
        if (pageNo) {
            dispatch(fetchRestaurants({page: pageNo}));
        } else {
            switch (special) {
                case 'first': {
                    dispatch(fetchRestaurants({page: 1}));
                    break;
                }
                case 'previous': {
                    dispatch(fetchRestaurants({page: page - 1}));
                    break;
                }
                case 'next': {
                    dispatch(fetchRestaurants({page: page + 1}));
                    break;
                }
                case 'last': {
                    let lastPage = totalPage;
                    dispatch(fetchRestaurants({page: lastPage}));
                    break;
                }
                default : {
                    break;
                }
            }
        }
    };

    const createPageList = () => {
        let paginationItems = [];
        if (totalPage) {
            for (let no = 1; no <= totalPage; no++) {
                paginationItems.push(
                    (
                        <PaginationItem disabled={page === no} key={no}>
                            <PaginationLink onClick={(e) => handleClick(no)}>
                                {no}
                            </PaginationLink>
                        </PaginationItem>
                    )
                )
            }
        }
        return paginationItems
    };


    return (
        <div className={`app-pagination ${position}`}>
            {totalPage ?
                <Pagination className="app-pagination-nav" aria-label="Page navigation">
                    <PaginationItem disabled={page===1}>
                        <PaginationLink first onClick={(e) => handleClick(null, 'first')}/>
                    </PaginationItem>
                    <PaginationItem disabled={page===1}>
                        <PaginationLink previous onClick={(e) => handleClick(null, 'previous')}/>
                    </PaginationItem>
                    {/*page number*/}
                    {createPageList()}
                    {/*end page number*/}
                    <PaginationItem disabled={page===totalPage}>
                        <PaginationLink next onClick={(e) => handleClick(null, 'next')}/>
                    </PaginationItem>
                    <PaginationItem disabled={page===totalPage}>
                        <PaginationLink last onClick={(e) => handleClick(null, 'last')}/>
                    </PaginationItem>
                </Pagination>
                : null
            }
        </div>

    )
}

export default AppPagination