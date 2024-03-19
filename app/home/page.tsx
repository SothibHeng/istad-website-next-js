import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SliderComponent from '../components/SliderComponent'

export default function Home() {
  return (
    <div>
      {/* header */}
      <header>
        {/* Nav-bar */}
        <NavbarComponent/>
      </header>
      {/* main */}
      <main>
        {/* slider */}
        <SliderComponent/>
      </main>
      {/* footer */}
      <footer>

      </footer>
    </div>
  )
}
