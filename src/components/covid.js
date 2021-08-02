import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './covid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Covid = () =>{

    const [data, setdata] = useState([]);
    const [active, setactive] = useState('');
    const [confirmed, setconfirmed] = useState('');
    const [deaths, setdeaths] = useState('');
    const [recovered, setrecovered] = useState('');
    const [lastupdate, setlastupdate] = useState('');
    const [state, setstate] = useState('');

    useEffect(()=>{
        axios.get('https://api.covid19india.org/data.json')
        .then((res) => {
            const data = res.data.statewise;
            
            setdata(data[0]);
            setactive(data[0].active);
            setconfirmed(data[0].confirmed);
            setdeaths(data[0].deaths);
            setrecovered(data[0].recovered);
            setlastupdate(data[0].lastupdatedtime);
            setstate(data[0].state);

            console.log(data);
        })
        .catch(err => {
            console.log("ERROR!!");
        });
    }, []);

    const handleChangeDropdown = (e) => {
        const idx = e.target.value;

        axios.get('https://api.covid19india.org/data.json')
        .then((res) => {
            const data = res.data.statewise;
            setdata(data[idx]);
            setactive(data[idx].active);
            setconfirmed(data[idx].confirmed);
            setdeaths(data[idx].deaths);
            setrecovered(data[idx].recovered);
            setlastupdate(data[idx].lastupdatedtime);
            setstate(data[idx].state);
        })
        .catch(err => {
            console.log("ERROR!!");
        });

        console.log(state);
    }
     
    return(
        <div className="page">

            <div className="container headings">
                <h1 className='live '>🔴 LIVE</h1>
                <h2 className="heading2"><strong>COVID-19 CORONAVIRUS TRACKER</strong></h2>
            </div>
                
                
            <div className='container custom_row'>
                <div className="row justify-content-md-center">
                    <div className="col col-cos">
                        <div className="custome-card loc on_hover">
                            <p className='card_name name'>SELECT LOCATION</p>
                            <select name="select-location" className="drop_down" onChange={handleChangeDropdown}>
                                <option value='0'>All over India</option>
                                <option value='1'>Andaman and Nicobar Islands</option>
                                <option value='2'>Andhra Pradesh</option>
                                <option value='3'>Arunachal Pradesh</option>
                                <option value='4'>Assam</option>
                                <option value='5'>Bihar</option>
                                <option value='6'>Chandigarh</option>
                                <option value='7'>Chhattisgarh</option>
                                <option value='8'>Dadra and Nagar Haveli and Daman and Diu</option>
                                <option value='9'>Delhi</option>
                                <option value='10'>Goa</option>
                                <option value='11'>Gujarat</option>
                                <option value='12'>Haryana</option>
                                <option value='13'>Himachal Pradesh</option>
                                <option value='14'>Jammu and Kashmir</option>
                                <option value='15'>Jharkhand</option>
                                <option value='16'>Karnataka</option>
                                <option value='17'>Kerala</option>
                                <option value='18'>Ladakh</option>
                                <option value='19'>Lakshadweep</option>
                                <option value='20'>Madhya Pradesh</option>
                                <option value='21'>Maharashtra</option>
                                <option value='22'>Manipur</option>
                                <option value='23'>Meghalaya</option>
                                <option value='24'>Mizoram</option>
                                <option value='25'>Nagaland</option>
                                <option value='26'>Odisha</option>
                                <option value='27'>Puducherry</option>
                                <option value='28'>Punjab</option>
                                <option value='29'>Rajasthan</option>
                                <option value='30'>Sikkim</option>
                                {/* <option value='31'>State Unassigned</option> */}
                                <option value='32'>Tamil Nadu</option>
                                <option value='33'>Telangana</option>
                                <option value='34'>Tripura</option>
                                <option value='35'>Uttar Pradesh</option>
                                <option value='36'>Uttarakhand</option>
                                <option value='37'>West Bengal</option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-cos">
                        <div className="custome-card recovered on_hover">
                            <p className='card_name name'><span> TOTAL </span> RECOVERED</p>
                            <p className="card_total card_small number">{recovered}</p>
                        </div>
                    </div>
                    <div className="col col-cos">
                        <div className="custome-card confirmed on_hover">
                            <p className='card_name name'><span> TOTAL </span> CONFIRMED</p>
                            <p className="card_total card_small number">{confirmed}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container custom_row'>
                <div className="row justify-content-md-center">
                    <div className="col col-cos">
                        <div className="custome-card deaths on_hover">
                            <p className='card_name name'><span> TOTAL </span> DEATHS</p>
                            <p className="card_total card_small number">{deaths}</p>
                        </div>
                    </div>
                    <div className="col col-cos">
                        <div className="custome-card active on_hover">
                            <p className='card_name name'><span> TOTAL </span> ACTIVE</p>
                            <p className="card_total card_small number">{active}</p>
                        </div>
                    </div>
                    <div className="col col-cos">
                        <div className="custome-card update on_hover">
                            <p className='card_name name'><span> LAST </span> UPDATED</p>
                            <p className="card_total card_small number">{lastupdate}</p>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Covid;