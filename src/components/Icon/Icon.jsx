import Balance from '../../assets/icons/balance.png'
import Cardio from '../../assets/icons/cardio.png'
import CheatMeal from '../../assets/icons/cheatmeal.png'
import Coordination from '../../assets/icons/coordination.png'
import Exercise from '../../assets/icons/exercise.png'
import Flexibility from '../../assets/icons/flexibility.png'
import Food from '../../assets/icons/food.png'
import Fruit from '../../assets/icons/fruit.png'
import Gym from '../../assets/icons/gym.png'
import PersonalJourney from '../../assets/icons/personal-journey.png'
import Organic from '../../assets/icons/organic.png'
import Other from '../../assets/icons/other.png'
import Protein from '../../assets/icons/protein.png'
import Snack from '../../assets/icons/snack.png'
import Strength from '../../assets/icons/strength.png'
import Supplements from '../../assets/icons/supplements.png'
import Yoga from'../../assets/icons/yoga.png'

const Icon = ({ category }) => {
  const icons = {
    Balance,
    Cardio, 
    CheatMeal,
    Coordination,
    Exercise,
    Flexibility,
    Food,
    Fruit,
    Gym,
    PersonalJourney,
    Organic,
    Other,
    Protein,
    Snack,
    Strength,
    Supplements,
    Yoga,
  }

  return <img className='icon' src={icons[category]} alt={`A ${category} icon.`} />
}

export default Icon