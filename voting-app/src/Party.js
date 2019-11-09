import React from "react"
import { Image, Jumbotron, Button } from "react-bootstrap";


class Party extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        alert(this.props.name);
    }

    render() {
        return (
            <Jumbotron style={this.props.style}>
                <Image src={this.props.pic} fluid />
                <h3>{this.props.name}</h3>
                <p style={{maxWidth: '400px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel augue eu sapien congue iaculis. Phasellus tristique mauris nulla, sed egestas lorem efficitur finibus. Morbi ultricies libero vel vulputate vulputate. Pellentesque hendrerit mi a condimentum elementum. Curabitur ullamcorper consequat ipsum vel congue. Integer et hendrerit dolor. Sed fermentum purus tempor, sodales leo eget, posuere diam. Nam eget placerat tortor. Etiam sem mi, sodales quis tellus vitae, gravida eleifend mi. Aliquam posuere, ex quis lacinia iaculis, ligula eros congue dolor, et placerat tellus massa nec velit. Quisque at porta mi. Aliquam volutpat laoreet metus id interdum. Proin convallis dictum mattis. Donec mattis massa fermentum, tincidunt risus eu, ullamcorper enim. Ut venenatis nibh eget tortor pulvinar tincidunt. </p>
                <Button onClick={this.handleClick}>Vote</Button>
            </Jumbotron>
        )
    }
}

export default Party