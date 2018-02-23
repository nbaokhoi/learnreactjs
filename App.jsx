import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
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
    }
    render() {
        return (
            <div>
                <Header />
                <Content data = {this.state.data} />
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
export default App;