import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
                    date: '2017-03-01',
                    lifting: true,
                    cardio: false
                },
                {
                    gym: 'Arena Gym',
                    date: '2017-03-03',
                    lifting: false,
                    cardio: true
                },
                {
                    gym: 'Top Gym',
                    date: '2017-03-07',
                    lifting: false,
                    cardio: true
                }
            ]
        }
        this.addNewDay = this.addNewDay.bind(this)
    }
    addNewDay(newDay) {
        this.setState({
            allGymDays: [
                ...this.state.allGymDays, newDay
            ]
        })
    }
    countDays(filter) {
        const { allGymDays } = this.state
        return allGymDays.filter(
            (day) => (filter) ? day[filter] : day
        ).length
    }

    render() {
        console.log(this.props);
        return (
            <Router>
                <div className="app">
                    <Route exact path='/' render={
                        () =>
                            <GymDaysCounter total={this.countDays()}
                                lift={this.countDays("lifting")}
                                cardio={this.countDays("cardio")}
                                goal={100}
                            />

                    } />
                    <Route exact path='/:page' render={
                        ({ location}) => 
                    (location.pathname === '/add-day') ?
                            <AddDayForm onNewDay={this.addNewDay} /> :
                            <GymDayList days={this.state.allGymDays} />
                    } />
                    <Route path='/:page/:filter' render={
                        ({match}) => <GymDayList days={this.state.allGymDays}
                            filter={match.params.filter}
                        />
                    } />
                    <Menu />
                </div>
            </Router>
        )
    }
}
export default App
