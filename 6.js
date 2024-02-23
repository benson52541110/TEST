var SearchBox = React.createClass({
	componentDidMount: function () {
		this.debouncedOnChange = this.debounce(this.handleOnChange, 500);
	},
	debounce: function (func, wait) {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	},
	handleOnChange: function (event) {
		// 假設的 AJAX 調用
		console.log("Making AJAX call for query:", event.target.value);
	},
	render: function () {
		return (
			<input
				type="search"
				name="p"
				onChange={(e) => this.debouncedOnChange(e)}
			/>
		);
	},
});

ReactDOM.render(<SearchBox />, document.getElementById("root"));
