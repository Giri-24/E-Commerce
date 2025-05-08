
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8 text-center">About BlissBuy</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-shop-blue">Our Story</h2>
                <p className="text-gray-700">
                  Founded in 2020, BlissBuy was created with a simple mission: to provide high-quality products at affordable prices with exceptional customer service. What started as a small online store has grown into a trusted marketplace serving thousands of satisfied customers worldwide.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-shop-blue">Our Values</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Quality:</span> We carefully source and curate every product in our collection.</li>
                  <li><span className="font-semibold">Affordability:</span> Fair pricing is at the core of our business model.</li>
                  <li><span className="font-semibold">Sustainability:</span> We're committed to reducing our environmental impact.</li>
                  <li><span className="font-semibold">Customer Satisfaction:</span> Your happiness is our top priority.</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-shop-blue">Our Guarantee</h2>
                <p className="text-gray-700">
                  We stand behind every product we sell. If you're not completely satisfied with your purchase, we offer a 30-day money-back guarantee, no questions asked.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-shop-blue">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                    <p className="text-shop-blue mb-2">Founder & CEO</p>
                    <p className="text-gray-600 text-sm">With over 15 years of retail experience, Sarah leads our company vision and growth strategy.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg">David Chen</h3>
                    <p className="text-shop-blue mb-2">Head of Product</p>
                    <p className="text-gray-600 text-sm">David oversees our product selection process, ensuring only the best items make it to our store.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-shop-blue">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  Have questions or feedback? We'd love to hear from you! Reach out to our customer support team:
                </p>
                <p className="text-gray-700">
                  Email: <a href="mailto:support@blissbuy.com" className="text-shop-blue hover:underline">support@blissbuy.com</a><br />
                  Phone: (555) 123-4567<br />
                  Hours: Monday-Friday, 9am-5pm EST
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
