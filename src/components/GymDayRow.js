import React from 'react'
import PropTypes from 'prop-types'
import Lift from 'react-icons/lib/md/fitness-center'
import Cardio from 'react-icons/lib/md/directions-bike'
import Total from 'react-icons/lib/fa/calendar'

const GymDayRow = ({ gym, date, lifting, cardio }) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {gym}
        </td>
        <td>
            {(lifting) ? <Lift /> : null}
        </td>
        <td>
            {(cardio) ? <Cardio /> : null}
        </td>
    </tr>
)
export default GymDayRow

GymDayRow.propTypes = {
    gym: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    lifting: PropTypes.bool,
    cardio: PropTypes.bool
}