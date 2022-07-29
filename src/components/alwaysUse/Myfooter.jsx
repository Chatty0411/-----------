import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPhone, faMailBulk, faAddressCard} from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <footer>
                    <div className="container">
                        <h3 id="contact" className="text-secondary">聯絡資訊</h3>
                        <hr />
                        <div className="row">

                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.2353810212176!2d120.9577483147216!3d22.64501098514556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fcc228702bd1f%3A0xbbe160dc7008b944!2z55Kw5bGx6ZuF56-JIE1vdW50YWluTG9kZ2U!5e0!3m2!1szh-TW!2stw!4v1653567613050!5m2!1szh-TW!2stw"
                                className="col-md-6" width="450" height="350" style="border:0;" loading="lazy"></Iframe>

                            <div className="col-md-6" id="con">
                                <div>
                                    <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                                    &nbsp;&nbsp;&nbsp;聯絡人: <span className="text-primary">楊小姐 </span> <br /><br />
                                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                    &nbsp;&nbsp;&nbsp;Telphone: <span className="text-primary">0921-XXXXXX </span><br /><br />
                                    <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
                                    &nbsp;&nbsp;&nbsp;E-mail: <span className="text-primary">bisaXXXX@gmail.com </span><br /><br />
                                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                                    &nbsp;&nbsp;&nbsp;地址: <span className="text-primary">彰化縣XXXXXXXXXXXXXXXX </span><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="foot">
                    <p>copyright by</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;