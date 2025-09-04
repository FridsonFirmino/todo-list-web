import { Sour_Gummy, Poppins } from 'next/font/google'

const sourGummy = Sour_Gummy({
  weight: ['400', '500', '600', '700'],
  variable: '--font-sour-gummy',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

export const fonts = {
  sourGummy,
  poppins,
}
