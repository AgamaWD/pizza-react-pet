import React from "react"

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from "../components/pagination";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilterParams } from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";

export default function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categoryId = useSelector(state => state.filterReducer.categoryId)
    const sortType = useSelector(state => state.filterReducer.sortType)
    const currentPage = useSelector(state => state.filterReducer.pageCount)

    const isMounted = React.useRef(false)
    const isSearch = React.useRef(false)

    function onClickCategory(id) {
        dispatch(setCategoryId(id))
    }

    const { searchValue } = React.useContext(SearchContext)
    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const limit = 8

    React.useEffect(() => {
        if (window.location.search) {
            const currentSerchParams = qs.parse(window.location.search.substring(1))

            dispatch(setFilterParams(currentSerchParams))

            isSearch.current = true
        }
    }, [])

    React.useEffect(() => {
        setIsLoading(true)

        if (!isSearch.current) {
            let responseAddress = new URL('https://677a76bf671ca0306833fe8b.mockapi.io/pizzas/')

            responseAddress.searchParams.append('limit', limit)
            responseAddress.searchParams.append('page', currentPage)

            if (categoryId) {
                responseAddress.searchParams.append('category', categoryId)
            }

            if (searchValue) {
                responseAddress.searchParams.append('search', searchValue)
            }

            responseAddress.searchParams.append('sortby', sortType)

            axios.get(responseAddress).then(responce => {
                setPizzas(responce.data)
                setIsLoading(false)
            })

        }

        window.scrollTo(0, 0)

    }, [categoryId, sortType, searchValue, currentPage])

    React.useEffect(() => {

        if (isMounted.current) {
            const queryStr = qs.stringify({
                sort: sortType,
                category: categoryId,
                page: currentPage
            })

            navigate(`?${queryStr}`)
        }

        isMounted.current = true
    }, [categoryId, sortType, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    isLoading ?
                        [...new Array(8)].map((item, index) => (
                            <Skeleton key={index} />
                        )) :
                        pizzas !== "Not found" ?
                            pizzas.map((item) => (
                                <PizzaBlock key={item.id} {...item} />
                            ))
                            : <h1>{pizzas}</h1>

                }
            </div>
            <Pagination total={2} />
        </>
    )
}