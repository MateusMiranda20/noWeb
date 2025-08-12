import { BannerNotbook } from './styles'

import Imagee from '../../../assets/imagee.png'

export default function Banner() {
  return (
    <>
        <BannerNotbook>
            <img src={Imagee} alt="Pessoa usando o notebook" />
        </BannerNotbook>
    </>
  )
}

