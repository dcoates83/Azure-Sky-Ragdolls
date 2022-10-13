import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { navigate } from '@redwoodjs/router'
import * as React from 'react'
import Logo from '../../img/Logo.svg'

interface INavItems {
  name: string
  icon: React.ReactNode
}

interface Props {
  navItems: INavItems[]
}

const LogoComponent = (props: any) => <Logo {...props} />

function NavBar(props: Props) {
  const { navItems } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = React.useState(0)

  const _handleNavigate = (item: string) => {
    if (item === 'Home') {
      return navigate(`/`)
    }
    navigate(`/${item.replace(/\s+/, '')}`)
  }

  return (
    <>
      (
      <AppBar component="nav" color="default">
        <Toolbar>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { height: '60px' },
              pt: 0.5,
            }}
          >
            <LogoComponent onClick={() => _handleNavigate('Home')} />
          </Box>
          <>
            {!isMobile && (
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    sx={{ color: 'text.primary' }}
                    onClick={() => _handleNavigate(item.name)}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            {navItems.map((item) => (
              <BottomNavigationAction
                label={item.name}
                icon={item.icon}
                onClick={() => _handleNavigate(item.name)}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </>
  )
}

export default NavBar