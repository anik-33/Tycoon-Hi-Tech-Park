import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Farhan Ahmed",
    role: "Home Appliance User",
    review:
      "Tycoon products are top quality and reliable. The AC I bought works perfectly and energy-efficient!",
    avatar: "https://i.pinimg.com/736x/46/88/12/468812df30ab33d9c66397e40be563af.jpg",
    rating: 5,
  },
  {
    name: "Rafiq Hossain",
    role: "Electronics Enthusiast",
    review:
      "The refrigerator is amazing! Spacious, durable, and great design. Highly recommended.",
    avatar: "https://i.pinimg.com/736x/27/90/03/27900371354079f41e16751f2a320fdb.jpg",
    rating: 5,
  },
  {
    name: "Mahadi Islam",
    role: "Kitchen Appliance User",
    review:
      "Love the mixer grinder and rice cooker. They make cooking much easier and efficient.",
    avatar: "https://i.pinimg.com/736x/6e/7d/9d/6e7d9d8a15b47ace4a5e0abc7a10434c.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.name}
              className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {testi.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{testi.role}</p>
              <p className="text-gray-700 text-sm mb-3">{testi.review}</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testi.rating ? "text-[#dd2400]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
