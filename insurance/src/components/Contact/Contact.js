import React from 'react'
import './style.css'
import './bootstrap.min.css'

function Contact() {
  return (
    <div>
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Page Header Start --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
        <div className="page-header mb-5 wow fadeIn h-screen" data-wow-delay="0.1s">
            <div className="flex flex-col justify-center px-20 h-full w-full">
                <h1 className="display-4 animated slideInDown mb-4">Contact Us</h1>
                <p className='font-semibold text-black text-lg w-1/2'>
                    We recognize that the journey starts with you, and we are dedicated to accompanying you.
                    {/* From the outset, we offer comprehensive coverage and exceptional service. */}
                    Our experienced team is committed to guiding you through the insurance of mind.
                    Trust ABC Insurance to go above and beyond for you.
                </p>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
        
        <h2 className='w-3/5 mx-auto my-20 text-center'>We're insurance provider To Help With Financial Security of your Business</h2>
        <div className="grid grid-cols-2 w-1/2 mx-auto text-sm gap-3 text-black">
            <div className='flex gap-3'>
                <i class="fa-solid fa-map-location-dot text-4xl"></i>
                <div>
                    <h2 className='text-xl'>Office Location</h2>
                    <p>Ras Abebe Aregay Street, Awash Towers</p>
                    <p>Addis Ababa, Ethiopia</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-envelope text-3xl"></i>
                <div>
                    <h2 className='text-xl'>Email Information</h2>
                    <p>aic@ethionet.com</p>
                    <p>aic@awashinsurance.com</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-phone text-3xl"></i>
                <div>
                    <h2 className='text-xl'>Calling Support</h2>
                    <p>+251 11557 00 01</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-phone text-3xl"></i>
                <div>
                    <h2 className='text-xl'>Chief Customers Office</h2>
                    <p>+251 11 5570275</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-phone text-3xl"></i>
                <div>
                    <h2 className='text-xl'>General Insurance Claims</h2>
                    <p>+251 11 5570274</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-phone text-3xl"></i>
                <div>
                    <h2 className='text-xl'>Financial Management</h2>
                    <p>+251 11 5570274</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-phone text-3xl"></i>
                <div>
                    <h2 className='text-xl'>Life Department</h2>
                    <p className='mb-1'>+251 11 5570274</p>
                    <p>+251 11 5570274</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <i class="fa-solid fa-phone text-3xl"></i>
                <div>
                    <h2 className='text-xl'>Shareholder's Account</h2>
                    <p>+251 11 5570274</p>
                </div>
            </div>
        </div>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-6 mb-5">
                    If you encounter any problems, please contact our support team
                    </h1>
                    <p className="mb-4">
                    If you encounter any problems or need assistance with getting in touch, please feel free to write us a message. You can provide the details of the issue you're facing, and we'll do our best to help you out.
                    </p>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                                />
                                <label for="email">Your Email</label>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="form-floating">
                                <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                />
                                <label for="subject">Subject</label>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="form-floating">
                                <textarea
                                className="form-control h-24"
                                placeholder="Leave a message here"
                                id="message"
                                ></textarea>
                                <label for="message">Message</label>
                            </div>
                            </div>
                            <div className="col-12">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold py-3 px-5" type="submit">
                                Send Message
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            <div
                className="col-lg-6 wow fadeIn min-h-[450px]"
                data-wow-delay="0.5s"
            >
                <div className="position-relative rounded overflow-hidden h-100 min-h-[450px] border-none">
                    <iframe className="position-relative w-100 h-100 border-none" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15760.940302505815!2d38.76822805!3d9.042308799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1704212267207!5m2!1sen!2set" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" aria-hidden="false" tabindex="0"
                    ></iframe>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* <!-- Contact End --> */}

        {/* <!-- JavaScript Libraries --> */}
        {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script> */}
        


        {/* <!-- Javascript --> */}
        {/* <script src="js/main.js"></script> */}
    </div>
    )
}

export default Contact