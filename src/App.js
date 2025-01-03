import './scss/app.scss';

import Header from './components/header'
import Categories from './components/categories';
import Sort from './components/sort';
import PizzaBlock from './components/pizza-block';

import pizzas from './assets/pizzas.json'

console.log(pizzas)

function App() {
  return (
    <div className="wrapper">

		<Header />
		
		<div className="content">
			<div className="container">
				<div className="content__top">	
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{
						pizzas.map((item) => (
							<>
							 <PizzaBlock {...item}/>
							</>
						))
					}
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
