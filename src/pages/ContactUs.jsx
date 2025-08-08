import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactUs() {
    const socialLinks = [
        {
            icon: <GitHubIcon />,
            link: 'https://github.com/umayanga1104'
        },
        {
            icon: <LinkedInIcon />,
            link: 'https://www.linkedin.com/in/nisal-umayanga-1b2173374/'
        }
    ];

    return (<>
        <div className="contact-container w-screen h-screen bg-black/92 text-white">
            <div className="ml-10 text-white p-10">
                <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                <p>If you are looking for someone to collaborate with, feel free to reach me out,</p>
                <a href="mailto:nisalumayanga1104@gmail.com" className="text-purple-400 underline">
                    nisalumayanga1104@gmail.com
                </a>

                <div className="animate-pulse m-auto mt-50 mb-2 w-1/2 bg-white/20 p-10 rounded-lg text-center">
                    <ul className="flex flex-row space-x-4 justify-center">
                        {socialLinks.map((socialLink, index) => (
                            <li key={index}>
                                <a 
                                    href={socialLink.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center"
                                >
                                    {React.cloneElement(socialLink.icon, { className: "w-8 h-8" })}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>);
}