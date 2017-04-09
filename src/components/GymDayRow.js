import React, { PropTypes } from 'react'
import Lift from 'react-icons/lib/md/fitness-center'
import Cardio from 'react-icons/lib/md/directions-bike'
import Total from 'react-icons/lib/fa/calendar'

const GymDayRow = ({ gym, date, lifting, cardio }) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
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
    date: PropTypes.instanceOf(Date).isRequired,
    lifting: PropTypes.bool,
    cardio: PropTypes.bool
}