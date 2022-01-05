import React from 'react'
import { useEffect ,useState} from 'react'
import "../styles/userinfo.css"
import Pagination from './Pagination'
import Usedeatil from './Usedeatil';
import axios from 'axios';

function UserInfo() {

    const [data ,setData]=useState('')
    useEffect(() => {
        
       axios.get("https://randomuser.me/api").then((Response)=>{
        setData(Response.data[0].name)
       }).catch((error)=>{
           console.log(error)
       })
        
      },[]);
    return (
        <div>
            <div className="headerwarper">
            <header className="title">Random User Information</header>
            <div className="searchuser">
                <select className="selectuser">
                    <option>select user by City</option>
                    <option>Dehli</option>
                    <option>Kolkat</option>
                    <option>Mumbai</option>
                    <option>Bengalure</option>
                    <option>Hydrabad</option>
                </select>
                <input type="text" className="inputsearch"  placeholder='search users by location'/>
                <span class="fad fa-search seachicon"></span>
            </div>
            </div>
            <div className="userContainer">
                <h3 className="quickserch-title">Quicksearch of user Info</h3>
                {data}
                <Usedeatil/>
                <Usedeatil/>
                <Usedeatil/>
            </div>
            <Pagination/>
           <div className="foooter">
               footer@userInfo.com
           </div>
        </div>
    )
}

export default UserInfo
