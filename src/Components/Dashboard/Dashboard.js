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
function Dashboard() {
    return (
        <>
            <div className="Dashboard-Container">

                <div className="Cards-Container">
                    <div>
                        <div className="cards">
                            <div className="Image-Content">
                                <div className="circle">
                                    <img src={ArrowDownLeft} alt="img" />
                                </div>
                                <div className="sidearrow">
                                    <p className="paragraph">View</p>
                                    <img className="symbol-image" src={ArrowRight} alt="" />
                                </div>


                            </div>
                            <div className="Image-Content">
                                <h5 className="card-detail"> Companies Onboarded</h5>
                                <h4 className="number-container">8</h4>


                            </div>


                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <div className="Image-Content">
                                <div className="purple-circle">
                                    <img src={ArrowUpRight} alt="img" />
                                </div>
                                <div className="sidearrow">
                                    <p className="paragraph">View</p>
                                    <img className="symbol-image" src={ArrowRight} alt="" />
                                </div>

                            </div>
                            <div className="Image-Content">
                                <h5 className="card-detail"> Number of Jobs Posted</h5>
                                <h4 className="number-container">8</h4>


                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="cards">
                            <div className="Image-Content">
                                <div className="blue-circle">
                                    <img src={ArrowLineUp} alt="img" />
                                </div>
                                <div className="sidearrow">
                                    <p className="paragraph">View</p>
                                    <img className="symbol-image" src={ArrowRight} alt="" />
                                </div>

                            </div>
                            <div className="Image-Content">
                                <h5 className="card-detail"> Applications Recieved</h5>
                                <h4 className="number-container">8</h4>


                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="cards">
                            <div className="Image-Content">
                                <div className="green-circle">
                                    <img src={ArrowsClockwise} alt="img" />
                                </div>
                                <div className="sidearrow">
                                    <p className="paragraph">View</p>
                                    <img className="symbol-image" src={ArrowRight} alt="" />
                                </div>

                            </div>
                            <div className="Image-Content">
                                <h5 className="card-detail"> Number of Users</h5>
                                <h4 className="number-container">8</h4>


                            </div>

                        </div>
                    </div>

                </div>
                <div className="main-container">
                    <div className="table-container">
                        <div className="left-container">

                            <div className="content-container">
                                <div className="content-titles">
                                    <h6 className="Companies-Onboarding">Recently Companies Onboarded
                                    </h6>
                                    <div className="sidearrow-sign">
                                        <p className="paragraph">View All</p>
                                        <img className="symbol-image" src={ArrowRight} alt="" />
                                    </div>
                                </div>


                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>
                                </div>

                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>

                                </div>

                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>

                                </div>
                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>

                                </div>
                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>

                                </div>
                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>

                                </div>
                                <div className="Company-Details">
                                    <div className="image-text-container">
                                        <img className="image" src={Amazon} alt="0" />
                                        <h6 className="Amazon">Amazon</h6>
                                    </div>
                                    <div className="new">
                                        <h6 className="onboarding-date">Onboarded on : 15/02/2023</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-container">
                        <div className="right-container">

                            <div className="applied">
                                <div className="Candidate-Details">
                                    <h6 className="Recently Applied Candidate">Recently Applied Candidate</h6>

                                    <img className="images" src={icon} alt="0" />
                                </div>
                                <div className="list">
                                    <div className="Details">
                                        <div><img className="profile" src={profile} alt="#" /></div>

                                        <div>
                                            <h6 className="Profile-Name">Alyson Hanger</h6>
                                            <p className="Post">Position: <span> Product Manager</span></p>
                                        </div>

                                    </div>

                                    <h6 className="Amazon">Amazon</h6>
                                </div>

                                <div className="list">
                                    <div className="Details">
                                        <div><img className="profile" src={profile} alt="#" /></div>

                                        <div>
                                            <h6 className="Profile-Name">Alyson Hanger</h6>
                                            <p className="Post">Position: <span> Product Manager</span></p>
                                        </div>

                                    </div>

                                    <h6 className="Amazon">Amazon</h6>
                                </div>
                                <div className="list">
                                    <div className="Details">
                                        <div><img className="profile" src={profile} alt="#" /></div>

                                        <div>
                                            <h6 className="Profile-Name">Alyson Hanger</h6>
                                            <p className="Post">Position: <span> Product Manager</span></p>
                                        </div>

                                    </div>

                                    <h6 className="Amazon">Amazon</h6>
                                </div>
                                <div className="list">
                                    <div className="Details">
                                        <div><img className="profile" src={profile} alt="#" /></div>

                                        <div>
                                            <h6 className="Profile-Name">Alyson Hanger</h6>
                                            <p className="Post">Position: <span> Product Manager</span></p>
                                        </div>

                                    </div>

                                    <h6 className="Name">Amazon</h6>
                                </div>
                                <div className="list">
                                    <div className="Details">
                                        <div><img className="profile" src={profile} alt="#" /></div>

                                        <div>
                                            <h6 className="Profile-Name">Alyson Hanger</h6>
                                            <p className="Post">Position: <span> Product Manager</span></p>
                                        </div>

                                    </div>

                                    <h6 className="Amazon">Amazon</h6>
                                </div>
                                <div className="list">
                                    <div className="Details">
                                        <div><img className="profile" src={profile} alt="#" /></div>

                                        <div>
                                            <h6 className="Profile-Name">Alyson Hanger</h6>
                                            <p className="Post">Position: <span> Product Manager</span></p>
                                        </div>

                                    </div>

                                    <h6 className="Amazon">Amazon</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="table-container">
                    <div className="table-details">
                        <div className="table-header">
                            <h4 className="Recently Posted Jobs">Recently Posted Jobs</h4>
                            <div className="Table-div">
                                <p className="Table-Paragraph">View All</p>
                                <img className="Table-image" src={ArrowRight} alt="" />
                            </div>

                        </div>
                        <table className="table table-borderless">
                            <tr>
                                <th>id</th>
                                <th>Company Name</th>
                                <th>Position Name</th>
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
                                    <div className="buttons">View Job Postings</div>
                                </td>
                            </tr>
                            <tr>
                                <td>#123456789</td>
                                <td>ESDS</td>
                                <td>Business and Sales
                                    Management</td>
                                <td>Internship</td>
                                <td>
                                    <div className="buttons">View Job Postings</div>
                                </td>
                            </tr>

                            <tr>
                                <td>#123456789</td>
                                <td>ESDS</td>
                                <td>Business and Sales
                                    Management</td>
                                <td>Internship</td>
                                <td>
                                    <div className="buttons">View Job Postings</div>
                                </td>
                            </tr>

                            <tr>
                                <td>#123456789</td>
                                <td>ESDS</td>
                                <td>Business and Sales
                                    Management</td>
                                <td>Internship</td>
                                <td>
                                    <div className="buttons">View Job Postings</div>
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