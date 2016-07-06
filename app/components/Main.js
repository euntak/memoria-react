'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Main = React.createClass({
	render () {
		return (
			<div>
				<p>Hello World</p>
			</div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));