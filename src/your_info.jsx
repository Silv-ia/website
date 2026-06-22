//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

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
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/',
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
    name: 'programming languages',
    icon: 'lni lni-code',
    title: 'Photography',
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'Python',
      },
      {
        icon: 'lni lni-certificate',
        title: 'Java',
      },
      {
        icon: 'lni lni-instagram',
        title: 'bash',
      },
      {
        icon: 'lni lni-camera',
        title: 'assembly',
      },
      {
        icon: 'lni lni-certificate',
        title: 'prolog',
      },
      {
        icon: 'lni lni-instagram',
        title: 'SML',
      },
    ],
  },
  {
    name: 'tech',
    icon: 'lni lni-code',
    title: 'Software',
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'FTK',
      },
      {
        icon: 'lni lni-code',
        title: 'Wireshark',
      },
      {
        icon: 'lni lni-sketch',
        title: 'SIFT/Kali'
      },
      {
        icon: 'lni lni-sketch',
        title: 'Windows/Linux'
      },
      
    ],
  },
  {
    name: 'other',
    icon: 'lni lni-code',
    title: 'Software',
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },
     
      
    ],
  },
  {
    name: 'languages',
    icon: 'lni lni-code',
    title: 'Brands',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Swedish',
      },
      {
        icon: 'lni lni-crop',
        title: 'English',
      },
      {
        icon: 'lni lni-crop',
        title: 'Spanish',
      },
      {
        icon: 'lni lni-crop',
        title: 'Chinese',
      },
      {
        icon: 'lni lni-crop',
        title: 'German',
      },
      {
        icon: 'lni lni-crop',
        title: 'Italian',
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
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
