# 🏛️ Jaffna Family Explorer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.x-purple.svg)](https://getbootstrap.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📖 About

**Jaffna Family Explorer** is a comprehensive family tourism website dedicated to making Jaffna, Sri Lanka accessible and enjoyable for families with children of all ages. Built on the DirEngine Bootstrap template, this website provides a complete platform for families to discover, plan, and book their perfect Jaffna adventure.

## ✨ Features

### 🎯 Core Functionality
- **Family-Friendly Focus**: All content and recommendations tailored specifically for families
- **Interactive Hotel Finder**: Advanced search and filtering system for family accommodations
- **Comprehensive FAQ Section**: Detailed answers to common family travel questions
- **Responsive Design**: Mobile-optimized experience across all devices

### 🗺️ Advanced Interactive Features
- **Google Maps Integration**: Interactive maps showing hotel locations and nearby family attractions
- **Real-time Filtering**: Filter hotels by family amenities, age groups, and preferences
- **Photo Galleries**: High-quality image galleries with lightbox functionality
- **Virtual Tours**: 360° virtual hotel room tours with scene navigation
- **Family Reviews**: Authentic testimonials from families who have visited

### 📱 User Experience
- **Clean, Modern Design**: Professional layout optimized for family browsing
- **Fast Loading**: Optimized images and efficient code structure
- **Accessibility**: Family-friendly navigation and content organization
- **Cross-browser Compatibility**: Works seamlessly across all modern browsers

## 🏗️ Project Structure

```
Together in Jaffna/
├── 📄 index.html              # Homepage with family tour packages
├── 📄 about.html              # About page with mission and FAQ
├── 📄 hotel.html              # Interactive family hotels page
├── 📄 contact.html            # Contact form and trip planning
├── 📁 css/                    # Stylesheets
│   ├── style.css              # Main styles
│   ├── bootstrap.min.css      # Bootstrap framework
│   └── [other CSS files]
├── 📁 js/                     # JavaScript files
│   ├── main.js                # Main functionality
│   ├── jquery.min.js          # jQuery library
│   └── [other JS files]
├── 📁 images/                 # Image assets
├── 📁 fonts/                  # Font files
└── 📁 scss/                   # Sass source files
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)
- Google Maps API key (for map functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prabasajee/Together-in-Jaffna.git
   cd Together-in-Jaffna
   ```

2. **Set up Google Maps API**
   - Get a Google Maps JavaScript API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Replace `{{GOOGLE_MAPS_API_KEY}}` in the HTML files with your actual API key

3. **Launch the website**
   - **Option 1**: Open `index.html` directly in a web browser
   - **Option 2**: Use a local web server for better functionality
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the website**
   - Open `http://localhost:8000` in your browser

## 📚 Page Descriptions

### 🏠 **Homepage (index.html)**
- Welcome section with family-focused hero banner
- Featured family tour packages
- Popular attractions carousel
- Quick access to key services

### ℹ️ **About Page (about.html)**
- Mission statement and company values
- Tabbed content showing goals and services
- Comprehensive FAQ section with family travel questions
- Professional team information

### 🏨 **Hotels Page (hotel.html)**
The most feature-rich page with:
- **Interactive Map**: Google Maps showing hotel locations and family attractions
- **Advanced Filtering**: Filter by amenities, age groups, budget, and more
- **Photo Galleries**: Modal galleries with navigation controls
- **Virtual Tours**: 360° room tours with hotspot navigation
- **Family Reviews**: Authentic testimonials with ratings
- **Booking Integration**: Direct links to reservation systems

### 📞 **Contact Page (contact.html)**
- Multi-field family trip planning form
- Contact information and location details
- Service highlight cards
- Integration with email systems

## 🛠️ Technical Features

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid
- **Bootstrap 4**: Responsive framework for mobile-first design
- **JavaScript**: Interactive functionality and API integrations
- **jQuery**: DOM manipulation and AJAX requests

### APIs & Integrations
- **Google Maps JavaScript API**: Interactive maps and location services
- **Unsplash CDN**: High-quality placeholder images
- **Font APIs**: Custom typography from Google Fonts

### Performance Optimizations
- Compressed CSS and JavaScript files
- Optimized image loading with proper sizing
- Efficient DOM manipulation
- Progressive enhancement approach

## 🎨 Customization

### Branding
- Update the logo and brand colors in `css/style.css`
- Modify the site title and meta descriptions in each HTML file
- Replace placeholder images with your own branded content

### Content
- Edit the tour packages and hotel listings
- Update contact information and location details
- Customize the FAQ section with relevant questions
- Add your own family testimonials and reviews

### API Configuration
- Replace the Google Maps API key with your own
- Configure map markers and locations for your area
- Set up contact form backend integration

## 📱 Browser Support

- **Chrome** 70+
- **Firefox** 65+
- **Safari** 12+
- **Edge** 44+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions to improve the Jaffna Family Explorer website! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and structure
- Test across different browsers and devices
- Ensure accessibility standards are maintained
- Add comments for complex functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Template Attribution**: This website is built on the DirEngine template by [Colorlib](https://colorlib.com/), licensed under CC BY 3.0.

## 📞 Support

For support, feature requests, or bug reports:

- **Email**: hello@jaffnafamilyexplorer.com
- **GitHub Issues**: [Create an issue](https://github.com/prabasajee/Together-in-Jaffna/issues)
- **Website**: [Jaffna Family Explorer](https://jaffnafamilyexplorer.com)

## 🙏 Acknowledgments

- **Template**: [Colorlib](https://colorlib.com/) for the DirEngine Bootstrap template
- **Images**: [Unsplash](https://unsplash.com/) for high-quality placeholder images
- **Icons**: [Font Awesome](https://fontawesome.com/) and [Icomoon](https://icomoon.io/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) for typography
- **Framework**: [Bootstrap](https://getbootstrap.com/) for responsive design

---

<div align="center">
  <p><strong>Made with ❤️ for families exploring Jaffna, Sri Lanka</strong></p>
  <p>
    <a href="#-jaffna-family-explorer">Back to Top</a> •
    <a href="https://github.com/prabasajee/Together-in-Jaffna/issues">Report Bug</a> •
    <a href="https://github.com/prabasajee/Together-in-Jaffna/issues">Request Feature</a>
  </p>
</div>
