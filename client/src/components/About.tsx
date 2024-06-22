import Header_Terms_Donate from './Header_Terms_Donate'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const About = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "donor-22.jpg",
        "donor-26.jpg",
        "donor-36.jpg"
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className='bg-gray-200 '>
            <Header_Terms_Donate />

            <main className="p-10 max-w-6xl mx-auto  bg-white rounded-lg shadow-md my-14">
                <div className=" w-full text-center ">
                    <h1 className="text-red-500 text-4xl mb-14 pt-4">About LifeFlow</h1>
                </div>
                <section className="about-us">
                    <p className="mb-5">Welcome to <strong>Life Flow</strong>, a dedicated platform connecting donors with those in need of life-saving blood. Our mission is to ensure that no one suffers due to a lack of blood. We are committed to creating a community of donors and making the process of donating blood as easy and rewarding as possible.</p>

                    <h2 className="text-2xl font-bold text-red-500 mb-3">Mission of Life Flow</h2>
                    <div className="slider-container relative max-w-full overflow-hidden mb-5">
                        <div
                            className="slides flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    className="slide w-full p-1"
                                    src={slide}
                                    alt={`Image ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={prevSlide}
                            style={{ left: 0 }}
                            className="button absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 z-10"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextSlide}
                            style={{ right: 0 }}
                            className="button absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 z-10"
                        >
                            &#10095;
                        </button>
                    </div>

                    <p className="mb-3 ">The mission of Life Flow is to create an accessible, reliable, and compassionate platform that connects generous blood donors with those in critical need. Our goal is to streamline the blood donation process, foster a supportive community, and ensure a consistent and safe blood supply to save lives and enhance public health. Through innovation, education, and community engagement, we aim to make blood donation an integral part of a healthier society.</p>
                    <ul className='px-4 py-4 bg-gray-100 list-disc list-inside'>
                        <li className='text-black mb-2 text-base '>Facilitating Easy and Accessible Donations</li>
                        <li className='text-black mb-2 text-base '>Raising Awareness and Educating the Public</li>
                        <li className='text-black mb-2 text-base '>Ensuring Safety and Trust</li>
                        <li className='text-black mb-2 text-base '>Building a Community of Donors</li>
                        <li className='text-black mb-2 text-base '>Connecting Donors with Recipients</li>
                        <li className='text-black mb-2 text-base '>Supporting Blood Banks and Healthcare Providers</li>
                        <li className='text-black mb-2 text-base '>Advocating for Regular Donations</li>
                        <li className='text-black mb-2 text-base '>Utilizing Technology for Better Outcomes</li>
                        <li className='text-black mb-2 text-base '>Promoting Inclusivity and Accessibility</li>
                    </ul>


                    <h2 className="text-2xl font-bold text-red-500 mb-3 mt-6">Why Donate Blood?</h2>
                    <p className="mb-3 ">The mission of Life Flow is to create an accessible, reliable, and compassionate platform that connects generous blood donors with those in critical need. Our goal is to streamline the blood donation process, foster a supportive community, and ensure a consistent and safe blood supply to save lives and enhance public health. Through innovation, education, and community engagement, we aim to make blood donation an integral part of a healthier society.</p>
                    <ul className=' px-4 py-4 bg-gray-100 list-disc list-inside'>
                        <li className='text-black mb-2 text-base '>Saving Lives</li>
                        <li className='text-black mb-2 text-base '>Supporting Patients with Chronic Illnesses</li>
                        <li className='text-black mb-2 text-base '>Emergency Preparedness</li>
                        <li className='text-black mb-2 text-base '>Enhancing Surgical Outcomes</li>
                        <li className='text-black mb-2 text-base '>Supporting Cancer Patients</li>
                        <li className='text-black mb-2 text-base '>Promoting Community Health</li>
                        <li className='text-black mb-2 text-base '>Personal Health Benefits</li>
                        <li className='text-black mb-2 text-base '>Meeting Constant Demand</li>
                        <li className='text-black mb-2 text-base '>Universal Need</li>
                    </ul>


                    <h2 className="text-2xl font-bold text-red-500 mb-3 mt-6">Our Impact</h2>
                    <p className="mb-3">Since our inception, Life Flow has successfully connected to all donors with recipients, ensuring that life-saving blood is available when it's needed most. Our efforts have contributed to saving lives, supporting medical procedures, and improving the health outcomes of countless individuals.</p>
                    <p className="mb-3">Here are some of our achievements:</p>
                    <ul className="list-disc pl-5 mb-5">
                        {['Over 100+ successful blood donations facilitated.', 'Partnerships with over 50+ hospitals and clinics nationwide.', 'Regular blood drives and community engagement events.', 'Educational campaigns about the importance of blood donation.'].map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold text-red-500 mb-3">Meet the Team</h2>
                    <p className="mb-3">Life Flow is powered by a dedicated team of professionals who are passionate about making a difference. Our team includes:</p>
                    <ul className="list-disc pl-5 mb-5">
                        {['Deepak Kumar: IT Specialist - Responsible for maintaining our platform and ensuring a seamless user experience.', 'Astha Anand: Director of Operations - An expert in logistics and operations, ensuring smooth and efficient processes.', 'Nikhil Kumar: Community Outreach Coordinator - Focused on building relationships and engaging with the community.', 'Jagjeet Kumar: IT Specialist - Responsible for maintaining our platform and ensuring a seamless user experience.', 'Rajeev Kumar: IT Specialist - Responsible for maintaining our platform and ensuring a seamless user experience.'].map((member, index) => (
                            <li key={index} className="mb-2">{member}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold text-red-500 mb-3">Testimonials</h2>
                    <blockquote className="bg-gray-100 p-5 border-l-4 border-red-500 mb-5">
                        <p>"Life Flow made donating blood so easy and rewarding. I'm proud to be a regular donor now!" - Manjeet Kumar.</p>
                    </blockquote>
                    <blockquote className="bg-gray-100 p-5 border-l-4 border-red-500 mb-5">
                        <p>"Thanks to Life Flow, I was able to get the blood transfusion I needed during my surgery. I'm forever grateful!" - Raushan Singh.</p>
                    </blockquote>

                    <h2 className="text-2xl font-bold text-red-500 mb-3">Join Us</h2>
                    <p className="mb-3">Whether you're a first-time donor or a seasoned veteran, we welcome you to join our community. Your contribution is invaluable and can help save countless lives. Together, we can ensure that life flows continuously for those in need.</p>
                    <p><Link to="/donate" className="inline-block px-5 py-2 text-white bg-red-500 rounded font-bold">Become a Donor</Link></p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About
