import React, { Component } from 'react';

class Notice extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div id="ordernotice">
                    <a className="boxclose" id="boxclose"></a>
                    <h3>&nbsp;&nbsp;訂房須知</h3>
                    <hr />
                    <div>
                        住房時間：下午3點以後<br />
                        退房時間：中午11點以前<br /><br />
                        若於三日前通知，需扣訂金之５０％<br />
                        若於二日前通知，需扣訂金之7０％<br />
                        若於一日前通知，需扣訂金之9０％<br />
                        若於當日取消則無法退費 <br /><br />
                        ※ 住宿當日逢颱風或地震等不可抗拒因素<br />
                        (以當地縣市政府頒布狀況為準則，台東縣發佈陸上颱風警報宣布〝停止上班上課〞) 時，<br />
                        可全額退回訂金(扣除匯款手續費100元)或保留三個月。<br />
                        房客須於住宿前一日中午12點提出，逾時或當日提出不予受理。<br /><br />
                        ※ 颱風警報已解除、天氣狀況屬惡劣時(如豪雨特報)，<br />
                        可保留其訂房但不退訂金，但須於住宿前一日中午12點前提出，逾時或當日提出不予受理。<br /><br />
                        ※若遇不可抗拒之因素，可全額退費<br /><br />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Notice;