import React from 'react';
import Hero from '../../component/hero/Hero';
import Categories from '../../component/categories/Categories';
import Featured from '../../component/featuredProduct/Featured';
import WhyChooseUs from '../../component/WhyChoose/WhyChooseUs';
import Testimonials from '../../component/testimonial/Testimonials';
import Sliders from '../../component/slider/Sliders';
import ContactUs from '../../component/contactUs/ContactUs';
import { ToastContainer } from 'react-toastify';


const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <Featured></Featured>
            <Sliders></Sliders>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
               
            />

        </div>
    );
};

export default HomePage;