import { createContext, useContext } from 'react'
import partyImage1 from '../assets/party1.png'
import partyImage2 from '../assets/party2.png'
import partyImage3 from '../assets/party3.png'
import concertImage1 from '../assets/concert1.png'
import concertImage2 from '../assets/concert2.png'
import concertImage3 from '../assets/concert3.png'
import gardenImage1 from '../assets/office1.png'
import gardenImage2 from '../assets/office2.png'
import gardenImage3 from '../assets/office3.png'

export const charContext = createContext({
  dataset : {
    party : {
      person1: ['Jenna', partyImage1],
      person2: ['Alex', partyImage2],
      person3: ['Marcus', partyImage3],
    },
    concert : {
      person1: ['Taylor', concertImage1],
      person2: ['Casey', concertImage2],
      person3: ['Jordan', concertImage3],
    },
    garden : {
      person1: ['Evelyn', gardenImage1],
      person2: ['Leo', gardenImage2],
      person3: ['Jen', gardenImage3],
    },
  }
})

export const CharProvider = charContext.Provider

export default function useChar() {
  return useContext(charContext)
}
