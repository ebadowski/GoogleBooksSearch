import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import Search from "./components/Pages/Search/Search";
import Saved from "./components/Pages/Saved/Saved";
// import AdminAction from "./components/Pages/admin-action/AdminAction"
// import AdminUsers from "./components/Pages/admin-userlist/AdminUserList";


function App() {
    return (
        
            <Router>
                <Navbar></Navbar>
                <div>
                    <Wrapper>
                        <Route exact path="/" component={Saved} />
                        <Route exact path="/search/" component={Search} />
                        <Route exact path="/saved/" component={Saved} />
                    </Wrapper>
                </div>
            </Router>
    );
}

export default App;
