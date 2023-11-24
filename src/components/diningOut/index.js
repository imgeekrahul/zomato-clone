import React from 'react'
import './diningOut.css'
import Collection from '../common/collection/index'
import { diningOut } from '../../data/diningOut'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'

const collectionList = [
  {
      id: 1,
      title: "22 Live Cricket Screenings",
      cover: "https://b.zmtcdn.com/data/collections/ef140246fb4f5b15717d0ac120a303e0_1693550394.png",
      places: "12 places"
  },
  {
      id: 2,
      title: "10 Unique Dining Experiences",
      cover: "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
      places: "10 places"
  },
  {
      id: 3,
      title: "21 Best Insta-worthy Places",
      cover: "https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
      places: "20 places"
  },
  {
      id: 4,
      title: "21 Romantic Dining Places",
      cover: "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
      places: "19 places"
  },
  {
      id: 5,
      title: "7 Celebrity Owned Places",
      cover: "https://b.zmtcdn.com/data/collections/b283b7b84679debdb6275be02fdd76b5_1674569878.jpg",
      places: "7 places"
  },
  {
      id: 6,
      title: "26 Serene Rooftop Places",
      cover: "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
      places: "27 places"
  },
  {
      id: 7,
      title: "19 Newly Opened Restaurants",
      cover: "https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
      places: "14 places"
  },
  {
      id: 8,
      title: "14 Must-Visit Legendary Places",
      cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120012.jpg",
      places: "14 places"
  }
]

const diningFilters = [
  {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: 'Filters'
  },
  {
      id: 2,
      title: 'Rating: 4.0+'
  },
  {
      id: 3,
      title: 'Safe and Hygenic'
  },
  {
      id: 4,
      title: 'Pure Veg'
  },
  {
      id: 5,
      title: 'Delivery Time',
      icon: <i class="fi fi-rr-apps-sort absolute-center"></i>
  },
  {
      id: 6,
      title: 'Great Offers'
  }
]

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
        <Collection list={collectionList} />
        <div className='max-width'>
          <Filters filtersList={diningFilters} />
        </div>
        <ExploreSection list={diningList} collectionName={"Trending dining restaurant in Lucknow"} />
    </div>
  )
}

export default DiningOut