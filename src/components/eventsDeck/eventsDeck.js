import React from "react";

import CardDeck from "../cardDeck/cardDeck.js";
import Card from "../card/card.js";

const fetch = require("node-fetch");

class EventsDeck extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};

		const url = "https://vast-ridge-31859.herokuapp.com/events";
		let params = {
			headers: {
				"content-type": "application/json; charset=UTF-8",
			},
			method: "GET",
		};

		fetch(url, params)
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					data: res,
				}),
			);
	}

	formatTimeLocation(datetime, location) {
		let date = new Date(datetime);
		let day = date
			.getDate()
			.toString()
			.padStart(2, "0");
		let month = (date.getMonth() + 1).toString().padStart(2, "0");
		let year = date.getFullYear();
		date = [day, month, year].join("/");

		return [location, date].join(" - ");
	}

	render() {
		console.log(this.state.data);
		const items = this.state.data.map((item) => {
			return (
				<Card
					title={item.title}
					desc={item.description}
					detail={this.formatTimeLocation(item.datetime, item.location)}
				/>
			);
		});

		return <CardDeck>{items}</CardDeck>;
	}
}

export default EventsDeck;
