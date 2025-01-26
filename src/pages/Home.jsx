import React from "react"

import Categories from '../components/categories';
import Sort from '../components/sort';
import PizzaBlock from '../components/pizza-block';
import Skeleton from '../components/pizza-block/skeleton';
import Pagination from "../components/pagination";
import { SearchContext } from "../App";

export default function Home() {
    const { searchValue } = React.useContext(SearchContext)
    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState('rating')
    const [currentPage, setCurrentPage] = React.useState(1)
    const limit = 8

    React.useEffect(() => {
        setIsLoading(true)

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

        fetch(responseAddress).then(response => {
            return response.json()
        }).then(data => {
            setPizzas(data)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(newCategoryId) => setCategoryId(newCategoryId)} />
                <Sort value={sortType} onChangeType={(newSortType) => setSortType(newSortType)} />
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
            <Pagination total={2} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}