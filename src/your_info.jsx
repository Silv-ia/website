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
  'Forensics',
  'Information Security'
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
  {
    name: 'Email',
    icon: 'lni lni-github',
    url: 'https://laira.online/#ContactMe',
    label: '$ send email'
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
        
        title: 'Spanish - B2',
      },
      {
        
        title: 'Chinese - B2',
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
  {word: 'M.Sc. Cybersecurity', value: 'KTH Royal Institute of Technology', unit: '2027 • Stockholm, Sweden' },
  {word: 'B.Sc. Information Technology', value: 'KTH Royal Institute of Technology', unit: '2026 • Stockholm, Sweden' },
  {word: 'High School Diploma', value: 'ABB Industrigymnasium (Hitachigymnasiet)', unit: '2021 • Västerås, Sweden'},
  {word: 'Changemaker Camp', value: 'Raoul Wallenberg Academy, Chefakademin', unit: '2020 • Stockholm, Sweden'},
  //{ word: 'degree', value: uni name, unit: ' years and location' },
];

const cert = [
  {word: 'High School'},
]

const awardData = [
  {
    title: 'Cybersecurity Talent of the Year Finalist',
    description: 'Submitted a reflection of future cybersecurity risks across different sectors. Invited to live CTF.',
    date: '2024 • Omegapoint',
    link: '',
  },
  {
    title: 'Scholarship',
    description: 'For good techincal results and good opportunities to continued technical university studies',
    date: '2021 • Hitachigymnasiet',
    link: '',
  },
  {
    title: 'Scholarship',
    description: 'For a well done High School Degree Project',
    date: '2021 • Hitachigymnasiet',
    link: '',
  },
  {
    title: 'Scholarship',
    description: 'For linguistic knowledge',
    date: '2020 • Hitachigymnasiet',
    link: '',
  },
]

// Languages!!
const languages = [
  { word: 'English', value: 100, unit: '%' },
  { word: 'Swedish', value: 100, unit: '%' },
  {word: 'Chinese', value: 50, unit: '%' },
  { word: 'Spanish', value: 75, unit: '%' },
  {word: 'German', value: 10, unit: '%'}
];

const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    skills: ['Python', 'ML'],
    website: '',
    github: '',
  },
  {
    title: 'Occupant Window Behavior in Smart Buildings',
    description: 'Bachelor\'s Thesis Project. Sensor data processing from KTH Live-In Lab and multivariate logistic regression modeling.',
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression"
    ],
    website: 'https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-375960', 
    github: '',
  },
  {
    title: 'AES encryption',
    description: 'Fully implemented AES in ECB mode in Python.',
    skills: ['Python', 'AES'],
    website: '',
    github: 'https://github.com/Silv-ia/DD2520',
  },
  {
    title: 'Hardware Project: Handshake Game',
    description: 'II1305. ICT project practicing Scrum and team work. I 3D printed the microcontroller holder, and participated in the game logic development.',
    skills: ['Python', 'CAD', 'Soldering'],
    website: '',
    github: '',
  },
  {
    title: 'HS Degree Project: The Dancing Robotic Arm Lilith',
    description: 'We designed, built, and coded a robotic arm from scratch, using PVC pipes, servomotors, and 3D printed joints. I programmed the Arduinos to make the robotic arm dance to music. The purpose was to combine art and technology.',
    skills: ['Arduino', 'CAD', 'Soldering'],
    website: 'https://www.linkedin.com/in/silvialinlu/overlay/Project/1838174792/treasury/?profileId=ACoAADE56MIBp5YS7iKXCedMRufzyYaV6a1tcK8',
    github: '',
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
  serviceID: 'service_4xjrs73',
  templateID: 'template_wghy3je',
  userID: 'Ix5qqRfIMCgAsTbRs',
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
  awardData,
  aboutMeText,
  emailConfig,
  cert,
};
