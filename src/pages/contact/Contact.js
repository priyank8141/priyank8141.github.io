import React, { useState } from 'react'
import { Fade } from 'react-reveal';
import { submitFormEnquiry } from '../../helpers/dbCrud';
import { data } from '../../utils/info';
import styles from "./style.module.css";
import { toast } from 'react-toastify';
export const Contact = ({ contactDivRef }) => {

    const initalValues = {
        name: null,
        email: null,
        phone: null,
        subject: null,
        message: null,
    }

    const [postData, setPostData] = useState(initalValues);

    const handleInputChange = (e) => {
        try {
            const { name, value } = e.target;
            setPostData({
                ...postData,
                [name]: value,
            });
        } catch (err) {
            console.log(err);
        }
    };
    const addEnquiry = async (e) => {
        console.log("fds")
        e.preventDefault()
        const response = await submitFormEnquiry(postData)
        if (response) {
            toast("Your Enquiry Sent Successfully")
        }
    }

    return (
        <div className={styles.contact} ref={contactDivRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="get_info">
                            <div className={styles.section_title_two}>
                                <h6>Get in Touch</h6>
                                <h2>Talk or Meet with Me</h2>
                            </div>
                            <Fade left>
                                <div className={styles.media_get_item}>
                                    <i className="fa fa-3x fa-phone"></i>
                                    <div className={styles.media_body}>
                                        <h6>Call Me Now</h6>
                                        <p>{data?.about?.mobile || 'Your mobile No'}</p>
                                    </div>
                                </div>
                                <div className={styles.media_get_item}>
                                    <i className="fa fa-3x fa-envelope"></i>
                                    <div className={styles.media_body}>
                                        <h6>Contact Me</h6>
                                        <p>{data?.about?.email || 'Your Email'}</p>
                                    </div>
                                </div>
                                <div className={styles.media_get_item}>
                                    <i className="fa fa-3x fa-globe"></i>
                                    <div className={styles.media_body}>
                                        <h6>Location</h6>
                                        <p>{data?.about?.address || 'Your Address'}</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="react-reveal fadeInRight input_form" style={{ animationDuration: '800ms', animationDelay: '0ms', animationIterationCount: 1, opacity: 1 }}>
                            <div className={styles.section_title_two}>
                                <h6>Contact us</h6>
                                <h2>Let me know here</h2>
                            </div>
                            <Fade right>
                                <form className="form_class" onSubmit={addEnquiry}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" id="name" required name="name" onChange={handleInputChange} className="form-control" placeholder="Your Name*" /><p></p></div><div className="col-lg-6">
                                            <input type="email" className="form-control" required id="email" name="email" onChange={handleInputChange} placeholder="Your Email*" /><p></p></div>
                                        <div className="col-lg-6">
                                            <input type="text" id="subject" name="subject" required className="form-control" onChange={handleInputChange} placeholder="Subject*" /><p></p></div>
                                        <div className="col-lg-6">
                                            <input type="text" className="form-control" id="phone" name="phone" onChange={handleInputChange} placeholder="Phone" />
                                            <p></p>
                                        </div>
                                    </div>
                                    <textarea name="message" id="message" required className="form-control" rows="6" onChange={handleInputChange} placeholder="Your Message ..."></textarea>
                                    <button type="submit" className={styles.send_btn}>Send Message</button>
                                </form>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
