// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/AboutPage/AboutPage.js'         -> AboutPage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router } from '@redwoodjs/router'
import AboutPage from './pages/AboutPage/AboutPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/about" page={AboutPage} name="About" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
