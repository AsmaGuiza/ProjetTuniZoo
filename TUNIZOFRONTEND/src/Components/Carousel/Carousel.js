import * as React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './Carousel.css';




const data = [

 
  {
    image: "https://cdn.shopify.com/s/files/1/0278/2812/5749/files/panda-roux.jpg?v=1633462914",
    
  },
  {
    image: "https://images.radio-canada.ca/q_auto,w_960/v1/ici-premiere/16x9/mlarge-chats-chatons.jpg",
    
  },
  {
    image: "https://www.whoa.in/download/cute-rabbits-animal-wallpapers"
  },
  {
    image: "https://www.fodors.com/wp-content/uploads/2020/03/CutestBabyAnimals__HERO_shutterstock_115739671.jpg",
    
  },
  {
    image: "https://voyage-onirique.com/wp-content/uploads/2021/03/puppy-snout-dog-wallpaper.jpg",
   
  },
  {
    image: 'https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg',
    
  },
  {
    image: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/choisir-animal-de-compagnie.jpg",
    
  },
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}
function SwipeableTextMobileStepper() {


  return (
    <div>
          <div className='CarouselContainer' id="homePage">
                <Carousel
                  data={data}
                  time={1500}
                  width="100%"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="0px"
                  slideNumber={false}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="white"
                  slideImageFit="cover"
                  
                  style={{
                    
                    textAlign:'center', 
                    maxWidth: "100%",
                    maxHeight: "500px",margin: "0 auto",
                   
                  }}
                  
                />
            </div>   
</div>
  );
}

export default SwipeableTextMobileStepper;