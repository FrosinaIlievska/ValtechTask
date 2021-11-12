import React, { Component } from 'react';

export default class SearchBar extends Component {
    handleChange(event) {
        this.props.onUserInput(event)
    }

    render() {
        return <input type="search"
                      placeholder="Filter users"
                      onChange={this.handleChange.bind(this)}
                      value={this.props.filterText} className="filter-input" />
    }
}
