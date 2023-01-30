import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKeyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKeyHandler);
  }

  pressedKeyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}