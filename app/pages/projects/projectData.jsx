// Pizzapalo images
import pizzalandingpage from '../../assets/images/pizzacarousel/pizzalandingpage.jpg';
import pizzamenu1 from '../../assets/images/pizzacarousel/pizzamenu1.jpg';
import pizzamenu2 from '../../assets/images/pizzacarousel/pizzamenu2.jpg';
import pizzacontact from '../../assets/images/pizzacarousel/pizzacontact.jpg';
import pizzaordering from '../../assets/images/pizzacarousel/pizzaordering.jpg';

// Coffee Distro images
import coffeelanding1 from '../../assets/images/coffeecarousel/coffeelanding1.jpg';
import coffeelanding2 from '../../assets/images/coffeecarousel/coffeelanding2.jpg';
import coffeeabout from '../../assets/images/coffeecarousel/coffeeabout.jpg';
import coffeecontact from '../../assets/images/coffeecarousel/coffeecontact.jpg';
import coffeelogin from '../../assets/images/coffeecarousel/coffeelogin.jpg';

// Brainey Tutoring image
// import brainytutoringmockup from './assets/images/mockup.jpg';

// CheckVibe image
// import checkvibemockup from './assets/images/mockup.jpg';

const projectsData = [
  {
    title: 'CheckVibe',
    description: 'CheckVibe is a platform that allows users to add tasks, set deadlines, and track their progress. Built with JavaScript, Tailwind CSS, it offers a clean and intuitive interface for users to manage their daily tasks and stay organized.',
    images: [
      // { src: checkvibemockup, alt: 'CheckVibe Mockup' }
    ],
    codeLink: 'https://github.com/RemyXVX/ToDoV2',
    liveLink: 'https://checkvibe.link'
  },
  {
    title: 'Brainey Tutoring',
    description: 'Brainey Tutoring is an online platform designed to provide personalized tutoring services. Built with React and Node.js, it allows users to book sessions, manage schedules, and offers an intuitive interface for students and tutors alike.',
    images: [
      // { src: brainytutoringmockup, alt: 'Brainey Tutoring Mockup' }
    ],
    codeLink: 'https://github.com/RemyXVX/brainey-tutoring',
    liveLink: 'https://www.braineytutoring.com/'
  },
  {
    title: 'Pizzapalo',
    description: 'Pizzapalo is a responsive web application designed for pizza shops, offering users a seamless pizza customization experience. Built with Vite, React, and Tailwind CSS, it showcases dynamic and user-friendly interfaces for an enhanced pizza ordering process.',
    images: [
      { src: pizzalandingpage, alt: 'Pizzapalo Landing Page' },
      { src: pizzamenu1, alt: 'Pizzapalo Menu 1' },
      { src: pizzamenu2, alt: 'Pizzapalo Menu 2' },
      { src: pizzacontact, alt: 'Pizzapalo Contact Page' },
      { src: pizzaordering, alt: 'Pizzapalo Ordering Page' }
    ],
    codeLink: 'https://github.com/RemyXVX/pizzashop',
    liveLink: ''
  },
  {
    title: 'Coffee Distro',
    description: 'A full e-commerce web app for the Doomed Coffee Shop, enabling users to order coffee and treats online. Built with JavaScript, React, Chakra UI, and Node, it features automatic inventory management and an intuitive user interface.',
    images: [
      { src: coffeelanding1, alt: 'Coffee Distro Landing Page 1' },
      { src: coffeelanding2, alt: 'Coffee Distro Landing Page 2' },
      { src: coffeeabout, alt: 'Coffee Distro About Page' },
      { src: coffeecontact, alt: 'Coffee Distro Contact Page' },
      { src: coffeelogin, alt: 'Coffee Distro Login Page' }
    ],
    codeLink: 'https://github.com/RemyXVX/Doomed-Coffe-Shop',
    liveLink: 'https://doomed-coffe-shop-gzhiv7zfe-remyxvxs-projects.vercel.app/'
  },
];

export default projectsData;
