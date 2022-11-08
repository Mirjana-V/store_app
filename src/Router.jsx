import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AppCustomers from './pages/AppCustomers'
import AppProducts from './pages/AppProducts'
import SingleCustomer from "./pages/SingleCustomer";


const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/customers'>
            <AppCustomers />
        </Route>
        <Route path="/customers/:customerId">
        <SingleCustomer />
      </Route>
        <Route exact path='/products'>
            <AppProducts />
        </Route>
      </Switch>
    </div>
  )
}

export default Router;