class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.handleAddCount = this.handleAddCount.bind(this);
	}
	handleAddCount() {
		// 錯誤區域 setState 是非同步的，所以這邊有問題 結果只會讓 count 增加 1
		// this.setState({ count: this.state.count + 1 });
		// this.setState({ count: this.state.count + 1 });
		// this.setState({ count: this.state.count + 1 });

		// 函數接受前一狀態 prevState 作為參數，並返回一個對象來更新狀態。確保每次更新都是最新的狀態，讓 count 正確增加 3。
		this.setState((prevState) => ({ count: prevState.count + 1 }));
		this.setState((prevState) => ({ count: prevState.count + 1 }));
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	}
	render() {
		return (
			<div>
				<h2>{this.state.count}</h2>
				<button onClick={this.handleAddCount}>Add</button>
			</div>
		);
	}
}
ReactDOM.render(<Count />, document.getElementById("root"));
