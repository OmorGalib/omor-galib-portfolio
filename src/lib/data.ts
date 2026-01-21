export const personalInfo = {
  name: "Omor Galib",
  location: "Dhaka, Bangladesh",
  email: "omorgalib007@gmail.com",
  github: "https://github.com/OmorGalib",
  linkedin: "https://www.linkedin.com/in/omor-galib-a6165b282/",
};

export const workExperience = [
  {
    company: "Bizreflex",
    location: "Onsite - Dhaka",
    position: "Jr. Software Engineer to Software Engineer",
    period: "Oct 2024 - Present",
    companyProfileLink: "https://www.linkedin.com/company/biz-reflex",
    achievements: [
      "Tekumo is a service platform for technicians in the USA that manages the end-to-end service process for customers.",
      "Working in an Agile environment to deliver higher-quality software far more rapidly, and use Azure to report the work updates.",
      "Involved in solving complex business logic using NodeJS and NestJS, SQL queries for CRUD operations using PostgreSQL. Also, write migration scripts using KnexJS.",
      "Use the Angular framework(TypeScript) for designing the Frontend and integrate REST APIs using proper Services. Use Material and RxJS.",
      "Work with third-party Webhook, Nats-Server, and RabbitMQ.",
      "Collaborate with other developers to update the website and create new features, also debugging and fixing the production phase issues."
    ],
  },
  {
    company: "Tekumo",
    location: "Remote",
    position: "Jr. Software Engineer to Software Engineer",
    period: "Oct 2024 - Present",
    companyProfileLink: "https://www.linkedin.com/company/tekumo/about/",
    achievements: [
      "Developed and maintained scalable web applications using Angular, Angular Material, SASS, TypeScript, JavaScript, Node.js, NestJS, Restify, PostgreSQL, Knex.js, and Swagger API",
      "Migrated legacy backend services from Restify to a modular NestJS architecture, reducing code complexity by 30%, lowering bug rate by 20%, and improving overall performance and maintainability.",
      "Optimized report generation by offloading it to background jobs with BullMQ and storing results in S3, reducing API response time by over 80% and improving scalability.",
      "Collaborated seamlessly with international stakeholders across multiple time zones to align on priorities, refine requirements, and ensure the successful and timely delivery of high-impact features.",
      "Collaborated closely with cross-functional teams to deliver high-quality features, proactively reviewing pull requests to maintain code quality, uphold standards, and ensure efficient implementation."
    ],
  },
  {
    company: "Softlab IT",
    location: "Onsite - Dhaka",
    position: "Trainee to Jr. Software Engineer",
    period: "Oct 2023 - Sep 2024",
    companyProfileLink: "https://www.linkedin.com/company/softlabit/",
    achievements: [
      "Built and maintained websites for clients through various frameworks(Angular, React, NextJS, NodeJS, ExpressJS and MongoDB)",
      "Create UI/UX design and implement responsive layouts for both Web and Mobile applications.",
      "Tested REST APIs using Postman and integrated them in the frontend.",
      "Mainly frontend-focused, but also worked in backend whenever needed.",
      "Lead a team and teach interns about HTML5,CSS3, and JavaScript"
    ],
  },
];

export const education = [
  {
    institution: "United International University",
    location: "Dhaka",
    degree: "B. Sc. in Computer Science and Engineering",
    period: "2018 - 2023"
  },
  {
    institution: "BAF Shaheen College Jessore",
    location: "Jessore",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2014 - 2016"
  },
  {
    institution: "Magura Govt. High School",
    location: "Magura",
    degree: "Secondary School Certificate (SSC)",
    period: "2008 - 2014"
  },
];

export const skills = {
  programmingLanguages: [
    { title: "TypeScript", iconPath: "/typescript.svg" },
    { title: "JavaScript", iconPath: "/javascript.svg" },
    { title: "Python", iconPath: "/python.svg" }
  ],
  frontendDevelopment: [
    { title: "HTML", iconPath: "/html.svg" },
    { title: "CSS", iconPath: "/css.svg" },
    { title: "Angular", iconPath: "/angular.svg" },
    { title: "React", iconPath: "/react.svg" },
    { title: "Next.js", iconPath: "/next-js.svg" },
    { title: "RxJS", iconPath: "/rxjs.svg" },
    // { title: "NgRx", iconPath: "/ngrx.svg" },
    { title: "Tailwind CSS", iconPath: "/tailwind.svg" },
    { title: "Angular Material", iconPath: "/angular.svg" },
    // { title: "SASS", iconPath: "/scss.svg" },

  ],
  backendDevelopment: [
    { title: "Nodejs", iconPath: "/nodejs.svg" },
    { title: "NestJs", iconPath: "/nestjs.svg" },
    { title: "Express.js", iconPath: "/express.svg" },
    { title: "Swagger", iconPath: "/swagger.svg" },
  ],
  databaseAndStorage: [
    { title: "PostgreSQL", iconPath: "/postgresql.svg" },
    { title: "Knex.js", iconPath: "/knex.svg" },
    { title: "TypeORM (ORM)" },
    { title: "Redis", iconPath: "/redis.svg" }

  ],
  cloudAndDevOps: [
    // { title: "AWS", iconPath: "/aws.svg" },
    // { title: "Docker", iconPath: "/docker.svg" },
    { title: "Vercel", iconPath: "/vercel.svg" },
    { title: "Netlify", iconPath: "/netlify.svg" }
  ],
  testingTools: [
    { title: "Jest", iconPath: "/jest.svg" }
  ],
  otherTools: [
    { title: "Git", iconPath: "/git.svg" },
    { title: "Postman", iconPath: "/postman.svg" },
    { title: "GitHub", iconPath: "/github.svg" }
  ],
};

export const projects = [
   {
    title: "TekumoPro",
    github: "",
    projectlink: "https://app.tekumopro.com/public/sign-in",
    description: [
      "Tekumo is a platform for intelligent service delivery that handles the \"last-mile\" of installing, and maintaining technology systems.",
      "Tekumo is a company that specializes in offering a service delivery platform that helps with maintaining and installing smart connected devices and technology systems",
      "It offers products such as TekumoPRO that connects enterprises, retailers, and original equipment manufacturer (OEMs) with local skilled resources to install and maintain technology systems.",
      "It delivers a dynamic workforce, automation, live visibility, and full integration into client service management systems.",
      "Developed and maintained scalable web applications using Angular, Angular Material, SASS, TypeScript, JavaScript, Node.js, NestJS, Restify, PostgreSQL, Knex.js, and Swagger API",
    ],
  },
  {
    title: "Academic Management System",
    github: "https://github.com/OmorGalib/academic-dashboard-gain",
    liveDemo: "https://academic-dashboard-gain.vercel.app/",
    description: [
      "Dashboard Features: View total students, courses, faculty, average GPA, Interactive leaderboard of highest GPA students, s: Courses sorted by enrollment with progress indicators, Track recent enrollments, grade updates, and student additions, Monitor server status and active users.",
      "Student Management Student Directory: Complete list of all students, Search by name, email, or student ID, Filter by year, major, and status",
      "Course Management Course Catalog: View all available courses, Monitor enrolled vs capacity, Faculty Information, Visual representation of course enrollment.",
      "Faculty Panel Faculty Directory: All faculty members with departments, Add or update student grades, Assign students to specific courses",
      "Reports & Analytics Interactive Charts: Course enrollments and student performance, Export students, courses, and grades as CSV, Track GPA trends and pass rates, Generate enrollment summaries and department performance, Identify top-performing students and popular courses.",
      "Responsive Design: Accessible on desktop and smartphones, User-friendly interface with intuitive navigation.",
    ],
  },

  // {
  //   title: "Langlytics",
  //   github: "github.com",
  //   description: [
  //     "Upload and analyze Excel/CSV files with ease",
  //     "Natural language queries converted to SQL via Google Gemini 2.0 Flash",
  //     "Interactive data visualization with Chart.js (bar, line, pie, etc.)",
  //     "Backend powered by NestJS, PostgreSQL, and TypeORM",
  //     "Frontend built with Angular and Angular Material",
  //     "Real-time SQL query preview and result charts",
  //     "Secure API integration using Google Cloud services",
  //     "Responsive and user-friendly interface",
  //     "Simple setup with Docker support for deployment",
  //     "Optimized for quick data insights without coding"
  //   ],
  // },
];

// export const awards = [
//   {
//     name: "IEEE YESIST12 Hackathon",
//     issuer: "IEEE",
//     date: "Sep 2022",
//     type: "International",
//     position: "Second Place",
//   },
// ];
