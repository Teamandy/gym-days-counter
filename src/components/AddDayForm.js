import React, { Component } from 'react'
import PropTypes from 'prop-types'

const gymList = [
    'Smart Gym',
    'Arena Gym',
    'Top Gym',
    'Alex Fitness',
    'WorldClass Gym'
]

class AddDayForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        e.preventDefault()
        this.props.onNewDay({
            gym: this.gymInput.value,
            date: this.dateInput.value,
            lifting: this.liftingCheck.checked,
            cardio: this.cardioCheck.checked
        })
        this.gymInput.value = ''
        this.dateInput.value = ''
        this.liftingCheck.checked = false
        this.cardioCheck.checked = false
    }
    render() {
        const { gym, date, lifting, cardio } = this.props
        return (
            <form onSubmit={this.submit} className="add-day-form">
                <div className='select-gym'>
                    <label htmlFor="gym">Select gym</label>
                    <input id='gym'
                        list='gym-list'
                        type='text'
                        required
                        ref={(input) => { this.gymInput = input }} />
                    <datalist id='gym-list'>
                        {gymList.map(
                            (opt, i) => <option key={i}>{opt}</option>)
                        }
                    </datalist>
                </div>
                <div className='select-date'>
                    <label htmlFor="date">Date</label>
                    <input id='date'
                        type="date"
                        required
                        defaultValue={date}
                        ref={(input) => { this.dateInput = input }} />
                </div>
                <div className='select-lifting'>
                    <label htmlFor="date">Lifting day:</label>
                    <input id='lifting'
                        type="checkbox"
                        name='activity'
                        defaultChecked={lifting}
                        ref={(check) => { this.liftingCheck = check }} />
                </div>

                <div className='select-cardio'>
                    <label htmlFor="date"> or Cardio day:</label>
                    <input id='cardio'
                        type="checkbox"
                        name='activity'
                        defaultChecked={cardio}
                        ref={(check) => { this.cardioCheck = check }} />
                </div>

                <button>Add day</button>
            </form>
        )
    }
}

export default AddDayForm

AddDayForm.defaultProps = {
    gym: 'Arena Gym',
    date: '2017-05-12',
    lifting: true,
    cardio: false
}

AddDayForm.propTypes = {
    gym: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    lifting: PropTypes.bool,
    cardio: PropTypes.bool
}