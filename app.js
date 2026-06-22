document.addEventListener('DOMContentLoaded', () => {
    
    
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch data.json");
            }
            return response.json();
        })
        .then(data => {
            
            
            if (document.getElementById('project-motivation-text')) {
                document.getElementById('project-motivation-text').textContent = 
                    "I built this website for my Computer Science Ecosystems course to demonstrate how to co-develop dynamic, secure web applications using modern AI coding assistants.";
            }
            
            
            if (document.getElementById('about-text')) {
                document.getElementById('about-text').textContent = data.about;
            }

            
            const educationContainer = document.getElementById('education-container');
            if (educationContainer && data.education) {
                data.education.forEach(edu => {
                    
                    const eduDiv = document.createElement('div');
                    eduDiv.className = 'edu-item';
                    
                    eduDiv.innerHTML = `
                        <h4><strong>${edu.institution}</strong></h4>
                        <p>${edu.degree}</p>
                        <p><em>${edu.years}</em></p>
                    `;
                    educationContainer.appendChild(eduDiv);
                });
            }

            
            const skillsContainer = document.getElementById('skills-container');
            if (skillsContainer && data.skills) {
                data.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsContainer.appendChild(li);
                });
            }
        })
        .catch(error => console.error("Error loading CV data:", error));

});