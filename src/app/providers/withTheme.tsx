import React from 'react'
import { baseTheme } from '../../shared/theme/theme'
import { ThemeProvider } from 'styled-components'


const withTheme = (Component : React.ComponentType) => (props : any) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Component {...props}/>
    </ThemeProvider>
  )
}

export default withTheme
