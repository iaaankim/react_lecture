import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/Toc';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'read',
			selected_content_id: 1,
			subject: {title: 'WEB', sub: 'World Wide Web!!'},
			welcome: {title: 'Welcome', desc: 'Hello, React!!'},
			content: [
				{id: 1, title: 'HTML', desc: 'HyperText Markup Language'},
				{id: 2, title: 'CSS', desc: 'Cascading Style Sheet'},
				{id: 3, title: 'JavaScript', desc: 'JavaScript is for interaction'},
			],
		}
	}
	render() {
		console.log('App render');
		let _title, _desc;
		if (this.state.mode === 'welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if (this.state.mode === 'read') {
			let i = 0;
			while(i < this.state.content.length) {
				let data = this.state.content[i];
				if(data.id === this.state.selected_content_id) {
					_title = data.title;
					_desc = data.desc;
					break;
				}
				i++;
			}
		}
		return (
			<div className="App">
				<Subject 
					title={this.state.subject.title} 
					sub={this.state.subject.sub}
					onChangePage={function() {
						this.setState({
							mode: 'welcome'
						})
					}.bind(this)}
					>
				</Subject>
				<TOC
					data={this.state.content}
					onChangePage={(id) => {
						this.setState({
							mode: 'read',
							selected_content_id: Number(id)
						})
					}}
					>
				</TOC>
				<Content title={_title} desc={_desc}></Content>
			</div>
		);
	}
}

export default App;
