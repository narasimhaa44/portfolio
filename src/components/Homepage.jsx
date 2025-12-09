"use client"

import styles from "./Homepage.module.css"
import { useState } from "react"
import {
    FaLinkedin,
    FaGithub,
    FaArrowRight,
    FaStar,
    FaLeaf,
    FaDiscord,
    FaInstagram,
    FaYoutube,
    FaTrophy
} from "react-icons/fa"
import { SiMongodb, SiDocker } from "react-icons/si"
import { GiFlowerPot } from "react-icons/gi"

const Homepage = () => {
    const projects = [
        {
            title: "VitalSync",
            description: "AI-driven healthcare platform",
            tech: "Node.js, Express, MongoDB, React",
            duration: "Full Stack",
            icon: FaStar,
            image: "/healthcare-app-dashboard.jpg",
            link: "https://github.com/narasimhaa44/VitalSync"
        },
        {
            title: "GreenWay",
            description: "Smart carpooling platform",
            tech: "MERN Stack, OAuth 2.0, Socket.IO",
            duration: "Backend Focus",
            icon: FaGithub,
            image: "/carpooling-platform-map.jpg",
            link: "https://github.com/narasimhaa44/Green-Way"
        },
        {
            title: "Blogging Website",
            description: "Full-stack blog platform",
            tech: "Node.js, Express, MongoDB, JWT",
            duration: "Full Stack",
            icon: FaLinkedin,
            image: "/blog-website-interface.jpg",
            link: "https://github.com/narasimhaa44/Blogging"
        },
        {
            title: "DSA & Problem Solving",
            description: "230+ problems solved",
            tech: "Data Structures, Algorithms",
            duration: "Competitive Programming",
            icon: FaLeaf,
            image: "/coding-algorithm-visualization.jpg",
            link: "https://leetcode.com/u/Lakshminarasimha_44/"
        },
    ]

    const skills = [
        {
            category: "Programming",
            items: "Java, Python, C",
            icon: FaLeaf,
        },
        {
            category: "Web Tech",
            items: "MERN Stack, Docker",
            icon: SiDocker,
        },
        {
            category: "Databases",
            items: "MongoDB, MySQL",
            icon: SiMongodb,
        },
        {
            category: "Expertise",
            items: "DSA, Backend Development",
            icon: FaStar,
        },
    ]



    return (
        <div className={styles.container}>
            {/* Left Profile Section */}
            <section className={styles.profileSection}>
                <div className={styles.profileContent}>
                    <div className={styles.profileImage}>
                        {/* New Profile Image */}
                        <img src="/images/profile.jpg" alt="Lakshmi Narasimha Reddy" className={styles.profileImg} />
                    </div>

                    <h1 className={styles.profileName}>Lakshmi Narasimha Reddy</h1>

                    <p className={styles.profileTitle}>Backend Developer | Full Stack Engineer | DSA Expert</p>

                    <p className={styles.profileDescription} style={{ color: '#4a4a4a', marginBottom: '2rem' }}>
                        Passionate about creating clean, scalable architectures and solving real-world problems with elegant code.
                    </p>



                    {/* Resume Button linked to the image file */}
                    <a href="/resume.pdf" target="_blank" className={styles.ctaButton} style={{ textAlign: 'center', textDecoration: 'none' }}>View Full Resume</a>
                </div>
            </section>

            {/* Right Content Section */}
            <section className={styles.contentSection}>

                {/* Projects Cards */}
                <div className={styles.cardsGrid}>
                    {projects.map((project, index) => {
                        const IconComponent = project.icon
                        return (
                            <div key={index} className={styles.projectCard}>
                                <div>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.cardBadge}>{project.duration}</span>
                                    </div>

                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardDescription}>{project.description}</p>
                                    <p className={styles.cardTech} style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>{project.tech}</p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <span className={styles.cardPrice}>View Project</span>
                                    <a href={project.link} target="_blank" className={styles.cardButton}>
                                        <FaArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Skills Section */}
                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitle}>Skills & Competencies</h2>
                    <div className={styles.skillsGrid}>
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon
                            return (
                                <div key={index} className={styles.skillItem}>
                                    <div className={styles.skillIconWrapper}>
                                        <IconComponent size={24} />
                                    </div>
                                    <div>
                                        <h4 className={styles.skillCategory}>{skill.category}</h4>
                                        <p className={styles.skillItems}>{skill.items}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Achievements Section */}
                <div className={styles.achievementsSection}>
                    <h2 className={styles.sectionTitle}>Achievements</h2>
                    <div className={styles.achievementsGrid}>
                        {/* LeetCode Achievement */}
                        <div className={styles.achievementCard}>
                            <div className={styles.achievementHeader}>
                                <div className={styles.achievementIcon} style={{ color: '#E67E50' }}><FaTrophy /></div>
                                <span>LeetCode Achievements</span>
                            </div>
                            <p className={styles.achievementDescription}>
                                Solved <strong>170 problems</strong> on LeetCode and <strong>50+ on GeeksforGeeks</strong> across all difficulty levels. Achieved a <strong>contest rating of 1401</strong> and earned the <strong>50 Days Badge and 100 Days Badge 2025</strong> for consistent problem-solving.
                            </p>
                        </div>

                        {/* ICPC Achievement */}
                        <div className={styles.achievementCard}>
                            <div className={styles.achievementHeader}>
                                <div className={styles.achievementIcon} style={{ color: '#ffca3a' }}><FaStar /></div>
                                <span>ICPC Regionalist 2025</span>
                            </div>
                            <p className={styles.achievementDescription}>
                                Competed at the <strong>ICPC Regional Contest 2025</strong>, achieving recognition as a <strong>Regionalist</strong> among top programming teams, showcasing strong analytical and teamwork abilities under time constraints.
                            </p>
                        </div>
                    </div>
                </div>

                {/* About Me Section - Socials Moved Here */}
                <div className={styles.aboutSection}>

                    <h2 className={styles.sectionTitle}>About me</h2>
                    <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'flex-start', marginTop: '1rem' }}>
                        <a href="https://www.linkedin.com/in/lakshmi-narasimha-532910287/" target="_blank" className={styles.socialSquareBtn} style={{ color: '#0e76a8' }}>
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/narasimhaa44" target="_blank" className={styles.socialSquareBtn} style={{ color: '#333' }}>
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <br></br>
                    <p className={styles.testimonialText}>
                        Hi, I'm a Backend Developer with expertise in Data Structures & Algorithms. I have built scalable
                        applications using the MERN stack and am passionate about writing clean, maintainable code.
                        Let me know how I can help you! :)
                    </p>

                    <div className={styles.aboutDetails} style={{ marginBottom: '1.5rem' }}>

                        <div className={styles.aboutItem}>
                            <span className={styles.aboutLabel}>Education:</span>
                            <span className={styles.aboutValue}>BIT Bangalore (2023-2027)</span>
                        </div>
                        <div className={styles.aboutItem}>
                            <span className={styles.aboutLabel}>CGPA:</span>
                            <span className={styles.aboutValue}>9.05/10</span>
                        </div>
                        <div className={styles.aboutItem}>
                            <span className={styles.aboutLabel}>Status:</span>
                            <span className={styles.aboutValue}>ICPC Regionalist 2025</span>
                        </div>
                    </div>

                    {/* Social Buttons - LinkedIn & GitHub moved here */}

                </div>

            </section>
        </div>
    )
}

export default Homepage
