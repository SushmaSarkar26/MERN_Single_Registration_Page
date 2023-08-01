import React from 'react';

const Contact = () => {
    return (
        <>
          <div className='contact-info'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1 d_flex justify-content-between'>
                        {/* Phone Number */}
                        <div className='contact_info-item d_flex justify-content-start align-items-center'>                            
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                            <div className='contact_info-content'>
                                <div className='contact_info_title'>
                                    Phone
                                </div>
                                <div className='contact_info_text'>
                                    +91 1111 543 2159
                                </div>
                            </div>
                        </div>

                        {/* email id */}
                        <div className='contact_info-item d_flex justify-content-start align-items-center'>                            
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                            <div className='contact_info-content'>
                                <div className='contact_info_title'>
                                    Email
                                </div>
                                <div className='contact_info_text'>
                                    sushma@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* address */}
                        <div className='contact_info-item d_flex justify-content-start align-items-center'>                            
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                            <div className='contact_info-content'>
                                <div className='contact_info_title'>
                                    Adress
                                </div>
                                <div className='contact_info_text'>
                                    Nadia, west Bengal
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>  
        </>
    )
}

export default Contact;