import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/Toc';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: {title: 'WEB', sub: 'World Wide Web!!'},
			content: [
				{id: 0, title: 'HTML', desc: 'HyperText Markup Language'},
				{id: 1, title: 'CSS', desc: 'Cascading Style Sheet'},
				{id: 2, title: 'JavaScript', desc: 'JavaScript is for interaction'},
			],
		}
	}
	render() {
		return (
			<div className="App">
				<Subject 
					title={this.state.subject.title} 
					sub={this.state.subject.sub}>
				</Subject>
				<TOC
					data={this.state.content}>
				</TOC>
				<Content title="HTML" desc='HTML is HyperText Markup Language.'></Content>
			</div>
		);
	}
}

export default App;
