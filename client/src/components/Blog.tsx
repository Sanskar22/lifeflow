import Footer from "./Footer"
import { useState } from "react";

import Header_Terms_Donate from "./Header_Terms_Donate";

function Blog() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "donor-17.jpg",
        "donor-18.jpg",
        "donor-19.jpg",
        "donor-20.jpg",
        "donor-21.jpg",
        "donor-1.jpg",
        "donor-2.jpg",
        "donor-3.jpg",
        "donor-4.jpg",
        "donor-5.jpg",
        "donor-6.jpg",
        "donor-7.jpg",
        "donor-8.jpg",
        "donor-9.jpg",
        "donor-10.jpg",
        "donor-11.jpg",
        "donor-12.jpg",
        "donor-13.jpg",
        "donor-14.jpg",
        "donor-15.jpg",
        "donor-16.jpg",
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 3 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 3 ? 0 : prev + 1));
    };

    return (
        <div className="bg-gray-200">
            <Header_Terms_Donate />
            <div className='h-1 bg-red-500'></div>
            <div className="mt-12 mx-auto w-11/12 bg-white mb-12 p-10 shadow-lg">
                <header className=" py-4">
                    <h1 className="text-3xl font-semibold text-center text-secondary">
                        LifeFlow Blog
                    </h1>
                    <nav className="mt-6">
                        <ul className="flex flex-wrap justify-center gap-4 space-x-4">
                            <li><a href="#welcome" className="text-black text-base hover:text-indigo-600">Welcome</a></li>
                            <li><a href="#importance" className="text-black text-base hover:text-indigo-600">Importance</a></li>
                            <li><a href="#stories" className="text-base text-black hover:text-indigo-600">Stories</a></li>
                            <li><a href="#myths" className="text-black text-base hover:text-indigo-600">Myths</a></li>
                            <li><a href="#health-benefits" className="text-black text-base hover:text-indigo-600">Health Benefits</a></li>
                            <li><a href="#process" className="text-black text-base hover:text-indigo-600">Process</a></li>
                            <li><a href="#types" className="text-black text-base hover:text-indigo-600">Types</a></li>
                            <li><a href="#events" className="text-black text-base hover:text-indigo-600">Events</a></li>
                            <li><a href="#partners" className="text-black text-base hover:text-indigo-600">Partners</a></li>
                            <li><a href="#involvement" className="text-black text-base hover:text-indigo-600">Get Involved</a></li>
                            <li><a href="#covid" className="text-black text-base    hover:text-indigo-600">COVID-19</a></li>
                        </ul>
                    </nav>
                </header>
                <div className='h-1 bg-red-500'></div>
                <main className="p-6 mt-6 ">
                    <section id="welcome" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Welcome to LifeFlow Blog</h4>
                        <p className="text-black">Welcome to the LifeFlow Blog! At LifeFlow, we
                            believe in the transformative power of blood donation. Our mission is to
                            create a community dedicated to saving lives, one donation at a time. With a focus on fostering awareness,
                            providing education, and facilitating donations, we strive to make a tangible difference in the lives of those in need. Whether you're a first-time donor or a regular contributor, our blog aims to provide valuable insights and inspiration to keep you engaged and informed. Blood donation is a vital service that helps save countless lives every day, and through this blog, we hope to educate, motivate, and celebrate the heroes among us who make it possible. Join us on our journey to save lives, one donation at a time, and become part of the LifeFlow community
                            dedicated to making a tangible difference.
                        </p>
                    </section>

                    <section id="stories" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Stories from Our Heroes</h4>
                        <p className="text-black">Meet our heroes—donors and recipients who share their life-changing experiences with blood donation. These inspiring stories highlight the power of generosity and the incredible impact of giving blood. Donors share their motivations and the fulfillment they feel from knowing they've helped save lives. Recipients express their deep gratitude and how blood donations have given them a second chance. These personal accounts not only celebrate the heroes among us but also encourage others to join the cause. Discover how a small act of kindness can transform lives, provide hope, and create a ripple effect of positivity in the community.</p>
                        <div className="slider-container relative mt-4 overflow-hidden">
                            <div className="slider-container relative mt-4 overflow-hidden">
                                <div className="slides flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)`, width: `${(slides.length / 3) * 100}%` }}>
                                    {slides.map((slide, index) => (
                                        <div key={index} className="w-1/3 h-96 mx-2"> {/* Set fixed height */}
                                            <img
                                                className="object-cover w-full h-full "
                                                src={slide}
                                                alt={`Image ${index + 1}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1" onClick={prevSlide}>&#10094;</button>
                                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1" onClick={nextSlide}>&#10095;</button>
                            </div>
                            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1" onClick={prevSlide}>&#10094;</button>
                            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1" onClick={nextSlide}>&#10095;</button>
                        </div>
                    </section>

                    <section id="welcome" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2 text">What We Stand For</h4>
                        <p className="text-black mb-2">Accessibility: We aim to make blood donation accessible to all, regardless of geographic location, socioeconomic status, or cultural background. Through our online platform and community outreach initiatives, we strive to connect donors with blood banks and hospitals in need.</p>
                        <p className="text-black mb-2">Education: Knowledge is power, and we believe in empowering individuals with accurate information about blood donation. From debunking myths to explaining the donation process, our resources are designed to educate and inspire potential donors to take action.</p>
                        <p className="text-black">Impact: Every donation counts. By partnering with blood banks, healthcare organizations, and volunteers, we maximize the impact of each contribution. From organizing blood drives to supporting patients in critical need, we're dedicated to making a difference in the lives of others.</p>
                    </section>

                    <section id="importance" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">The Importance of Blood Donation</h4>
                        <p className="text-black">Blood donation is a simple act with a profound impact. Every two seconds, someone in the world needs blood, whether it's due to an accident, surgery, or chronic illness. By donating blood, you can save up to three lives with just one pint. The demand for blood is constant, and shortages can lead to dire consequences. Your contribution is crucial in ensuring that hospitals have a stable supply to treat patients in need. Blood is essential for treating cancer patients, trauma victims, and those undergoing major surgeries. Together, we can make a significant difference and ensure that no one is left without the blood they need.</p>
                    </section>

                    <section id="myths" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Dispelling Myths About Blood Donation</h4>
                        <p className="text-black">There are many myths surrounding blood donation, but we're here to set the record straight. Donating blood is safe, quick, and relatively painless. Some common myths include fears about the donation process causing weakness, misconceptions about eligibility criteria, and concerns about contracting diseases. The truth is, the process is highly regulated, and every step is taken to ensure donor safety. By providing factual information and addressing common fears, we hope to reassure potential donors and encourage more people to donate. Our goal is to ensure you feel confident and informed about the blood donation process.</p>
                    </section>

                    <section id="health-benefits" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">How Donating Blood Can Improve Your Health</h4>
                        <p className="text-black">Did you know that donating blood can have health benefits for the donor? Regular donations can improve cardiovascular health by reducing iron levels in the body, which can decrease the risk of heart disease. Additionally, blood donation has been linked to lower cancer risks and offers a mini health check-up, including blood pressure, hemoglobin levels, and cholesterol checks. These health screenings can help identify potential health issues early on. Find out more about how blood donation can positively affect your well-being while helping others. It's a win-win situation where you can improve your health and save lives simultaneously.</p>
                    </section>

                    <section id="process" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">What to Expect When Donating Blood</h4>
                        <p className="text-black">Curious about the donation process? We've got you covered. From registration and pre-donation screening to the actual donation and post-donation recovery, we'll walk you through each step so you know exactly what to expect. The entire process typically takes about an hour, with the actual blood draw lasting only 10-15 minutes. You'll start with a health screening, followed by the donation, and then a short recovery period with refreshments. Our goal is to make your donation experience as smooth and comfortable as possible. Understanding the process can ease any apprehensions and encourage more people to donate.</p>
                    </section>

                    <section id="types" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Different Ways to Donate Blood</h4>
                        <p className="text-black">There are several ways to donate blood: whole blood, platelet, plasma, and double red cell donations. Each type plays a vital role in patient care. Whole blood donations are the most common, while platelet and plasma donations are crucial for treating cancer patients and those with clotting disorders. Double red cell donations collect twice the amount of red cells, which are essential for trauma and surgery patients. Learn about the different donation methods, their specific benefits, and how you can contribute in various ways to meet the diverse needs of patients. By understanding the different types of donations, you can choose the one that's right for you and help in the most effective way possible.</p>
                    </section>

                    <section id="events" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Join Us at Our Next Blood Drive</h4>
                        <p className="text-black">Stay updated on our upcoming blood drives and events. Your participation is crucial in maintaining a stable blood supply. Check our calendar and find a blood drive near you. Whether it's your first time or you're a seasoned donor, your involvement can save lives. Each blood drive is an opportunity to contribute to the community and make a tangible impact. We provide all the details you need, from location and timings to registration information. Together, we can ensure that hospitals and patients have the blood they need when they need it most. Join us at our next blood drive and be a hero in someone's life.</p>
                    </section>

                    <section id="partners" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Thank You to Our Partners and Sponsors</h4>
                        <p className="text-black">We extend our heartfelt gratitude to our partners and sponsors who support LifeFlow. Their contributions are invaluable in helping us achieve our mission. Learn more about our collaborators and their role in promoting blood donation.</p>
                    </section>

                    <section id="involvement" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Ways You Can Help</h4>
                        <p className="text-black">Want to get involved beyond donating blood? There are many ways to support LifeFlow, from volunteering and hosting a blood drive to spreading awareness. Explore different ways you can contribute, such as becoming a blood donation advocate, participating in fundraising events, or simply sharing information about blood donation on social media. Every action, big or small, helps us reach more people and save more lives. By getting involved, you can help us build a stronger, more resilient blood donation network. Your efforts can inspire others to join the cause and make a lasting impact on the lives of those in need.</p>
                    </section>

                    <section id="covid" className="mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Blood Donation During the Pandemic</h4>
                        <p className="text-black">COVID-19 has changed many aspects of our lives, but the need for blood remains constant. We've implemented stringent safety measures to protect our donors and staff, ensuring a safe donation experience. These measures include enhanced sanitation, social distancing, and health screenings. Find out how you can safely donate blood during the pandemic, the precautions we're taking, and why your donation is more important than ever. Blood donation continues to be a critical need, and your contribution can make a difference during these challenging times. Your safety and health are our top priorities as we work together to meet the ongoing demand for blood.</p>
                    </section>

                    <section className="contact mb-8">
                        <h4 className="text-2xl text-secondary mb-2">Get in Touch with LifeFlow</h4>
                        <p className="text-black">Have questions or want to share your story? We'd love to hear from you! Contact us for more information, to learn about upcoming events, or to get involved with LifeFlow. Together, we can build a community of life-savers. Your feedback, stories, and support are invaluable in helping us continue our mission. Whether you're interested in donating, volunteering, or simply learning more, we're here to help. Reach out to us through our contact page, social media channels, or email. Let's work together to create a world where everyone has access to the blood they need</p>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Blog
