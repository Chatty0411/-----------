import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Notice from './notice.jsx';


import '../Myhomewkcreate.js';
import '../Myhomewkcreate.css';
import icon from '../img/icon.jpg';



class Myhomewkcreate extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Notice />
                
                <div>
                    <div className="container conta " action="/to/checkin" method="post">
                        <div className="row">
                            <NavLink to="/index">
                            <img src={icon} alt="icon" className='creico' />
                            </NavLink>
                            <div className="w-100">
                                <h3 className='confirmtitle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    請填寫並確認以下資料</h3>
                                    <h4 className='bgcon'>|</h4>
                            </div>
                            <div className="hh col left">入住日期：</div>
                            <div className="hh col"><input id="checkindate" type="date" className="date" value={localStorage.getItem('date')} readOnly /></div>
                            <div className="w-100"></div>
                            <div className="hh col left">退房日期：</div>
                            <div className="hh col"><input id="checkoutdate" type="date" className="date" value={localStorage.getItem('day')} readOnly /></div>
                            <div className="w-100"></div>
                            <div className="hh col left">成人：</div>
                            <div className="hh col"><input id="adult" type="number" value={localStorage.getItem('adult')} readOnly />人</div>
                            <div className="w-100"></div>
                            <div className="hh col left" >兒童：</div>
                            <div className="hh col"><input id="child" type="number" value={localStorage.getItem('child')} readOnly />人</div>
                            <div className="w-100"></div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="hh col left">姓名：</div>
                            <div className="hh col"><input id="name" type="text" /></div>
                            <div className="w-100"></div>
                            <div className="hh col left">電話：</div>
                            <div className="hh col"><input id="phonenumber" type="text" /></div>
                            <div className="w-100"></div>
                            <div className="hh col left" >roomname：</div>
                            <div className="hh col" id="roomId" >{localStorage.getItem('room')}</div>
                            <div className="w-100"></div>
                        </div>
                    </div>

                    <div className="btn conbtn">
                        <button id="okbutton" className='btn btn-info'>資料確定</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Myhomewkcreate;