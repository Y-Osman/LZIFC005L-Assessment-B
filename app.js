document.addEventListener('DOMContentLoaded', () => {
    
    
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch data.json");
            }
            return response.json();
        })
        .then(data => {
            // new: dynamically selecting elements and updating DOM text content
            if (document.getElementById('hero-title') && data.title) {
                document.getElementById('hero-title').textContent = data.title;
            }
            
            if (document.getElementById('about-text') && data.about) {
                document.getElementById('about-text').textContent = data.about;
            }

            // new: utilizing dynamically created elements from arrays via forEach loops
            const skillsContainer = document.getElementById('skills-container');
            if (skillsContainer && data.skills) {
                skillsContainer.innerHTML = ''; 
                data.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsContainer.appendChild(li);
                });
            }

            const educationContainer = document.getElementById('education-container');
            if (educationContainer && data.education) {
                educationContainer.innerHTML = '';
                data.education.forEach(edu => {
                    const eduDiv = document.createElement('div');
                    eduDiv.className = 'edu-item';
                    eduDiv.style.marginBottom = '15px';
                    eduDiv.innerHTML = `
                        <h4><strong>${edu.institution}</strong></h4>
                        <p>${edu.degree}</p>
                        <p><em>${edu.years}</em></p>
                    `;
                    educationContainer.appendChild(eduDiv);
                });
            }

            const projectsContainer = document.getElementById('projects-container');
            if (projectsContainer && data.projects) {
                projectsContainer.innerHTML = '';
                data.projects.forEach(project => {
                    const projectDiv = document.createElement('div');
                    projectDiv.className = 'project-item';
                    projectDiv.style.marginBottom = '15px';
                    projectDiv.innerHTML = `
                        <h4><strong>${project.name}</strong></h4>
                        <p>${project.description}</p>
                    `;
                    projectsContainer.appendChild(projectDiv);
                });
            }

            
            triggerCyberBootSequence();
        })
        .catch(error => console.error("Error loading CV data:", error));


    // --- 2. ONE-TIME IMMERSIVE BOOT SEQUENCE ---
    function triggerCyberBootSequence() {
        // new: immersive interactive experience via automated layout opacity triggers on load
        const allSections = document.querySelectorAll('main section');
        allSections.forEach((section, index) => {
            section.style.opacity = "0";
            section.style.filter = "blur(20px) brightness(2)";
            section.style.transform = "translateX(-150px) rotate(-8deg) scale(0.6)";
            section.style.boxShadow = "0 0 50px #ff0055";

            section.offsetHeight; 

            section.style.transition = "all 0.6s cubic-bezier(0.25, 1.5, 0.5, 1)";

            setTimeout(() => {
                section.style.opacity = "1";
                section.style.filter = "blur(0px) brightness(1)";
                section.style.transform = "translateX(15px) rotate(2deg) scale(1.05)";
                section.style.boxShadow = "0 0 40px #00adb5";
                
                setTimeout(() => {
                    section.style.transform = "translateX(0) rotate(0deg) scale(1)";
                    section.style.boxShadow = "";
                }, 350);

            }, 200 * (index + 1));
        });
    }

    // --- 3. CLEAN DARK MODE INTERACTION ---
    // new: immersive interactive effect via user click-event listener toggle
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            // new: dynamically toggling global body class lists for immersive adjustments
            document.body.classList.toggle('dark-mode');
        });
    }
});