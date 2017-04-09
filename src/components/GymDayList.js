import React, { PropTypes } from 'react'
import GymDayRow from './GymDayRow'

const GymDayList = ({ days }) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Gym</th>
                <th>Lifting</th>
                <th>Cardio</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => (
                <GymDayRow key={i}
                    {...day} />
            ))}
        </tbody>
    </table>
)
export default GymDayList

GymDayList.propTypes = {
    days: PropTypes.array.isRequired
}