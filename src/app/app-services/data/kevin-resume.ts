import { Resume } from '../../custom-classes/resume';
import { ProfessionalExperience } from '../../custom-classes/professional-experience';
import { Education } from '../../custom-classes/education';

export const PROFESSIONAL: ProfessionalExperience[] = [
    {
        workTitle: "Software Engineer",
        dateStarted: "Oct 2014",
        dateEnded: "Sep 2016",
        company: "Distractive Media",
        location: "Remote",
        responsibilities: ["Successfully served on the Advisory Committee to the Board of Directors and helped shape the way Distractive Media built its mobile web applications",
            "Streamlined deployment process by developing Bootstrap 3 template for mobile web applications",
            "Integrated live streaming from UniFi® Video Camera to mobile web application for bike race",
            "Managed creation of a dynamic web app to demonstrate web technologies and features to investors during super bowl",
            "Built out feature set to help engage users on mobile app via chat, photo stream, user location on map, and custom event image overlay"]
    }, {
        workTitle: "Technology Analyst",
        dateStarted: "Jun 2014",
        dateEnded: "Aug 2015",
        company: "Citigroup",
        location: "New York, New York",
        responsibilities: ["Implemented innovative system for allowing bankers to calculate fees for mergers and acquisition deals which helped increase revenue for Citi",
            "Designed and developed a new iOS app for Citi employees which allowed them to unlock their accounts which helped increase productivity since they no longer had to call the hotline",
            "Built out Who Knows Whom iPad application which allowed Citi bankers to see who had the greatest rapport with other company employees",
            "Worked with designers and stakeholders to build out the entire front end for Citi Briefcase which which enabled users to send very large files as well as recall files for security"]
    }, {
        workTitle: "Webmaster",
        dateStarted: "Sep 2013",
        dateEnded: "March 2014",
        company: "Cental Pacific Ski Club",
        location: "San Luis Obispo, CA",
        responsibilities: ["Maintained the website and databases as well as run the day to day operations for the club which has around 1000 students",
            "Developed and designed an iOS app to keep in contact with the 1000 members, send out push notifications and keep users updated on club activities and events, https://itunes.apple.com/us/app/central-pacific-ski-club-app/id912590132?mt=8",
            "Planned and ran collegiate ski trips for anywhere up to 500 members at a single time",
            "Developed and designed iOS app for big ski trip to Jackson Hole to keep in contact with 500 college kids via push notifications as well as store key locations, itinerary and trail map"]
    }]

export const SCHOOLS: Education[] = [
    {
        degree: "Certificate: iOS Fundamentals",
        dateCompleted: "2016",
        schoolName: "Bloc Inc",
        location: "Online Coding Bootcamp"
    },
    {
        degree: "Bachelor of Science: Computer Science",
        dateCompleted: "2014",
        schoolName: "California Polytechnic State University",
        location: "San Luis Obispo, CA"
    }]

export const SKILLS: string[] = [
    "iOS Development - Web Development",
    "Software Engineering - Project Management",
    "Photoshop - InDesign - Illustrator",
    "Objective-C - Swift",
    "HTML - CSS - Javascript - jQuery",
    "Xcode - Eclipse - IntelliJ",
    "Angular - Bootstrap",
    "Java - C# - Typescript - MySQL"
]

export const RESUME: Resume = {
    firstName: "Kevin",
    lastName: "Thrailkill",
    cellphone: "925-922-4965",
    email: "kevinjt92@gmail.com",
    github: "https://github.com/kevinthrailkill",
    linkedIn: "https://www.linkedin.com/in/kevin-thrailkill-33b6934b",
    summary: "Highly-skilled software development professional bringing more than 2 years in software design, development and integration. Advanced knowledge of iOS development and web development. Self-directed and motivated who works effectively in a dynamic environment. Analytical, detail- oriented, and a quick learner of new languages and concepts.",
    skills: SKILLS,
    jobs: PROFESSIONAL,
    schools: SCHOOLS,
    downloadPath: "/assets/Kevin-Thrailkill-Resume.pdf"
}


