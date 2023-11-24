import React from 'react'
import './filters.css'
import FilterItem from './filterItem'

const Filters = ({filtersList}) => {
  return (
    <div className='filters'>
        {filtersList && filtersList.map((filter) => {
            return <div>
                <FilterItem filter={filter} key={filter.id} /> 
            </div>
        })}
    </div>
  )
}

export default Filters