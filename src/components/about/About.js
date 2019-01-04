import React, {Component} from 'react';
import './About.css'

class About extends Component {

    render(){
        return(
            <div className="background">
            <br></br>
            <br></br>
            <br></br>
            <div className="madSkrilla"> Your Business name</div>
            <div className="first">
            
                <img src="https://images.unsplash.com/photo-1481065385650-7f385ab2becc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
           
                <div className="createUser">
                here's a quick description of your business
                </div>
            </div>

            <div className="divider">
            <br></br>
            
            <div className="aboutMad">
                <div>
                Your t-shirt business is dedicated to providing honest pricing and fast shipping to our customers.
                </div>
                <br></br>
                <div>

                There's no need to go to a competitor or whatever. 
                </div>
                <br></br>
                Check out some of our products we've made for our clients. Kidding, they're just random pictures I found. Also, it would be pretty dope and not hard if you want these pictures to link to some of your "client stories".
            </div>
              <div className="imageSizing">
                  <img src="https://images.unsplash.com/photo-1542838454-d4dce2a7cfde?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"/>
                  
                  <img src="https://images.unsplash.com/photo-1536141495324-a48c4f2abffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"/>

                  <img src="https://images.unsplash.com/photo-1511165967309-7799365e323a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />

                  <img src="https://images.unsplash.com/photo-1542838776-95074863c536?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
              </div>

            <div className="aboutMad">
                <div>
                blah blah blah
                </div>
                
                <div>
                blah blah blah blah blah
                </div>
                
            </div>
            <div className="myAbout">
                any small print you may want. Also, I want some credit for this work. Made by Tyler Eftink consulting LLC.
            </div>
            </div>
        </div>
        )
    }
}
export default About;