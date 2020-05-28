import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alvi Geovanny</h2>
            <img
              src={require("../img/alvi.jpeg")}
              alt="Alvi G"
              style={{ height: "250px", width: "200px" }}
              className="me"
            />
            <p style={{ width: "75%", margin: "auto" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+62) 812-7578-2481
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-whatsapp" aria-hidden="true"/>
                    (+62) 812-7578-2481
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Alvigeovan29@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                    Alvi Geovanny
                </ListItemContent>
              </ListItem>
            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
