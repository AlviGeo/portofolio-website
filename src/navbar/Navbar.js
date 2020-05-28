import React, { Component } from "react";
import "./navbar.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "../component/Main";
import { Link } from "react-router-dom";



class Navbar extends Component {
    render() {
        return (
            <div className="demo-big-content">
      <Layout>
      <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Alvi G</Link>} scroll>
            <Navigation>
                <Link to="/About">About Me</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/">Resume</Link>
            <Link to="/About">About</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
        )
    }
}
export default Navbar;
