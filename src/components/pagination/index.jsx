import React from "react"
import { useState } from "react";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap.css';
import './pagination.scss'

function Pagination({ total, currentPage, setCurrentPage }) {

    return (
        <ResponsivePagination
            total={total}
            current={currentPage}
            onPageChange={page => setCurrentPage(page)}
        />
    )
}

export default Pagination