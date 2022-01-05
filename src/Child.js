import React from "react";

class Child extends React.Component{
    render(){
        return(
            <div>
                <div>
                    hello from {this.props.name}
                </div>
                <div>
                Child Components {this.props.company}
                </div>
            </div>
        )
    }
};

export default Child;