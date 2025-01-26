import React from 'react'

const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
]

function Categories({ value, onClickCategory }) {

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, index) => (
                        <li onClick={() => onClickCategory(index)} key={index} className={value === index ? 'active' : ''}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories