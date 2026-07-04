//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx
import profileImage from './assets/images/profile.jpg';

const backgroundImageUrl = '';


// Enter here your first and last name
const name = {
  firstname: 'laira',
  // lastname: 'Dominion',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  // url: 'https://www.google.com',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Cybersecurity',
  'Information Technology',
  'Forensics'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/',
    label: '$ linkedin',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/',
    label: '$ git clone repos'
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////

// categories = skills
const categories = [
  {
    name: 'Prog',
    
    title: 'Programming Languages',
    skills: [
      {
        
        title: 'Python',
      },
      {
        
        title: 'Java',
      },
      {
        
        title: 'Bash',
      },
      {
        
        title: 'Assembly',
      },
      {
        
        title: 'Prolog',
      },
      {
        
        title: 'ProVerif',
      },
      {
        
        title: 'C',
      },
      {
        
        title: 'Arduino',
      },
      {
        
        title: 'HTML5',
      },
      {
        
        title: 'JavaScript',
      },
      {
        
        title: 'SQL',
      },
    ],
  },
  {
    name: 'Tech',
    
    title: 'Tech',
    skills: [
      {
        
        title: 'FTK',
      },
      {
        
        title: 'Wireshark',
      },
      {
        
        title: 'SIFT/Kali'
      },
      {
        
        title: 'Windows'
      },
      {
        
        title: 'Linux'
      },
      {
        
        title: 'Volatility',
      },
      {
        
        title: 'Burp'
      },
      {
        
        title: 'React'
      },
    ],
  },
  {
    name: 'Other',
    
    title: 'Other',
    skills: [
      {
        
        title: 'Lean',
      },
      {
        
        title: 'GDPR',
      },
      {
        
        title: 'NIS 2'
      },
      {
        
        title: 'CRA',
      },
      {
        
        title: 'ISO 27001'
      },
    ],
  },
  {
    name: 'Languages',
    
    title: 'Languages',
    skills: [
      {
        
        title: 'Swedish - C2',
      },
      {
        
        title: 'English - C1',
      },
      {
        
        title: 'Spanish - B1',
      },
      {
        
        title: 'Chinese - C1',
      },
      {
        
        title: 'German - A1',
      },
      {
        
        title: 'Italian - A1',
      },
      
    ],
  },
  
];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'Bachelor\'s degree', value: 100, unit: '%' },
  { word: 'Master\'s degree', value: 50, unit: '%' },
  //{ word: 'experience', value: 20, unit: ' years' },
];

// Languages!!
const languages = [
  { word: 'English', value: 100, unit: '%' },
  { word: 'Swedish', value: 100, unit: '%' },
  {word: 'Chinese', value: 50, unit: '%' },
  { word: 'Spanish', value: 75, unit: '%' },
  {word: 'German', value: 10, unit: '%'}
];


// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    demoUrl: 'https://wallpaperaccess.com/full/530366.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'https://wallpapercave.com/wp/wp1933134.jpg' 
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'src/assets/images/Jonathan Dominion Template.gif' 
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi, I'm laira. 
    `,
  power_slogan: ``,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImageUrl,
  name,
  profileImage,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
