import React from 'react';
import Validate from '../module/validate.js';
class PanelTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: undefined, error_msg: undefined, polled: false };
        this.handlePoll = this.handlePoll.bind(this);
        this.showError = this.showError.bind(this);
    }
    showError(message) {
        this.state.error = !!message;
        this.state.error_msg = message || '';
        this.setState(this.state);
    }
    handlePoll() {
        this.showError(false);
        if (this.state.polled) {
            this.showError("Bạn đã khởi động pool");
            setTimeout(this.showError, 2000);
            return;
        }
        let token = this.refs.access_token.value;
        let id_post = this.refs.id_post.value;
        if (!token || !id_post) return this.showError("Vui lòng nhập đầy đủ access token và ID post");
        Validate.checkLiveTokenAndExistID(token, id_post)
            .then(code => {
                if (code == 200) {

                    return Promise.resolve({ token, id_post });
                }
                switch (code) {
                    case false:
                        this.showError("Có lỗi xảy ra");
                        break;
                    case 190:
                        this.showError("Token không hợp lệ vui lòng thử lại");
                        break;
                    case 100:
                    case 803:
                        this.showError("Không tồn tại ID Post");
                        break;
                    case 300:
                        this.showError("Không phải ID Post");
                        break;
                    default:
                        this.showError("Lỗi " + code);
                        break;

                }
            })
            .then(this.props.intervalComment)
            .then(() => this.setState({ ...this.state, polled: true }))
    }
    render() {

        return (
            <div className="col-md-7">
                <div className="panel panel-primary">
                    <div className="panel-heading bg-light-blue">
                        <h5>CONFIG POLL</h5>
                    </div>

                    <div className="panel-body">
                        <li className="list-group-item" style={{display: this.state.error ? 'block': 'none'}}>
                            <font color="red">{this.state.error_msg}</font>
                        </li>
                        <form name="tdt_form_2" id="tdt_form_2" action="http://sv0.botcamxuc.net/gettoken/#" method="POST">
                            <p>Nhập access token</p>
                            <input type="password" ref="access_token" className="form-control" placeholder="EAAAA..."/>
                            <p>ID Live Stream Post:</p>
                            <input type="text" ref="id_post"  className="form-control" placeholder="Nhập ID vào đây"/>
                            <p>Lựa chọn kiểu live stream:</p> 
                            <select className="form-control">
                                <option value="1">Ghép Đôi</option>
                                <option value="2">TÔI DÙNG ANDROID</option>
                                <option value="3">TÔI DÙNG MÁY TÍNH</option>
                            </select>
                            <br/>
                            <input type="button" id="tdt_set" value="Đăng Nhập" onClick={this.handlePoll} className="btn btn-primary"/>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default PanelTwo;
