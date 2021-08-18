import React from "react";
import Article1 from "./article1";

export default class Articles extends React.Component {
    render() {
        let { match } = this.props;
        let MyComponent = () => (<div>404</div>);
        switch (match.params.art) {
            case 'art1':
                MyComponent = Article1
                break
            default:
                break
        }
        return (
            <>
                {<MyComponent />}
            </>
        )
    }
}