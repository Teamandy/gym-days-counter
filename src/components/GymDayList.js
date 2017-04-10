import React, { PropTypes } from 'react'
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
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Gym</th>
                        <th>Lifting</th>
                        <th>Cardio</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to='/list-days'> All days </Link>
                            <Link to='/list-days/lifting'> Lifting days </Link>
                            <Link to='/list-days/cardio'> Cardio days </Link>
                        </td>
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