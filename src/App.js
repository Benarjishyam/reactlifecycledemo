import React from "react";

//Class Component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: "Hello World!"
        };
    }
 
    componentDidMount() {
        console.log("2.Mounting Stage method componentDidMount() called");
    }
 
    changeState() {
        this.setState({ message: "Hey, The Message is changed to Hello Aliens..!" });
        console.log("state changed")
    }
 
    render() {
        return (
            <div>
                <h1>
                    This is Demo for Component Lifecyle methods 
                    Current Message:{this.state.message}
                </h1>
                <h2>
                    <a
                        onClick={this.changeState.bind(
                            this
                        )}
                    >
                        Press Here!
                    </a>
                </h2>
            </div>
        );
    };
 
    shouldComponentUpdate(nextProps, nextState) { //updated state and props
        console.log("3.Update Phase shouldComponentUpdate()");
        return true;
    }
 
    componentDidUpdate() {
        console.log("3.Update Phase componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log("4. Unmounting Stage-> componentWillUnmount() called. ")
    }
}

export default App;