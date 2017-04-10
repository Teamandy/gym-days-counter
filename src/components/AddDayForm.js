import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddDayForm extends Component {
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        console.log(this.dateInput.value)
    }
    render() {
        const { gym, date, lifting, cardio } = this.props
        return (
            <form onSubmit = {this.submit} className="add-day-form">

                <label htmlFor="gym">Gym</label>
                <input id='gym'
                    type="text"
                    required
                    defaultValue={gym} 
                    ref={(input) => {this.gymInput = input}}/>

                <label htmlFor="date">Date</label>
                <input id='date'
                    type="date"
                    required
                    defaultValue={date} 
                    ref={(input) => {this.dateInput = input}}/>

                <div>
                    <label htmlFor="date">Lifting Day:</label>
                    <input id='lifting'
                        type="checkbox"
                        name='activity'
                        defaultChecked={lifting} 
                        ref={(check) => {this.liftingCheck = check}}/>
                </div>

                <div>
                    <label htmlFor="date"> or Cardio Day:</label>
                    <input id='cardio'
                        type="checkbox"
                        name='activity'
                        defaultChecked={cardio} 
                        ref={(check) => {this.cardioCheck = check}}/>
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