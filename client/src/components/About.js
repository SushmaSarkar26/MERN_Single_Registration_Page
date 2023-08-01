import React from 'react';
import sushmapic from "../img/sushmalogo.png"

const About = () => {
    return (
        <>
           <div className='container emp-profile'>
            <form method=''>
                <div className='col d-flex justify-content-start align-items-center'>
                    <div className='col-md-4'>
                        <img src={sushmapic}alt="sushma"/>
                    </div>

                    <div className='col-md-6'>
                        <div className='profile-head'>
                            <h5>Sushma Sarkar</h5>
                            <h6>Web Development</h6>
                            <p className='profile-reating mt-3 mb-5'>RANKINGS: <span> 1/10 </span> </p>


                            <ul className='nav nav-tabs' role="tablist">
                                <li className='nav-item'>
                                    <a className='nav-link active' id='home-tab' data-toggle="tab" href="/#home" role="tab">About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='home-tab' data-toggle="tab" href="/#home" role="tab">Timeline</a>
                                </li>
                            </ul>


                        </div>
                    </div>


                    <div className='col-md-2'>
                        <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile"/>
                    </div>


                </div>

                <div className='col d-flex justify-content-start align-items-center'>
                    <div className='row'>
                        {/* left side url */}
                        <div className='profile-work row'>
                            <p> WORK LINK</p>
                            <a href="/#" target="_sushma">Github</a>
                            <a href="/#" target="_sushma">Linkdin</a>
                            <a href="/#" target="_sushma">Instagram</a>
                            <a href="/#" target="_sushma">Facebook</a>
                        </div>
                    </div>

                    {/* right side data toggle */}
                    <div className="col-md-8 pl-5 about-info">
                        <div className='tab-content profile-tab' id='myTabContent'>
                            <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>

                                <div className='col d-flex justify-content-start align-items-center'>
                                    <div className='col-md-6'>
                                        <label>User Id</label>
                                    </div>
                                    <div className=''>
                                        <p>788876956862</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </form>
            </div> 
        </>
    )
}

export default About;