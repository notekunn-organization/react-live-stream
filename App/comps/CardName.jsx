import React from 'react';
class PanelOne extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.id) {
            this.props.srcAvatar = this.props.gender == "female" ? "https://i.imgur.com/VwLNtTK.jpg" : "https://i.imgur.com/WoXbcS2.png";
            this.props.name = this.props.gender == "female" ? "Nhà Gái" : "Nhà Trai"
        }
        else {
            this.props.srcAvatar = `https://graph.facebook.com/${this.props.id}/picture?width=512`;
        }
        this.props.gender = this.props.gender == "female" ? "Nữ" : this.props.gender == "male" ? "Nam" : "Không công khai";
        this.props.birthday = this.props.birthday || "Không công khai";
    }
    render() {
        let { srcAvatar, gender, name, birthday } = this.props;
        return (
     <div className="card text-center" style={{paddingTop :'0px'}}>
    <img src={srcAvatar} style={{width:'180px', height:'180px'}} className="img-circle" alt={name} />
    <div className="card-body">
        <p className="card-text">
            <h4>{name}</h4>
        </p>
        <p className="text-left">
            <font color="red"><b>Giới tính</b></font>: {gender}
        </p>
        <p className="text-left">
            <font color="red"><b>Sinh ngày</b></font>: {birthday}
        </p>
        <p className="text-left">
            <font color="red"><b>Sinh ngày</b></font>: {birthday}
        </p>
    </div>
</div>
        )
    }
}
export default PanelOne;
