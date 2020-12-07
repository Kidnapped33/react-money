import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

const Main = styled.div`
flex-grow: 1;
overflow: auto;
`;

const Nav = styled.nav`
border: 2px solid green;
  >ul {
   display: flex;
     >li{
     border: 2px solid green;
     width: 33.3333%;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 16px 0 ;
  }
}
`;

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to="tags">标签页</Link>
                        </li>
                        <li>
                            <Link to="/money">记账页</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计页</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return <h2>404页面</h2>;
}

function Statistics() {
    return <h2>统计页</h2>;
}

function Tags() {
    return <h2>标签页</h2>;
}

function Money() {
    return <h2>记账页</h2>;
}

export default App;
