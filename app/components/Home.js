// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

import type { Item } from '../utils/Database';

import ItemCard from './ItemCard';
import Nav from './Nav';

type Props = {
	backlog: Item[],
	planning: Item[],
	progress: Item[],
  done: Item[],
  update: (id: number, state: string) => void
};

export default class Home extends Component<Props> {
	props: Props;

	onDropEvent = (e: DragEvent, targetId: string) => {
		e.preventDefault();
		// console.log('drop - ', targetId, e.target);
    const data = parseInt(e.dataTransfer.getData('text/plain'));
    const { update } = this.props;
    update(data, targetId);
	};

	onDragOver = (e: DragEvent) => {
		// console.log(e);
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
	};

	render() {
		const { backlog, planning, progress, done } = this.props;

		const backlogDivs =
			backlog && backlog.length > 0 ? (
				backlog.map((item) => <ItemCard item={item} key={item.id} />)) : (<div />);

		const planningDivs =
			planning && planning.length > 0 ? (
				planning.map((item) => <ItemCard item={item} key={item.id} />)) : (<div />);

		const progressDivs =
			progress && progress.length > 0 ? (
        progress.map((item) =>  <ItemCard item={item} key={item.id} />)) : (<div />);

		const doneDivs =
    done && done.length > 0 ? (
      done.map((item) => <ItemCard item={item} key={item.id} />	)) : (<div />);
		return (
			<div className="container-fluid fill-height">
				<Nav />
				<div className="row align-items-start vh100-height border-2px-solid">
					<div
						id="backlog"
						className="col col-nopadding border-2px-solid vh100-height"
						onDrop={(e) => this.onDropEvent(e, 'BACKLOG')}
						onDragOver={(e) => this.onDragOver(e)}
					>
						<h3>Backlog</h3>
						<div class="items-pane">{backlogDivs}</div>
					</div>
					<div
						id="planning"
						className="col col-nopadding border-2px-solid vh100-height"
						onDrop={(e) => this.onDropEvent(e, 'PLANNING')}
						onDragOver={(e) => this.onDragOver(e)}
					>
						<h3>Planning</h3>
						<div class="items-pane" >{planningDivs}</div>
					</div>
					<div
						id="progress"
						className="col col-nopadding border-2px-solid vh100-height"
						onDrop={(e) => this.onDropEvent(e, 'PROGRESS')}
						onDragOver={(e) => this.onDragOver(e)}
					>
						<h3>In Progress</h3>
						<div class="items-pane">{progressDivs}</div>
					</div>
					<div
						id="done"
						className="col col-nopadding border-2px-solid vh100-height"
						onDrop={(e) => this.onDropEvent(e, 'DONE')}
						onDragOver={(e) => this.onDragOver(e)}
					>
						<h3>Done</h3>
						<div class="items-pane">{doneDivs}</div>
					</div>
				</div>
			</div>
		);
	}
}
