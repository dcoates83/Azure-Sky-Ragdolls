import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
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
        ]}
      />
      {children}
    </>
  )
}

export default PageWrapperLayout
