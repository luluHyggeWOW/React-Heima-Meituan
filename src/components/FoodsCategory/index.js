import FoodItem from './FoodItem'
import './index.scss'
import { useSelector } from 'react-redux'
const FoodsCategory = ({ name, foods }) => {
  const { activeIndex } = useSelector(state => state.foods)
  return (
    <div className="category">
      <dl className="cate-list">
        <dt className="cate-title">{name}</dt>

        {foods.map((item, index) => {
          return <FoodItem key={item.id} {...item} />
        })}
      </dl>
    </div>
  )
}

export default FoodsCategory
