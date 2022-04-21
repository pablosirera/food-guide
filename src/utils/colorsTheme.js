const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)')

const setColorScheme = e => {
  if (e.matches) {
    document.querySelector('html').setAttribute('data-theme', 'myThemeDark')
  } else {
    document.querySelector('html').setAttribute('data-theme', 'myThemeLight')
  }
}

setColorScheme(colorSchemeQueryList)
colorSchemeQueryList.addEventListener('change', setColorScheme)
