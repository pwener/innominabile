import Typography from "typography"

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 2,
  headerFontFamily: ['Bad Script', 'cursive'],
  bodyFontFamily: ['Bad Script', 'cursive'],
  googleFonts: [
  {
    name: 'Bad Script',
    styles: [
      '300',
      '400',
      '500',
      '600',
      '700'
    ],
  }
]
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
