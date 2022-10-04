// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/AboutPage/AboutPage.js'         -> AboutPage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'
import PageWrapperLayout from './layouts/PageWrapperLayout/PageWrapperLayout'
import AboutPage from './pages/AboutPage/AboutPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PageWrapperLayout}>
        <Route path="/Home" page={HomePage} name="home" />
        <Route path="/About" page={AboutPage} name="About" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
