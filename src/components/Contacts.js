import React, { Component } from 'react';
import { contacts } from '../config/constants.js';
import SearchBar from './SearchBar'
import Contact from "./Contact"

export default class ContactsApp extends Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            contacts: contacts,
            filteredContacts: contacts
        };
    }

    filterContacts(filterBy) {
        this.setState({
            ...this.state,
            filterText: filterBy,
            filteredContacts: this.state.contacts.filter(
                (contact) => contact.name.toLowerCase().indexOf(filterBy) !== -1)
        });
    }

    handleUserInput(searchTerm) {
        if (searchTerm.target.value.length >= 3) {
            this.filterContacts(searchTerm.target.value)
        } else if (searchTerm.target.value.length === 0) {
            this.setState({
                ...this.state,
                filterText: '',
                filteredContacts: this.state.contacts
            })
        } else {
            this.setState({
                ...this.state,
                filterText: searchTerm.target.value
            });
        }
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        this.setState({
            ...this.state,
            filteredContacts: this.state.filteredContacts.sort(this.compareBy(key))
        });
    }

    render() {
        return (
            <div>
                <div className="filter_con">
                    <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                    <button className="filter-button" onClick={() => this.sortBy('age')}>Sort By Age</button>
                </div>
                <table className="contacts-table">
                    <thead>
                        <tr>
                            <th className="table_el" />
                            <th className="table_el">ID</th>
                            <th className="table_el">Image</th>
                            <th className="table_el">Name</th>
                            <th className="table_el">Last Name</th>
                            <th className="table_el">Age</th>
                            <th className="table_el">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredContacts.map(
                            (contact) =>
                                <Contact
                                    key={contact.id}
                                    id={contact.id}
                                    img={contact.img}
                                    name={contact.name}
                                    lastname={contact.lastname}
                                    age={contact.age}
                                    email={contact.email}
                                />
                        )}
                    </tbody>
                </table>
                <br />
                <div className="res_length">We have got {this.state.filteredContacts.length} results.</div>
            </div>
        )
    }
}
