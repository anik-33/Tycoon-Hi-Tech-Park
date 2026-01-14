import React from 'react';
// import heroimg from '../../assets/Product/6.jpeg'; // Keeping your import if needed for background or icon

const ContactHero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT: Message */}
        <div className="order-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Want to <span className="text-[#dd2400]">Contact Us?</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
            Have a question about our products or need technical support? 
            Feel free to ask your queries—our team at <strong>Tycoon Hi-Tech Park</strong> is here to help you.
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-700">
              <span className="bg-[#dd2400]/10 p-2 rounded-full text-[#dd2400]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>info@tycoonbd.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: Contact Form */}
        <div className="order-2">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#dd2400] focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#dd2400] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#dd2400] focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#dd2400] hover:bg-[#b81d00] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;