import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import RestoService from '../../services/resto-service'

const App = () => {
  const restoService = new RestoService()
  const [state, setState] = useState([])
  const [isLoad, setIsLoad] = useState(false)
  const [total, setTotal] = useState(0)
  const [order, setOrder] = useState([])


  const handleId = (id) => {
    let index = state.filter(elem => elem.id === id)
    let price = index[0].price
    setTotal(total + price)


    setOrder(prevState => {
      prevState.push(...index)
      return prevState
    })
  }

  const handleDeleteOrder = (id) => {
    const index = order.findIndex((elem, i) => i === id)

    const before = order.slice(0, index)
    const after = order.slice(index + 1)

    const newArr = [...before, ...after]

    setOrder(newArr)

    let price = order[index].price
    console.log(price)
    setTotal(total - price)
  }

  useEffect(() => {

      restoService.getMenuItems()
      .then(res => {
        if(isLoad) {
          setState(res)
        }
        setIsLoad(true)
      })
  }, [isLoad])


    return (
      <Router>
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={total}/>
          <Switch>
            <Route path="/cart">
              <CartPage order={order} handleDeleteOrder={handleDeleteOrder}/>
            </Route>
            <Route exact path="/">
              <MainPage state={state} handleId={handleId}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default App;
