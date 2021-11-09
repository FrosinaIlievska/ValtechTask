import React, { Component } from 'react';
import * as myFunction2 from "./myFunction.js";

export default class ContactsApp extends Component {
	constructor(){
		super();
		this.state={
			filterText: '',
		};
	}
        // Filtering made on input change not on button click
	handleUserInput(searchTerm){
    if(searchTerm.length < 3)
		this.setState({filterText:""})
    this.setState({filterText: searchTerm})
	}
    
    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      }

// Here I need the filteredContacts instead of contacts, but couldn't manage to pass the variable
      sortBy(key) {
        let arrayCopy = [...contacts];
        arrayCopy.sort(this.compareBy(key));
        contacts = [...arrayCopy];
      }


	render(){
		return(
			<div>
            <div class="filter_con">
			<SearchBar  filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
            <button className="filter-button" onClick={() => this.sortBy('age')}>Sort By Age</button>
            </div>
            <table className="table1">
                <th>
                    <td className="table_el">ID</td>
                    <td className="table_el">Image</td>
                    <td className="table_el">Name</td>
                    <td className="table_el">Age</td>
                    <td>Email</td>
                </th>
            </table>
            <ContactList contacts={contacts}
				filterText={this.state.filterText}/>
            </div>
			)
		}
	}

	class SearchBar extends Component {

		handleChange(event){
			this.props.onUserInput(event.target.value)
		}

		render(){
			return <input type="search"
			placeholder="Filter users"
            onChange={this.handleChange.bind(this)}
            value={this.props.filterText} className="filter-input"/>
		}
	}

class ContactList extends Component {
	render(){
		let filteredContacts = this.props.contacts.filter(
			(contact) => contact.name.toLowerCase().indexOf(this.props.filterText) !== -1
			);
            let filter_length = filteredContacts.length;
		return(
            <div>
			<ul>
			{filteredContacts.map(
				(contact) => <ContactItem filteredContacts={filteredContacts} key={contact.id}
                id={contact.id}
                img={contact.img}
				name={contact.name}
				lastname={contact.lastname}
                age={contact.age}
                email={contact.email} />
				)}
				</ul>
                <br/>
                <div class="res_length">We have got {filter_length} results.</div>
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
        <li class="final_list" onClick={myFunction2} style={{ listStyleType: "none" }}><span>{this.props.id}</span> <span><img src={this.props.img}/></span> <span>{this.props.name}</span> <span>{this.props.lastname}</span> <span>{this.props.age}</span> <span>{this.props.email}</span></li>
        </div>
        )
        // })
	}
}

let contacts = [
    {
    id: 1,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=15',
    name: 'Deborah',
    lastname: 'Miller',
    age: '25',
    email: 'frosina1_bt95@hotmail.com'
  },
  {
      id: 2,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=18',
    name: 'Johannes',
    lastname: 'Myles',
    age: '34',
    email: 'frosina2_bt95@hotmail.com'
  },
  {
      id: 3,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=345',
    name: 'Britta',
    lastname: 'Rhudinbergh',
    age: '43',
    email: 'frosina3_bt95@hotmail.com'
  },
  {
      id: 4,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=44',        
    name: 'Olivia',
    lastname: 'Brown',
    age: '44',
    email: 'frosina4_bt95@hotmail.com'
  },
  {
      id: 5,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=657',        
    name: 'Daniel',
    lastname: 'Rudin',
    age: '32',
    email: 'frosina5_bt95@hotmail.com'
  },
  {
      id: 6,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=89',        
    name: 'Teressa',
    lastname: 'Sandhurst',
    age: '35',
    email: 'frosina6_bt95@hotmail.com'
  },
  {
      id: 7,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=877',        
    name: 'Dina',
    lastname: 'Sokolowski',
    age: '28',
    email: 'frosina7_bt95@hotmail.com'
  },
  {
      id: 8,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=81',        
    name: 'André',
    lastname: 'Szillagy',
    age: '23',
    email: 'frosina8_bt95@hotmail.com'
   }, 
  {
      id: 9,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=33',          
    name: 'Fabian',
    lastname: 'Stocker',
    age: '45',
    email: 'frosina9_bt95@hotmail.com'
  },
  {
    id: 10,
    img: 'https://source.unsplash.com/collection/8669816/100x100?sig=21',          
    name: 'Christian',
    lastname: 'Williams',
    age: '41',
    email: 'frosina10_bt95@hotmail.com'
  }
];