import React from "react";
import Child from "./Child"

class Parent extends React.Component{
    constructor (){
        super();
        this.state ={
            name1 :"Prakash",
            name2 :"Priyanak",
            name3 :"rajkumar",
            company1 :"edureka",
            company2:"unacadamy",
            company3:"upgrade",
            wellcome:"wellcome to codecouch",
            value : 0

        }
    }
    handleIncrement =()=>{
        const {value} =this.state;
        this.setState({value : value +1});
    };
    handleDecrement =()=>{
        const {value} =this.state;
        this.setState({value : value -1});
    };

    render(){
        const {name1,name2,name3,company1,company2,company3,wellcome,value}=this.state
        return(
            <div>
                <h1>{value}</h1>
                <button onClick ={this.handleIncrement}>Increment</button>
                <button onClick ={this.handleDecrement}>Decrement</button>
                <br/>
                {wellcome}
                <br />
                Parent Components
                <Child name ={name1} company={company1}/>
                <Child name ={name2} company={company2}/>
                <Child name ={name3}company={company3}/>
            </div>
        )
    }
};

export default Parent;