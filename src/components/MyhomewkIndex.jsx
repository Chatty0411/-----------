import React, { Component } from 'react';

import Header from './alwaysUse/Myheader';
import Footer from './alwaysUse/Myfooter.jsx';

import back from '../img/autumn.jpg';
import home1 from '../img/home1.jpg';
import home2 from '../img/home2.jpg';
import home3 from '../img/home3.jpg';
import flower1 from '../img/金針花2.jpg';
import flower2 from '../img/櫻花.jpg';
import flower3 from '../img/繡球花.jpg';

class MyhomewkIndex extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="backimg">
                    <img className="back" src={back} alt="back" />
                </div>

                <div className="colorooutcarousel">
                    <div className="ooutcarousel container">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={home1} alt="home1" />
                                    <div className="container">
                                        <div className="carousel-caption text-left">
                                            <h1>Welcome</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={home2} alt="home2" />
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1>Welcome</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={home3} alt="home3" />
                                    <div className="container">
                                        <div className="carousel-caption text-right">
                                            <h1>Welcome</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="activity container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-12">
                                <article>
                                    <h2>旅館資訊</h2>
                                    <pre><br /><br />

                                        我們把「家」建築在一個特別的地方，<br /><br />

                                        海拔１１００公尺的太麻里金針山上，<br /><br />

                                        這裡的每一片景色就像是我所知道最純樸原始的台東，<br /><br />

                                        清靜幽美的山林、壯闊多變的太平洋、<br /><br />

                                        雲霧飄渺的山嵐和夜晚輪轉的星辰，<br /><br />

                                        四季的景色不停變換，沒有任何瞬間是一樣的，<br /><br />

                                        但美與感動不變，這就是我懷念的台東，<br /><br />

                                        如果要將這樣的景色分享給更多人，<br /><br />

                                        就必須要讓更多人體會過這樣的美，<br /><br />

                                        因此我們敞開了家門，邀請世界各地的旅人駐足，<br /><br />

                                        踏進我們的生活態度，<br /><br />

                                        歡迎光臨環山雅築民宿。<br /><br />

                                    </pre>
                                </article>
                            </div>

                            <div className="col-xl-8 col-12">
                                <div className="row">
                                    <div className="col titleName"><p>8~10月金針花海季</p></div>
                                    <div className="col"><img src={flower1} alt="flower1" width="100%" /></div>
                                </div>
                                <div className="row">
                                    <div className="col"><img src={flower2} alt="" width="100%" /></div>
                                    <div className="col titleName"><p>1~3月櫻花季</p></div>
                                </div>
                                <div className="row">
                                    <div className="col titleName"><p>6~7月繡球花季</p></div>
                                    <div className="col"><img src={flower3} alt="" width="100%" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MyhomewkIndex;