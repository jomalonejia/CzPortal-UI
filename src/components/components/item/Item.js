import React from 'react'
import style from './item.scss'
import { Link } from 'react-router-dom'
import { Checkbox } from 'semantic-ui-react'

const Item = ({item = []}) => (
  <div className={style.items}>
    <div className={style.imgCover}>
      <Link to={`/item/${item.id}`}>
        <img src={item.image}/>
      </Link>
    </div>
    <div className={style.infos}>
      <h6>{item.name}</h6>
      <p>{item.describe}</p>
    </div>
    <ul className={style.dotList}>
      <Checkbox checked={true} radio/>
    </ul>
    <p className={style.price}>￥ {item.price}</p>
    <div className={style.operation}>
      <Link to={`/item/${item.id}`}>查看详情</Link>
      <Link to={`/item/${item.id}`}>加入购物车</Link>
    </div>
  </div>
)

export default Item




