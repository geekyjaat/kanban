import React from 'react';
import type { Item } from '../utils/Database';

class ItemCard extends React.Component {
	constructor(props: Object) {
		super(props);
		this.state = {
			showDescription: false
		};
	}

	toggleDisplay = () => {
		this.setState((prevState) => ({
			...prevState,
			showDescription: !prevState.showDescription
		}));
  };

	render() {
		let color = 'story-card';
		if (this.props.item.type === 'DEFECT') {
			color = 'defect-card';
		}
		if (this.props.item.type === 'TASK') {
			color = 'task-card';
		}

		return (
			<div id={this.props.item.id} className={`card ${color}`} onClick={this.toggleDisplay} draggable="true" onDragStart={(e) => this.onDragStart(e)}>
				<div className="card-body">
					<h5 className={`${this.state.showDescription ? 'card-title-small' : 'card-title'}`}>
						{this.props.item.title}
					</h5>
					<hr className={`title-underline ${this.state.showDescription ? '' : 'd-none'}`} />
					<div className={`${this.state.showDescription ? 'd-show' : 'd-hidden'}`}>
						<p className={`card-text ${this.state.showDescription ? '' : 'd-none'}`}>{this.props.item.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemCard;
