import React from 'react'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import './topBrands.css';


const topBrandsList = [
    {
        id: 1,
        time: "25 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"
    },
    {
        id: 2,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp"
    },
    {
        id: 3,
        time: "42 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp"
    },
    {
        id: 4,
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/4bf3cd23b591c0292aba5fe476fadbef_1625160389.png?output-format=webp"
    },
    {
        id: 5,
        time: "31 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png?output-format=webp"
    },
    {
        id: 6,
        time: "23 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/28650b1e4109f8a6ad34c5fc5cb5b2a7_1602854588.png?output-format=webp"
    },
    {
        id: 7,
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/a17fb823f0ffbadcba40cc5338ac6134_1617874958.png?output-format=webp"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
       <div className='collection-title'>Top brands for you</div>
       <Slider {...settings}>
        {
            topBrandsList.map((brand) => {
                return (
                    <div>
                        <div className='top-brands-cover'>
                            <img src={brand.cover} className='top-brands-image' alt={brand.time} />
                        </div>
                    </div>
                )
            })
        }
       </Slider>
    </div>
  )
}

export default TopBrands