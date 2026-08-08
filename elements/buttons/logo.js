export const Logo = () => {
  const img = document.createElement('img')
  img.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x91dp.png'
  img.alt = 'Google'
  img.className = 'google-logo'
  return img
}