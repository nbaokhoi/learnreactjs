import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Initial data text...',
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": 20
                },
                {
                    "id": 2,
                    "name": "Bar",
                    "age": 22
                },
                {
                    "id": 3,
                    "name": "Baz",
                    "age": 23
                }
            ]
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({ text: e.target.value });
    }
    render() {
        return (
            <div>
                <Header />
                <Content data={this.state.data} />
                <SimpleForm />
                <ComplexForm dataProps={this.state.text} updateStateProps={this.updateState} />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <table>
                    <tbody>
                        {this.props.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (
            <div>
                <h3>Simple Form Example</h3>
                <input type="text" value={this.state.data} onChange={this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
class ComplexForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Complex Form Example</h3>
                <input type="text" value={this.props.dataProps} onChange={this.props.updateStateProps} />
                <h4>{this.props.dataProps}</h4>
            </div>
        );
    }
}
export default App;