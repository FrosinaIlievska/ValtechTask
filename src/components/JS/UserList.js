import React, { Component } from 'react';
import * as showEmail from "./AdditionalFunctions.js";
import { contacts } from "./constants.js";

export default class ContactsApp extends Component {
	constructor(){
		super();
		this.state={
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

	handleUserInput(searchTerm){
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
        // let sortedContacts = this.state.filteredContacts.sort(this.compareBy(key));
        this.setState({
            ...this.state,
            filteredContacts: this.state.filteredContacts.sort(this.compareBy(key))
        });
    }

	render(){
		return(
			<div>
                <div className="filter_con">
			        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
                    <button className="filter-button" onClick={() => this.sortBy('age')}>Sort By Age</button>
                </div>
                <table className="table1">
                    <tbody>
                        <tr>
                            <th className="table_el">ID</th>
                            <th className="table_el">Image</th>
                            <th className="table_el">Name</th>
                            <th className="table_el">Age</th>
                            <th>Email</th>
                        </tr>
                    </tbody>
                </table>
                <ContactList contacts={this.state.filteredContacts} />
            </div>
        )
	}
}

class SearchBar extends Component {
	handleChange(event){
		this.props.onUserInput(event)
	}
	render(){
		return <input type="search"
			placeholder="Filter users"
            onChange={this.handleChange.bind(this)}
            value={this.props.filterText} className="filter-input"/>
		}
}

class ContactList extends Component {
	render() {
        let filter_length = this.props.contacts.length;
		return (
            <div>
			<ul>
			{this.props.contacts.map(
				(contact) =>
                    <ContactItem
                        key={contact.id}
                        id={contact.id}
                        img={contact.img}
                        name={contact.name}
                        lastname={contact.lastname}
                        age={contact.age}
                        email={contact.email}
                    />
				)}
			</ul><br/>
            {filter_length === 0? <div className="res_length">Results are empty</div> : 
                <div className="res_length">We have got {filter_length} results.</div>}
            </div>
				)
	        }
}

class ContactItem extends Component {
	render() {
        // Clicking on list item will always show the first item email, missing the map function
        // this.props.items.map(function(key) {
        return (
        <div>
            <li className="final_list" onClick={showEmail} style={{ listStyleType: "none" }}>
                <span>{this.props.id}</span>
                <span><img src={this.props.img} alt="t1"/></span>
                <span>{this.props.name}</span>
                <span>{this.props.lastname}</span>
                <span>{this.props.age}</span>
                <span>{this.props.email}</span>
            </li>
        </div>
                )
        // })
	}
}
