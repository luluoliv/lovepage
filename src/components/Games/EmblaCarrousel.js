import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import PostFeature from '../../hooks/Features/PostFeature'
import './EmblaCarrousel.css'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const data = props.data
  //console.log(data)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            data && data.length > 0 ? (
              data.map((item, index) => (
                <>
                  <div className={props.selectedgame == item ? 'game-item selected-game' : 'game-item'}
                    onClick={()=>props.setSelectedGame(item)}
                  >
                    <img
                      className={`game-photo ${index === 0 ? 'first-image' : ''}`}
                      src={item.background_image}
                      alt={`Image ${index}`}
                    />
                    <p className="game-name">
                      {item.name}
                    </p>
                  </div>
                </>
              ))
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
