import React, {Component} from 'react';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showAdditionalInfo: false
        };
    }

    handleAdditionalInfo() {
        this.setState({
            ...this.state,
            showAdditionalInfo: !this.state.showAdditionalInfo
        })
    }

    render() {
        return (
            <tr>
                <td>
                    <button className="button" onClick={() => this.handleAdditionalInfo()}>Show additional info</button>
                </td>
                <td>
                    <p>{this.props.id}</p>
                </td>
                <td>
                    <img className="contact-img" src={this.props.img} alt="t1"/>
                </td>
                <td>
                    <p>{this.props.name}</p>
                </td>
                <td>
                    <p>{this.props.lastname}</p>
                </td>
                <td>
                    <p>{this.props.age}</p>
                </td>
                {this.state.showAdditionalInfo ?
                    <>
                        <td>
                            {this.props.email}
                        </td>
                    </>
                    : null
                }
            </tr>
        )
    }
}
