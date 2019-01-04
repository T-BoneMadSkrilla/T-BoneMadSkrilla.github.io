import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import './UserPost.css';


class UserPost extends Component{
    
    //questions: how many shirts would you like
    //how many color options would you like 
    //what are the colors of shirts
    //how many colors does your design need? or send us a url of your design

          //change that doesn't do anything
            render() {
              return (
                  <div>
                      <br></br>
                    <form class="form-style-9" action="mailto://tylereftink@gmail.com" method="GET">
                      <p>Hey, potential client! You should email us with your information and how many shirts you want.</p>
                        <ul>
                            <li>
                                <input type="text" name="subject" class="field-style field-full align-none" placeholder="Subject" />
                            </li>
                            <li>
                                <textarea  name="body" class="field-style" placeholder="Message"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Send Message" />
                            </li>
                        </ul>
                    </form>


                   <div className="icons">
                    <SocialIcon url="http://twitter.com/" />
                   
                    <SocialIcon url="http://facebook.com/" />
                    
                    <SocialIcon url="http://linkedin.com/"/>
                    
                    <SocialIcon url="http://instagram.com/"/>
                   </div>
                    
                

                  </div>
              );
            }
        }
        
        export default UserPost;
        
        
        // <input name="body" placeholder="phone number"/>
        // <input name="body" placeholder="how many shirts would you like to order?"/>
        // <input name="body" placeholder="how many colors options would you like?"/>
        // <input name="body" placeholder="what are the colors of the shirts?"/>
        // <input name="body" placeholder="how many colors does your design need?"/>