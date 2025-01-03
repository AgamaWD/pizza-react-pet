import React from 'react'

const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые"
]

function Categories() {

    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, index) => (
                        <li onClick={() => setActiveIndex(index)} key={index} className={activeIndex === index ? 'active' : ''}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories