import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from '../../components/NavBar/NavBar'

type PageWrapperLayoutProps = {
  children?: React.ReactNode
}

const PageWrapperLayout = ({ children }: PageWrapperLayoutProps) => {
  return (
    <>
      <NavBar navItems={['Home', 'About']} />
      {children}
    </>
  )
}

export default PageWrapperLayout
