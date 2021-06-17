import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Chicken',
        description: 'With honey and lemon',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Steakburger',
        description: 'Special barbeque sauce',
        price: 45.5,
    },
    {
        id: 'm4',
        name: 'Feta Pasta',
        description: 'With cherry tomato and feta cheese',
        price: 29.4,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}/>);

    return <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
};

export default AvailableMeals;