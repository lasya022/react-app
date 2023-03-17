import React from "react";
import './style.css';
import ArrowDownLeft from "./images/ArrowDownLeft.png"
import ArrowRight from "./images/ArrowRight.png"
import ArrowUpRight from "./images/ArrowUpRight.png"
import ArrowLineUp from "./images/ArrowLineUp.png"
import ArrowsClockwise from "./images/ArrowsClockwise.png"
import Amazon from "./images/Amazon.png"
import icon from "./images/icon.png"
import profile from "./images/profile.png"
function Dashboard(){
    return(
       <>
         <div class="parent">
       
       <div class="header">
           <div>
               <div class="cards">
                   <div class="imagediv">
                       <div class="circle">
                           <img src={ArrowDownLeft} alt="img"/>
                       </div>
                       <div class="sidearrow">
                           <p class="View">View</p>
                           <img class="imag" src={ArrowRight} alt=""/>
                       </div>


                   </div>
                   <div class="imagediv">
                       <h5 class="first-box"> Companies Onboarded</h5>
                       <h4 class="eight">8</h4>


                   </div>


               </div>
           </div>
           <div>
               <div class="cards">
                   <div class="imagediv">
                       <div class="purple-circle">
                           <img src={ArrowUpRight} alt="img"/>
                       </div>
                       <div class="sidearrow">
                           <p class="View">View</p>
                           <img class="imag" src={ArrowRight} alt=""/>
                       </div>

                   </div>
                   <div class="imagediv">
                       <h5 class="first-box"> Number of Jobs Posted</h5>
                       <h4 class="eight">8</h4>


                   </div>

               </div>
           </div>
           <div>
               <div class="cards">
                   <div class="imagediv">
                       <div class="blue-circle">
                           <img src={ArrowLineUp} alt="img"/>
                       </div>
                       <div class="sidearrow">
                           <p class="View">View</p>
                           <img class="imag" src={ArrowRight} alt=""/>
                       </div>

                   </div>
                   <div class="imagediv">
                       <h5 class="first-box"> Applications Recieved</h5>
                       <h4 class="eight">8</h4>


                   </div>

               </div>
           </div>

           <div>
               <div class="cards">
                   <div class="imagediv">
                       <div class="green-circle">
                           <img src={ArrowsClockwise} alt="img"/>
                       </div>
                       <div class="sidearrow">
                           <p class="View">View</p>
                           <img class="imag" src={ArrowRight} alt=""/>
                       </div>

                   </div>
                   <div class="imagediv">
                       <h5 class="first-box"> Number of Users</h5>
                       <h4 class="eight">8</h4>


                   </div>

               </div>
           </div>

       </div>
       <div class="main"> 
           <div class="table-container">
               <div class="left">

                   <div class="bottom">
                       <div class="bottom-p">
                           <h6 class="Recently">Recently Companies Onboarded
                           </h6>
                           <div class="sidearrow1">
                               <p class="View">View All</p>
                               <img class="imag" src={ArrowRight} alt=""/>
                           </div>
                       </div>


                       <div class="wrap">
                           <div class="min-divs">
                               <img class="imge" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>
                       </div>

                       <div class="wrap">
                           <div class="min-divs">
                               <img class="image" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>

                       </div>

                       <div class="wrap">
                           <div class="min-divs">
                               <img class="image" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>

                       </div>
                       <div class="wrap">
                           <div class="min-divs">
                               <img class="image" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>

                       </div>
                       <div class="wrap">
                           <div class="min-divs">
                               <img class="image" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>

                       </div>
                       <div class="wrap">
                           <div class="min-divs">
                               <img class="image" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>

                       </div>
                       <div class="wrap">
                           <div class="min-divs">
                               <img class="image" src={Amazon} alt="0"/>
                               <h6 class="Amazon">Amazon</h6>
                           </div>
                           <div class="new">
                               <h6 class="onboard">Onboarded on : 15/02/2023</h6>
                           </div>

                       </div>
                   </div>
               </div>
           </div>
           <div class="table-container">
               <div class="right">

                   <div class="applied">
                       <div class="inner">
                           <h6 class="RAC">Recently Applied Candidate</h6>

                           <img class="images" src={icon} alt="0"/>
                       </div>
                       <div class="list">
                           <div class="extra">
                               <div><img class="profile" src={profile} alt="#"/></div>

                               <div>
                                   <h6 class="title">Alyson Hanger</h6>
                                   <p class="Position">Position: <span> Product Manager</span></p>
                               </div>

                           </div>

                           <h6 class="title">Amazon</h6>
                       </div>

                       <div class="list">
                           <div class="extra">
                               <div><img class="profile" src={profile} alt="#"/></div>

                               <div>
                                   <h6 class="title">Alyson Hanger</h6>
                                   <p class="Position">Position: <span> Product Manager</span></p>
                               </div>

                           </div>

                           <h6 class="title">Amazon</h6>
                       </div>
                       <div class="list">
                           <div class="extra">
                               <div><img class="profile" src={profile} alt="#"/></div>

                               <div>
                                   <h6 class="title">Alyson Hanger</h6>
                                   <p class="Position">Position: <span> Product Manager</span></p>
                               </div>

                           </div>

                           <h6 class="title">Amazon</h6>
                       </div>
                       <div class="list">
                           <div class="extra">
                               <div><img class="profile" src={profile} alt="#"/></div>

                               <div>
                                   <h6 class="title">Alyson Hanger</h6>
                                   <p class="Position">Position: <span> Product Manager</span></p>
                               </div>

                           </div>

                           <h6 class="title">Amazon</h6>
                       </div>
                       <div class="list">
                           <div class="extra">
                               <div><img class="profile" src={profile} alt="#"/></div>

                               <div>
                                   <h6 class="title">Alyson Hanger</h6>
                                   <p class="Position">Position: <span> Product Manager</span></p>
                               </div>

                           </div>

                           <h6 class="title">Amazon</h6>
                       </div>
                       <div class="list">
                           <div class="extra">
                               <div><img class="profile" src={profile} alt="#" /></div>

                               <div>
                                   <h6 class="title">Alyson Hanger</h6>
                                   <p class="Position">Position: <span> Product Manager</span></p>
                               </div>

                           </div>

                           <h6 class="title">Amazon</h6>
                       </div>
                   </div>
               </div>
           </div>
       

       </div>


       <div class="table-container">
           <div class="div">
               <div class="table-header">
                   <h4 class="Recently Posted Jobs">Recently Posted Jobs</h4>
                   <div class="View-All">
                       <p class="View All Paragraph">View All</p>
                       <img class="img1" src={ArrowRight} alt=""/>
                   </div>

               </div>
               <table class="table table-borderless">
                   <tr>
                       <th>id</th>
                       <th>Company Name</th>
                       <th>Position Title</th>
                       <th>Type</th>
                       <th>Actions</th>
                   </tr>
                   <tr>
                       <td>#123456789</td>
                       <td>ESDS</td>
                       <td>Business and Sales
                           Management</td>
                       <td>Internship</td>
                       <td>
                           <div class="btns">View Job Postings</div>
                       </td>
                   </tr>
                   <tr>
                       <td>#123456789</td>
                       <td>ESDS</td>
                       <td>Business and Sales
                           Management</td>
                       <td>Internship</td>
                       <td>
                           <div class="btns">View Job Postings</div>
                       </td>
                   </tr>

                   <tr>
                       <td>#123456789</td>
                       <td>ESDS</td>
                       <td>Business and Sales
                           Management</td>
                       <td>Internship</td>
                       <td>
                           <div class="btns">View Job Postings</div>
                       </td>
                   </tr>

                   <tr>
                       <td>#123456789</td>
                       <td>ESDS</td>
                       <td>Business and Sales
                           Management</td>
                       <td>Internship</td>
                       <td>
                           <div class="btns">View Job Postings</div>
                       </td>
                   </tr>
               </table>
           </div>

       </div>
       </div>
       </>
    );
}
export default Dashboard;