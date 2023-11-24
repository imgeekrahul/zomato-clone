import React from 'react'
import './nightlife.css'
import Collection from '../common/collection'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
import { nightLife } from '../../data/nightLife'

const nightFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters'
  },
  {
    id: 2,
    icon: <i class="fi fi-rr-angle-down absolute-center"></i>,
    title: 'Pro Offers'
  },
  {
    id: 3,
    icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
    title: 'Distance'
  },
  {
    id: 4,
    title: 'Rating 4.0+'
  },
  {
    id: 5,
    title: 'Pubs & Bars'
  }
]

const collectionList = [
  {
    id: 1,
    title: "21 Lit Party Places",
    cover: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg?output-format=webp",
    places: "21 Places"
  },
  {
    id: 2,
    title: "19 Finest Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg?output-format=webp",
    places: "18 Places"
  }
]

const nightList = nightLife
const Nightlife = () => {
  return (
    <div>
        <Collection list={collectionList} />
        <div className='max-width'>
          <Filters filtersList={nightFilters} />
        </div>
        <ExploreSection list={nightList} collectionName={"Nightlife Reataurants in Lucknow"} />
    </div>
  )
}

export default Nightlife