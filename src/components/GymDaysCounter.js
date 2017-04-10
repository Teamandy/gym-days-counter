import React from 'react'
import PropTypes from 'prop-types'

import Lift from 'react-icons/lib/md/fitness-center'
import Cardio from 'react-icons/lib/md/directions-bike'
import Total from 'react-icons/lib/fa/calendar'

import '../styles/ui.scss'

const decimalToPercent = (decimal) => (
    decimal * 100 + '%'
)
const calcGoalProgress = (goal, total) => (
    decimalToPercent(total / goal)
)

const GymDaysCounter = ({ total, lift, cardio, goal }) => (
    <div className="gym-days-count">
        <div className="total-days">
            <span>{total}</span>
            <Total />
            <span className="text-days">days</span>
        </div>
        <div className="lifting-days">
            <span>{lift}</span>
            <Lift />
            <span className="text-days">days</span>
        </div>
        <div className="cardio-days">
            <span>{cardio}</span>
            <Cardio />
            <span className="text-days">days</span>
        </div>
        <div className="goal">
            <span>{calcGoalProgress(goal, total)}</span>
        </div>
    </div>
)

export default GymDaysCounter

GymDaysCounter.defaultProps = {
    total: 0,
    lift: 0,
    cardio: 0,
    goal: 100
}
GymDaysCounter.propTypes = {
    total: PropTypes.number.isRequired,
    lift: PropTypes.number.isRequired,
    cardio: PropTypes.number.isRequired,
    goal: PropTypes.number
}