import React from 'react';
import PanelOne from './PanelOne.jsx';
import PanelTwo from './PanelTwo.jsx';
import PanelThree from './PanelThree.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);    
    window.localStorage.setItem("ACCESS_TOKEN","342423");
    this.state = {
      comments: [{
          created_time: "2019-01-15T12:10:28+0000",
          message: "ahihi",
          from: {
            name: "Trần Đức Cường",
            id: "100009859624773"
          },
          id: "798841883787792_799006063771374"
        },
        {
          created_time: "2019-01-15T05:40:54+0000",
          message: "Đc đó e",
          from: {
            name: "Chel Long",
            id: "100004344797522"
          },
          id: "798841883787792_798855740453073"
        },
        {
          created_time: "2019-01-15T05:04:50+0000",
          message: "Kinhhh 🐧",
          from: {
            name: "Nguyễn Duy",
            id: "100006847333620"
          },
          id: "798841883787792_798843510454296"
        }
      ],
      couple: [{
          "id": "100006977439265",
          "name": "Trần Đức Cường",
          "gender": "female",
          "birthday": "04/10",
          "username": "NguyenThiNgan.Love.Ahihi"
        },
        {
          "id": "100009859624773",
          "name": "Trần Đức Cường",
          "relationship_status": "Married",
          "gender": "male",
          "birthday": "04/10/2000",
          "hometown": {
            "id": "106451339392117",
            "name": "Nghi Loc"
          },
          "username": "ShiinDz"
        },
      ]
    };
    this.intervalComment = this.intervalComment.bind(this)
  }
  intervalComment({token, id_post}) {
    console.log(12321,{token, id_post});    
    return Promise.resolve();
  }
  render() {
    return (
      <div className="row">
           <PanelOne {...{couple: this.state.couple}}/>
           <PanelTwo {...{intervalComment: this.intervalComment}}/>
           <PanelThree {...{comments: this.state.comments}}/>
      </div>
    );
  }
}
export default App;
