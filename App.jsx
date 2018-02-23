import React from 'react';
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
                <p>{1+1}</p>
            </div>
        );
    }
}
export default App;