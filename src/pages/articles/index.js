import React from "react";
import Article1 from "./article1";
import Article2 from "./article2";
import GettysburgAddress from "./gettysburg_address";
import Pericles from "./pericles";

export default class Articles extends React.Component {
    render() {
        let { match } = this.props;
        let MyComponent = Pericles;
        console.log("ooo")
        switch (match.params.art) {
            case 'art1':
                MyComponent = Article1
                break
            case 'art2':
                MyComponent = Article2
                break
            case 'gettysburg_address':
                MyComponent = GettysburgAddress
                break
            case 'pericles_funeral_oration':
                MyComponent = Pericles
                break
            default:
                MyComponent = () => (<div>404</div>);
                break
        }
        return (
            <>
                {<MyComponent />}
            </>
        )
    }
}