import * as React from 'react';

interface CanvasProps extends React.HtmlHTMLAttributes<{}> {}

interface CanvasState {}

export class Canvas extends React.Component<CanvasProps, CanvasState> {
    static defaultProps: CanvasProps = {};

    state: CanvasState = {};

    render() {
        return <div>Canvas area</div>;
    }
}
