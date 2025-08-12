import { SectionVideo, PlayButoon } from "./styles"

import Retangle from '../../../assets/Rectangle.png'

export default function video() {
  return (
    <>
        <SectionVideo>
            <PlayButoon>
            <span>PLAY VIDEO</span>
            </PlayButoon>
            <img src={Retangle} alt="Pessoas" />
        </SectionVideo>
    </>
  )
}



