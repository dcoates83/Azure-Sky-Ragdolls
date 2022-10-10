import { Route, Router, Set } from '@redwoodjs/router'
import PageWrapperLayout from './layouts/PageWrapperLayout/PageWrapperLayout'
import AboutPage from './pages/AboutPage/AboutPage'
import NewLittersPage from './pages/NewLittersPage/NewLittersPage'
import PurchasingPage from './pages/PurchasingPage/PurchasingPage'
import ShopPage from './pages/ShopPage/ShopPage'
const Routes = () => {
  return (
    <Router>
      <Route path="/purchasing" page={PurchasingPage} name="purchasing" />
      <Route path="/new-litters" page={NewLittersPage} name="newLitters" />
      <Route path="/shop" page={ShopPage} name="shop" />
      <Set wrap={PageWrapperLayout}>
        <Route path="/" page={HomePage} name="Home" />
        <Route path="/About" page={AboutPage} name="About" />
        <Route path="/Purchasing" page={PurchasingPage} name="Purchasing" />
        <Route path="/NewLitters" page={NewLittersPage} name="New Litters" />
        <Route path="/Shop" page={ShopPage} name="Shop" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
