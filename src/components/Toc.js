import React, { Component } from 'react';

class TOC extends Component {
	render() {
		console.log('TOC render');
		let lists = [];
		let data = this.props.data;
		let i = 0;
		while(i < data.length){
			lists.push(
				<li key={data[i].id}>
					<a 
						href={'/content/'+data[i].id}
						data-id={data[i].id}
						onClick={function(id, e){
							e.preventDefault();
							this.props.onChangePage(id)
						}.bind(this, data[i].id)}>
						{data[i].title}
					</a>
				</li>)
			i++;
		}
		return(
			<nav>
				<ul>
					{lists}
				</ul>
			</nav>
		);
	}
}

export default TOC;