import $ from 'jquery';
import { NavLink } from 'react-bootstrap';
import index from './components/MyhomewkIndex'

window.onload =function () {
    
    $("#ordernotice").fadeIn('slow');
    $(document).on('click',function () {
      $("#ordernotice").fadeOut('slow');
    });
  
    $("#okbutton").on("click", 
    async function () {
        var dataToServer = {
            checkindate: $('#checkindate').prop("value"),
            checkoutdate: $('#checkoutdate').prop('value'),
            phonenumber: $('#phonenumber').prop('value'),
            name: $('#name').prop('value'),
            roomId: $('#roomId').text(),
            adult: $('#adult').prop('value'),
            child: $('#child').prop('value')
        };
        var result = await $.ajax({
            type: "post",
            url: "http://localhost:8000/to/checkin",
            data: dataToServer
        });
        alert('預定成功');
        window.location = 'http://localhost:3000/#/index';
    }
    )
}

