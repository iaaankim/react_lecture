import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/Toc';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

class App extends Component {
	constructor(props) {
		super(props);
		this.max_content_id = 3;
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

	getReadContent(){
		let i = 0;
		while(i < this.state.content.length) {
			let data = this.state.content[i];
			if(data.id === this.state.selected_content_id) {
				return data;
				break;
			}
			i++;
		}
	}

	getContent(){
		let _title, _desc, _article;
		if (this.state.mode === 'welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContent title={_title} desc={_desc}></ReadContent>;
		} else if (this.state.mode === 'read') {
			let _content = this.getReadContent();
			_article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
		} else if (this.state.mode === 'create') {
			_article = <CreateContent onSubmit={(_title, _desc) => {
				this.max_content_id++;
				let _contents = Array.from(this.state.content);
				_contents.push({id: this.max_content_id, title: _title, desc: _desc})
				this.setState({
					selected_content_id: this.max_content_id,
					content: _contents,
					mode: 'read'
				});
			}}></CreateContent>
		} else if (this.state.mode === 'update') {
			let _content = this.getReadContent();
			_article = <UpdateContent data={_content}
			onSubmit={(_id, _title, _desc) => {
				let _contents = Array.from(this.state.content);
				let i = 0;
				while(i < _contents.length) {
					if(_contents[i].id === _id) {
						_contents[i] = {id: _id, title: _title, desc: _desc}
						break;
					}
					i++;
				}
				this.setState({
					content: _contents,
					mode: 'read'
				});
			}}></UpdateContent>
		}
		return _article;
	}

	render() {
		console.log('App render');
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
				<Control
					onChangeMode={(_mode) => {
						this.setState({
							mode: _mode
						});
					}}>
				</Control>
				{this.getContent()}
			</div>
		);
	}
}

export default App;
