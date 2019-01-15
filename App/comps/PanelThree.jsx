import React from 'react';
class PanelThree extends React.Component {
    render() {
        return (
        <div className="col-md-5">
        <div className="panel panel-primary">
            <div className="panel-heading bg-light-blue">
                <h5>COMMENT FEED</h5>
            </div>
            <div className="panel-body text-left">
                {this.props.comments.length == 0 && <li className="list-group-item"><font color="red"><b>Chưa có ai comment</b></font></li>}
                {this.props.comments.map(e => <li className="list-group-item"><b>{e.from.name} </b>{e.message}</li> )}
            </div>
        </div>

    </div>
        )
    }
}
export default PanelThree;