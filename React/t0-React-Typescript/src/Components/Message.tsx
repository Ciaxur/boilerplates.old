import * as React from 'react';

/**
 * Inteface For the Title Displayed
 *  - Will be used as a Prop for Title
 */
export interface IMessageProps {
    message: string,
    src?: string
}

export default class Message extends React.Component<IMessageProps> {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.props.src} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.props.message}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}