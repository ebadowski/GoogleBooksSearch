import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Search from "./components/Pages/Search/Search";
import TestPage from "./components/testPage/testPage";
// import AdminAction from "./components/Pages/admin-action/AdminAction"
// import AdminUsers from "./components/Pages/admin-userlist/AdminUserList";


function App() {
    return (
        <Router>
            <div>
                {/* THIS IS FOR TESTING, CHANGE ROUTING / EXPRESS LATER */}
                <Wrapper>
                    <Route exact path="/" component={TestPage} />
                    <Route exact path="/search/" component={Search} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;
