import React from 'react';
import Hero from '../../component/hero/Hero';
import Categories from '../../component/categories/Categories';
import Featured from '../../component/featuredProduct/Featured';
import WhyChooseUs from '../../component/WhyChoose/WhyChooseUs';
import Testimonials from '../../component/testimonial/Testimonials';
import Sliders from '../../component/slider/Sliders';


const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Categories></Categories>
           <Featured></Featured>
            <Sliders></Sliders>
           <WhyChooseUs></WhyChooseUs>
           <Testimonials></Testimonials>
          
        </div>
    );
};

export default HomePage;