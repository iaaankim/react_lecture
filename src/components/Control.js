import React, { Component } from 'react';

class Control extends Component {
	render() {
		return(
			<ul>
				<li><a href='/create'
					onClick={(e) => {
						e.preventDefault();
						this.props.onChangeMode('create');
					}}>Create</a>
				</li>
				<li><a href='/update'
					onClick={(e) => {
						e.preventDefault();
						this.props.onChangeMode('update');
					}}>Update</a>
				</li>
				<li><input 
					onClick={(e) => {
						e.preventDefault();
						this.props.onChangeMode('delete');
					}}type='button' value='delete'>
					</input>
				</li>
			</ul>
		);
	}
}

export default Control;