import react from "react";
import { Component } from "react";
import {  Link } from "react-router-dom";


class Content extends Component{
    constructor(){
        super()
        this.state = {
          count: 0,
          click: true,
          image: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.reset = this.reset.bind(this)
        this.generateImage = this.generateImage.bind(this)
      }
    
      handleClick(eve){
        console.log("hello!!!")
        const {className} = eve.target 
        if (className === "button"){
          this.setState(prevState => {
            return{
              count: prevState.count+1
            }
          })
        }

        
        else{
          this.setState(prevState => {
            return{
              click: !prevState.click
            }
          }
          )
        }
      }
    
      handleChange(event){
        console.log(event)
        const {name, value} = event.target
        console.log(name, value)
    
      }


      generateImage(){
        
        this.state.image === "" ? this.setState({image: "https://i0.wp.com/www.nbaanalysis.net/wp-content/uploads/2021/08/Just-how-good-are-the-new-look-Miami-Heat-1.jpeg?resize=678%2C381&ssl=1"}) : this.setState({image: ""})
        
        console.log(this.state.image)
        console.log("clicked")
      }

    
      reset(){
        this.setState({
            count: 0 
          
        })
      }
    
      render() {
        return (   
          <div>
            <h2> MEME GENAERATOR SECTION </h2>

            <button onClick={this.generateImage}> Generate image </button>
            
            <br/>
            <img src={this.state.image}/>

            <br/>

            <input 
              type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleChange}
              placeholder="First Name"
            />
    
            <br/>
    
            <input 
              type="text"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
            />
    
            <br/>
    
            <label>
              <input
                type="checkbox"
                checked={this.state.click}
                onChange={this.handleClick}
              />
    
              JJASON
            </label>
    
                
    
    
    
            <h1>{this.state.count}</h1>
            <button className="button" onClick={this.handleClick}> Click me </button>
            <button className="" onClick={this.reset}>Reset</button>
          </div>
        )
    }

}
    
      


export default Content