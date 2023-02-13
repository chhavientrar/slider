import { styled, Typography ,Box} from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

const bgImages = ["https://www.ustm.ac.in/wp-content/uploads/2023/01/WEB-Poster-copy.jpg",
"https://www.ustm.ac.in/wp-content/uploads/2021/11/7-1.jpeg" , 
"https://www.ustm.ac.in/wp-content/uploads/2020/05/1-copy.jpg",
"https://www.ustm.ac.in/wp-content/uploads/2020/05/Slider-Sports.jpg",
"https://www.ustm.ac.in/wp-content/uploads/2022/11/Prof-Govindan-Rangarajan-Director-IISC-scaled.jpg"
];


const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 400,
 
  
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));
const Title = styled(Typography)(({theme})=>({
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
}))



const Banner = ({bannerData}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      

    >

      
     

      {bgImages.map((item, i) => (
        
     
            <Box>
                   <Image
              key={i}
              src={item}
              alt={`Amazon Background ${i}`}
          
            />
       
            </Box>
         
      ))}
        
    </Carousel>
  );
};

export default Banner;