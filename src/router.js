import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./routes/Home"
import NewStudent from "./routes/NewStudent"
import EditStudent from "./routes/EditStudent"

const Roteador = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/newstudent">
                    <NewStudent />
                </Route>
                <Route path="/editstudent/:id">
                    <EditStudent />
                </Route>
            </Switch>
    </Router>
    )
}

export default Roteador