import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GymDayRow from './GymDayRow'

const GymDayList = ({ days, filter }) => {
    const filterDays = (!filter || 
    !filter.match(/lifting|cardio/)) ? 
    days : 
    days.filter( day => day[filter])
    return (
        <div className="gym-day-list">
            <table>
                <caption>Your gym days</caption>
                <thead>
                    <tr>
                        <td colSpan={4}>
                            <span>Filter by: </span>
                            <Link to='/list-days'> All days </Link>
                            <Link to='/list-days/lifting'> Lifting days </Link>
                            <Link to='/list-days/cardio'> Cardio days </Link>
                        </td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <th>Gym</th>
                        <th>Lifting</th>
                        <th>Cardio</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {filterDays.map((day, i) => (
                        <GymDayRow key={i}
                            {...day} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default GymDayList

GymDayList.propTypes = {
    days: PropTypes.array.isRequired
}