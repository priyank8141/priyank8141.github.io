import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";

export const Contact = ({ contactDivRef }) => {
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
                                    <h6>Get Me Here</h6>
                                    <p>{data?.about?.address || 'Your Address'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="react-reveal fadeInRight input_form" style={{ animationDuration: '800ms', animationDelay: '0ms', animationIterationCount: 1, opacity: 1 }}>
                            <div className={styles.section_title_two}>
                                <h6>Contact us</h6>
                                <h2>Let me know here</h2>
                            </div>
                            <form className="form_class">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" /><p></p></div><div className="col-lg-6">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email*" /><p></p></div>
                                    <div className="col-lg-6">
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject*" /><p></p></div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone*" />
                                        <p></p>
                                    </div>
                                </div>
                                <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message ..."></textarea>
                                <button type="submit" className={styles.send_btn}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
