function navigate(page) {
    const main = document.getElementById('main-content');
    if (page === 'about') {
      main.innerHTML = `
        <section class="container">
          <h1>About BlissBuy</h1>
          
          <div>
            <h2>Our Story</h2>
            <p>Founded in 2020, BlissBuy was created with a simple mission: to provide high-quality products at affordable prices with exceptional customer service.</p>
          </div>
          
          <div>
            <h2>Our Values</h2>
            <ul>
              <li><strong>Quality:</strong> We carefully source and curate every product in our collection.</li>
              <li><strong>Affordability:</strong> Fair pricing is at the core of our business model.</li>
              <li><strong>Sustainability:</strong> We're committed to reducing our environmental impact.</li>
              <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority.</li>
            </ul>
          </div>
          
          <div class="bg-light">
            <h2>Our Guarantee</h2>
            <p>We stand behind every product we sell. If you're not completely satisfied with your purchase, we offer a 30-day money-back guarantee, no questions asked.</p>
          </div>
          
          <div>
            <h2>Meet Our Team</h2>
            <div>
              <h3>Sarah Johnson</h3>
              <p><em>Founder & CEO</em><br/>With over 15 years of retail experience, Sarah leads our company vision and growth strategy.</p>
            </div>
            <div>
              <h3>David Chen</h3>
              <p><em>Head of Product</em><br/>David oversees our product selection process, ensuring only the best items make it to our store.</p>
            </div>
          </div>
          
          <div>
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:support@blissbuy.com">support@blissbuy.com</a><br />
               Phone: (555) 123-4567<br />
               Hours: Monday-Friday, 9am-5pm EST
            </p>
          </div>
        </section>
      `;
    } else {
      main.innerHTML = `<section class="container"><h2>${page.charAt(0).toUpperCase() + page.slice(1)} Page Coming Soon</h2></section>`;
    }
  }
  
  // Load default page
  navigate('about');
  
