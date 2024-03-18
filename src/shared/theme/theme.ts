
export const baseTheme = {
    colors: {
      accent: '#F14F4F',
      textDark: '#444B58',
      textLight: '#fff',
      subtext: '#808080 ',
      primary: '#fff',
      secondary: '#484283',
      coloredMenu: '#444B58'
    },
  
    media: {
      extraLarge: '(max-width: 1140px)',
      large: '(max-width: 960px)',
      medium: '(max-width: 720px)',
      small: '(max-width: 540px)',
    },
  
    // in px
    sizes: {
      header: { height: 56 },
      container: { width: 1200 },
      footer: { height: 128 },
      modal: { width: 540 },
    },
  
    // in ms
    durations: {
      ms300: 300,
    },
  
    // z-index
    order: {
      header: 50,
      modal: 100,
    },
  } as const

export type ColorsNames = keyof typeof baseTheme.colors;