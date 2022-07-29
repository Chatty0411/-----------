import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import Header from './alwaysUse/Myheader.jsx';
import Footer from './alwaysUse/Myfooter.jsx';

import room1 from "../img/單人房.jpg";
import single01 from '../img/山海家庭房.jpg'
import single02 from '../img/bathroom.jpg'
import room2 from "../img/new4人.jpg";
import room3 from "../img/new雙人2樓.jpg";
import room4 from "../img/new山景雙人.jpg";
import room5 from "../img/new家庭.jpg";


class Myhomewkorder extends Component {
    state = {
        count: 0, count1: 0, count2: 0,
        count3: 0, count4: 0,
        val1: ["date"], val2: ["day"], val3: ["adult"], val4: ["child"],
        room: ["roomname"]
    };

    doClickPlus = (e) => {
        var colbody = e.target.closest('.card-body');
        //庫存
        var ourroom = parseInt($(colbody).find('output').eq(0).val());
        //數量
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(ourroom);
        // console.log(foutput);
        var roomname = $(colbody).find('span').eq(0).text();
        //房型
        console.log(roomname);
        localStorage.setItem('room',`${roomname}`)
        if (foutput === ourroom) {
            alert('oh my god! no more');
        }
        else {
            this.setState({ count: this.state.count + 1 })
        }
    }

    doClickDe = (e) => {
        var colbody = e.target.closest('.card-body');
        // console.log(colbody);
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        console.log(foutput);
        if (foutput === 0) {
            alert('no!!');
        }
        else {
            this.setState({ count: this.state.count - 1 })
        }
    }

    doClickPlus1 = (e) => {
        var colbody = e.target.closest('.card-body');
        //庫存
        var ourroom = parseInt($(colbody).find('output').eq(0).val());
        //數量
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(ourroom);
        // console.log(foutput);
        var roomname = $(colbody).find('span').eq(0).text();
        //房型
        console.log(roomname);
        localStorage.setItem('room',`${roomname}`)
        if (foutput === ourroom) {
            alert('oh my god! no more');
        }
        else {
            this.setState({ count1: this.state.count1 + 1 })
        }
    }

    doClickDe1 = (e) => {
        var colbody = e.target.closest('.card-body');
        // console.log(colbody);
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(foutput);
        if (foutput === 0) {
            alert('no!!');
        }
        else {
            this.setState({ count1: this.state.count1 - 1 })
        }
    }

    doClickPlus2 = (e) => {
        var colbody = e.target.closest('.card-body');
        //庫存
        var ourroom = parseInt($(colbody).find('output').eq(0).val());
        //數量
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(ourroom);
        // console.log(foutput);
        var roomname = $(colbody).find('span').eq(0).text();
        //房型
        console.log(roomname);
        localStorage.setItem('room',`${roomname}`)
        if (foutput === ourroom) {
            alert('oh my god! no more');
        }
        else {
            this.setState({ count2: this.state.count2 + 1 })
        }
    }

    doClickDe2 = (e) => {
        var colbody = e.target.closest('.card-body');
        console.log(colbody);
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(foutput);
        
        if (foutput === 0) {
            alert('no!!');
        }
        else {
            this.setState({ count2: this.state.count2 - 1 })
        }
    }

    doClickPlus3 = (e) => {
        var colbody = e.target.closest('.card-body');
        //庫存
        var ourroom = parseInt($(colbody).find('output').eq(0).val());
        //數量
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(ourroom);
        // console.log(foutput);
        var roomname = $(colbody).find('span').eq(0).text();
        //房型
        console.log(roomname);
        localStorage.setItem('room',`${roomname}`)
        if (foutput === ourroom) {
            alert('oh my god! no more');
        }
        else {
            this.setState({ count3: this.state.count3 + 1 })
        }
    }

    doClickDe3 = (e) => {
        var colbody = e.target.closest('.card-body');
        // console.log(colbody);
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(foutput);
        if (foutput === 0) {
            alert('no!!');
        }
        else {
            this.setState({ count3: this.state.count3 - 1 })
        }
    }

    doClickPlus4 = (e) => {
        var colbody = e.target.closest('.card-body');
        //庫存
        var ourroom = parseInt($(colbody).find('output').eq(0).val());
        //數量
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(ourroom);
        // console.log(foutput);
        var roomname = $(colbody).find('span').eq(0).text();
        //房型
        console.log(roomname);
        localStorage.setItem('room',`${roomname}`)
        if (foutput === ourroom) {
            alert('oh my god! no more');
        }
        else {
            this.setState({ count4: this.state.count4 + 1 })
        }
    }

    doClickDe4 = (e) => {
        var colbody = e.target.closest('.card-body');
        // console.log(colbody);
        var foutput = parseInt($(colbody).find('output').eq(1).val());
        // console.log(foutput);
        if (foutput === 0) {
            alert('no!!');
        }
        else {
            this.setState({ count4: this.state.count4 - 1 })
        }
    }

    input1 = (e) => {
        localStorage.setItem('date', `${e.target.value}`)
        this.setState({val1: `${e.target.value}`})
    }

    input2 = (e) => {
        localStorage.setItem('day', `${e.target.value}`)
        this.setState({val2: `${e.target.value}`})
    }

    input3 = (e) => {
        localStorage.setItem('adult', `${e.target.value}`)
        this.setState({val3: `${e.target.value}`})
    }

    input4 = (e) => {
        localStorage.setItem('child', `${e.target.value}`)
        this.setState({val4: `${e.target.value}`})
    }

    componentDidMount() {
        window.addEventListener('load', () => {

            localStorage.setItem('date',"date");
            localStorage.setItem('day',"day");
            localStorage.setItem('adult',"adult");
            localStorage.setItem('child',"child");
            localStorage.setItem('room',"roomname");
        })
    }


    render() {
        return (
            <React.Fragment>
                <Header />

                <main role="main" className="mt-5 py-5 bg-light">
                    
                    <div className="container">
                        <div className="datenav row">
                            <div className="col">
                                <span>入住日期：</span>
                                <input type="date" name="" id="date" className="date" value={this.value} min="2022-06-01" max="2022-07-30"
                                onChange={this.input1} />
                            </div>
                            
                            <div className="col">
                                <span>退房日期：</span>
                                <input type="date" name="" id="date" className="date" value={this.value} min="2022-06-01" max="2022-07-30"
                                onChange={this.input2} />
                            </div>
                            <div className="col">
                                <span>人數：</span>
                                <span>
                                    <span>成人</span>
                                    <select name="" id="adult" value={this.value} onChange={this.input3}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                    <span>兒童</span>
                                    <select name="" id="child" value={this.value} onChange={this.input4}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </span>

                            </div>
                        </div>

                        <div className="orderbtnarea">
                            <NavLink onClick={()=>window.location} exact={true} to={'/create'}>
                            <button id="ckbutton" className="btn btn-success" >現在預定</button>
                            </NavLink>
                        </div>

                    </div>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 shadow-sm">
                                        <button type="button" className='btn' data-toggle="modal" data-target="#single">
                                            <img src={room1} alt="room1" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                        </button>
                                        <div className="card-body">
                                            <p className="card-text">
                                                <span>山景單人房</span>

                                                <span className='le'>
                                                    <span className="ml-3">剩餘：</span>
                                                    <output value="1">1</output>
                                                    <span>間</span>
                                                </span>

                                                <span className='num'>
                                                    <span className="pr-3">數量： </span>
                                                    <output className="pr-3"> {this.state.count} </output>
                                                </span>

                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">享受一個人的旅行嗎？又擔心會被別人打擾嗎？一人一間，不用花大錢也可以住的舒適又自在。<br /><br /><br />
                                                </small>
                                                <div className="btn-group ml-4">
                                                    <button type="button" className="btn btn-sm btn-outline-success p-3" onClick={this.doClickPlus}> + </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger p-3" onClick={this.doClickDe}> - </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card mb-4 shadow-sm">
                                        <button type="button" className='btn' data-toggle="modal" data-target="#fsroom">
                                            <img src={room2} alt="room2" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                        </button>
                                        <div className="card-body">
                                            <p className="card-text">
                                                <span >海景四人房</span>

                                                <span className='le'>
                                                    <span className="ml-3">剩餘：</span>
                                                    <output value="4">4</output>
                                                    <span>間</span>
                                                </span>

                                                <span className='num'>
                                                    <span className="pr-3">數量： </span>
                                                    <output className="pr-3"> {this.state.count1} </output>
                                                </span>

                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">​兩張雙人大床，讓人有的是舒服的睡眠，而門外就是露天的涼亭與廣場，不管是在涼椅上與三五好友相聚，還是晚上在廣場上享受星星銀河的美景，都是一大享受。
                                                </small>
                                                <div className="btn-group ml-4">
                                                    <button type="button" className="btn btn-sm btn-outline-success p-3" onClick={this.doClickPlus1}> + </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger p-3" onClick={this.doClickDe1}> - </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card mb-4 shadow-sm">
                                        <button type="button" className='btn' data-toggle="modal" data-target="#dsroom">
                                            <img src={room3} alt="room3" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                        </button>
                                        <div className="card-body">
                                            <p className="card-text">
                                                <span >海景雙人房</span>

                                                <span className='le'>
                                                    <span className="ml-3">剩餘：</span>
                                                    <output value="5">5</output>
                                                    <span>間</span>
                                                </span>

                                                <span className='num'>
                                                    <span className="pr-3">數量： </span>
                                                    <output className="pr-3"> {this.state.count2} </output>
                                                </span>
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">乾淨舒適的海景雙人房，陽台外就可以擁抱群山環繞的視野，與眺望遠方的太平洋；想欣賞台灣第一道的曙光只要踏上陽台就可以一覽無遺。<br />
                                                </small>
                                                <div className="btn-group ml-4">
                                                    <button type="button" className="btn btn-sm btn-outline-success p-3" onClick={this.doClickPlus2}> + </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger p-3" onClick={this.doClickDe2}> - </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card mb-4 shadow-sm">
                                        <button type="button" className='btn' data-toggle="modal" data-target="#mdroom">
                                            <img src={room4} alt="room4" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                        </button>
                                        <div className="card-body">
                                            <p className="card-text">
                                                <span >山景雙人房</span>

                                                <span className='le'>
                                                    <span className="ml-3">剩餘：</span>
                                                    <output value="6">6</output>
                                                    <span>間</span>
                                                </span>

                                                <span className='num'>
                                                    <span className="pr-3">數量： </span>
                                                    <output className="pr-3"> {this.state.count3} </output>
                                                </span>
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">​安靜、清幽是本房的一大特色，陽台外面對的是整片櫻花林，陽光透過樹葉間灑落在陽台上好不美麗，你需要的只是一杯好茶與書在陽台上靜靜享受。
                                                </small>
                                                <div className="btn-group ml-4">
                                                    <button type="button" className="btn btn-sm btn-outline-success p-3" onClick={this.doClickPlus3}> + </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger p-3" onClick={this.doClickDe3}> - </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card mb-4 shadow-sm">
                                        <button type="button" className='btn' data-toggle="modal" data-target="#faroom">
                                            <img src={room5} alt="" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                        </button>
                                        <div className="card-body">
                                            <p className="card-text">
                                                <span >山海家庭房</span>

                                                <span className='le'>
                                                    <span className="ml-3">剩餘：</span>
                                                    <output value="2">2</output>
                                                    <span>間</span>
                                                </span>

                                                <span className='num'>
                                                    <span className="pr-3">數量： </span>
                                                    <output className="pr-3"> {this.state.count4} </output>
                                                </span>
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">全家人出遊就是要住一起，寬敞的床面與室內空間，相當適合全家居住，而陽台上的景色可以一次飽覽山海景觀，夜晚時，豁大的陽台空間可以讓大夥一起躺著數星星。
                                                </small>
                                                <div className="btn-group ml-4">
                                                    <button type="button" className="btn btn-sm btn-outline-success p-3" onClick={this.doClickPlus4}> + </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger p-3" onClick={this.doClickDe4}> - </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="single" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Single Room</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
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
                                                    <img src={room1} alt="single01" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single01} alt="single02" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single02} alt="single03" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev" id="bb2">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next" id="bb2">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                ....
                            </div>
                        </div>
                    </div>

                    <div id="fsroom" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Single Room</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="colorooutcarousel">
                                    <div className="ooutcarousel container">
                                        <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
                                                <li data-target="#myCarousel1" data-slide-to="1"></li>
                                                <li data-target="#myCarousel1" data-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={room2} alt="room2" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single01} alt="single01" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single02} alt="single02" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-target="#myCarousel1" data-slide="prev" id="bb2">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-target="#myCarousel1" data-slide="next" id="bb2">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                ....
                            </div>
                        </div>
                    </div>

                    <div id="dsroom" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Single Room</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="colorooutcarousel">
                                    <div className="ooutcarousel container">
                                        <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
                                                <li data-target="#myCarousel2" data-slide-to="1"></li>
                                                <li data-target="#myCarousel2" data-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={room3} alt="room3" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single01} alt="single02" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single02} alt="single03" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-target="#myCarousel2" data-slide="prev" id="bb2">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-target="#myCarousel2" data-slide="next" id="bb2">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                ....
                            </div>
                        </div>
                    </div>

                    <div id="mdroom" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Single Room</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="colorooutcarousel">
                                    <div className="ooutcarousel container">
                                        <div id="myCarousel4" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#myCarousel4" data-slide-to="0" className="active"></li>
                                                <li data-target="#myCarousel4" data-slide-to="1"></li>
                                                <li data-target="#myCarousel4" data-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={room4} alt="single01" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single01} alt="single02" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single02} alt="single03" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-target="#myCarousel4" data-slide="prev" id="bb2">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-target="#myCarousel4" data-slide="next" id="bb2">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                ....
                            </div>
                        </div>
                    </div>

                    <div id="faroom" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Single Room</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="colorooutcarousel">
                                    <div className="ooutcarousel container">
                                        <div id="myCarousel5" className="carousel slide" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#myCarousel5" data-slide-to="0" className="active"></li>
                                                <li data-target="#myCarousel5" data-slide-to="1"></li>
                                                <li data-target="#myCarousel5" data-slide-to="2"></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={room5} alt="single01" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single01} alt="single02" />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={single02} alt="single03" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-target="#myCarousel5" data-slide="prev" id="bb2">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-target="#myCarousel5" data-slide="next" id="bb2">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                ....
                            </div>
                        </div>
                    </div>

                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Myhomewkorder;
