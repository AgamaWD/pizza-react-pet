import React from "react"
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap.css';
import './pagination.scss'
import { useSelector, useDispatch } from "react-redux";
import { setPageCount } from "../../redux/slices/filterSlice";

function Pagination({ total }) {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.filterReducer.pageCount)

    function onPageChange(page) {
        dispatch(setPageCount(page))
    }

    return (
        <ResponsivePagination
            total={total}
            current={currentPage}
            onPageChange={page => onPageChange(page)}
        />
    )
}

export default Pagination