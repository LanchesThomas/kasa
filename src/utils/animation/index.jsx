import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
0% {opacity:0;}
100%{opacity: 1}
`

export const translate = keyframes`
0% {transform: translateY(50%)}
100% {transform: translateY(0%)}
`

export const rightSlides = keyframes`
0% {transfrom: translateX(-100%)}
100% {transform: translateX(100%)}
`
export const leftSlides = keyframes`
0% {transfrom: translateX(100%)}
100% {transform: translateX(-100%)}
`


