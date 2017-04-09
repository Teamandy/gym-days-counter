import React from 'react'
import GymDayList from './GymDayList'
import GymDaysCounter from './GymDaysCounter'
import AddDayForm from './AddDayForm'
import { Whoops404 } from './Whoops404'
import Menu from './Menu'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            allGymDays: [
                {
                    gym: 'Smart Gym',
                    date: new Date(2017, 2, 1),
                    lifting: true,
                    cardio: false
                },
                {
                    gym: 'Arena Gym',
                    date: new Date(2017, 2, 3),
                    lifting: false,
                    cardio: true
                },
                {
                    gym: 'Top Gym',
                    date: new Date(2017, 2, 7),
                    lifting: false,
                    cardio: true
                }
            ]
        }
    }

    countDays(filter) {
        const { allGymDays } = this.state
        return allGymDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length
    }

    render() {
        console.log(this.props)
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === '/') ?
                    <GymDaysCounter total={this.countDays()}
                        lift={this.countDays("lifting")}
                        cardio={this.countDays("cardio")}
                        goal={100}
                    /> : (this.props.location.pathname === '/add-day') ? 
                    <AddDayForm /> : (this.props.location.pathname === '/list-days') ?
                    <GymDayList days={this.state.allGymDays} /> : <Whoops404 />
                }
            </div>
        )
    }
}
export default App
