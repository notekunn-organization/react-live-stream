import React from 'react';
import CardName from './CardName.jsx';
class PanelOne extends React.Component {
    render() {
        let {couple} = this.props;
        return (
<div className="col-md-12">
    <div className="panel panel-primary" style={{background: '#e4e4e4'}}>
        <div className="panel-body">
        
                <div className="col-md-4" style={{background: 'white'}}>
                    {couple[0] ?
                    <CardName {...couple[0]} />: <CardName gender="male"/>}
                </div>
                <div className="col-md-4" style={{background: 'transparent'}}>

                </div>
                <div className="col-md-4" style={{background: 'white'}}>
                    {couple[1] ?
                    <CardName {...couple[1]} />: <CardName gender="female"/>}
                </div>

            
        </div>
    </div>
</div>
        )
    }
}
export default PanelOne;