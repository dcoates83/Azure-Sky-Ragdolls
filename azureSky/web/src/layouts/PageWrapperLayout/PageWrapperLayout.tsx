import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import NavBar from '../../components/NavBar/NavBar'
type PageWrapperLayoutProps = {
  children?: React.ReactNode
}

const PageWrapperLayout = ({ children }: PageWrapperLayoutProps) => {
  return (
    <>
      <NavBar
        navItems={[
          { name: 'Home', icon: <HomeRoundedIcon /> },
          { name: 'About', icon: <InfoRoundedIcon /> },
          { name: 'Purchasing', icon: <ShoppingBasketRoundedIcon /> },
          { name: 'New Litters', icon: <FiberNewRoundedIcon /> },
          { name: 'Shop', icon: <ShoppingCartRoundedIcon /> },
        ]}
      />
      {children}
    </>
  )
}

export default PageWrapperLayout
