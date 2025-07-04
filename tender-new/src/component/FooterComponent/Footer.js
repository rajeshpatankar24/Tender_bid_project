import './Footer.css';
import { useState, useEffect } from 'react';

function Footer() {

    const [navContent, setNavContent] = useState();

    useEffect(() => {
         setInterval(() => {
            var token = localStorage.getItem("token");
            var role = localStorage.getItem("role");
            if (token != null && role == "admin") {
                setNavContent(
                    <>
                        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">

                            <div class="container">
                                <div class="copyright">
                                    <div class="row">
                                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                            &copy; <a class="border-bottom" href="#">Tenders</a>, All Right Reserved.
                                        </div>
                                        <div class="col-md-6 text-center text-md-end">

                                            Designed By <a class="border-bottom" >Code-R</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer End */}


                        {/* Back to Top */}
                        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>

                    </>
                )
            }
            else if (token != null && role == "user") {
                var token = localStorage.getItem("token");
                var role = localStorage.getItem("role");
                setNavContent(
                    <>
                        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">

                            <div class="container">
                                <div class="copyright">
                                    <div class="row">
                                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                            &copy; <a class="border-bottom" href="#">Tenders</a>, All Right Reserved.
                                        </div>
                                        <div class="col-md-6 text-center text-md-end">
                                            Designed By <a class="border-bottom" >Code-R</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer End */}


                        {/* Back to Top */}
                        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>

                    </>
                )
            }
            else {
                setNavContent(
                    <>
                        {/* Footer Start */}
                        <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                            <div class="container py-5">
                                <div class="row g-5">
                                    <div class="col-lg-4 col-md-6">
                                        <h4 class="text-light mb-4">Address</h4>
                                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, Indore, India</p>
                                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+9192 345 67890</p>
                                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                                        <div class="d-flex pt-2">
                                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6">
                                        <h4 class="text-light mb-4">Quick Links</h4>
                                        <a class="btn btn-link" href="">Home</a>
                                        <a class="btn btn-link" href="">About</a>
                                        <a class="btn btn-link" href="">Services</a>
                                        <a class="btn btn-link" href="">About us</a>

                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <h4 class="text-light mb-4">Newsletter</h4>
                                        <p>Go for Tenders .</p>
                                        <div class="position-relative mx-auto" style={{ "max-width": "400px" }}>
                                            <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="copyright">
                                    <div class="row">
                                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                            &copy; <a class="border-bottom" href="#">Tenders</a>, All Right Reserved.
                                        </div>
                                        <div class="col-md-6 text-center text-md-end">
                                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ****/}
                                            Designed By <a class="border-bottom" >Code-R</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer End */}


                        {/* Back to Top */}
                        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>

                    </>
                )
            }

        }, 1);
    },[])
    return (
        <>
            {navContent}
        </>

    );
}

export default Footer;
