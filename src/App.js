import React, { Component } from 'react';
import Subject from './Subject';
import TOC from './Toc';
import Content from './Content';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Subject title='WEB' sub='World Wide Web!!'></Subject>
				<TOC></TOC>
				<Content title="HTML" desc='HTML is HyperText Markup Language.'></Content>
			</div>
		);
	}
}

export default App;
