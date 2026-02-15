// Mods storage (in real project this will be a database)
let mods = [
    {
        id: 1,
        name: "PlayRay Menu v1.4.2",
        game: "YAPYAP",
        description: "Advanced mod menu with ESP, God Mode, spawning, and value modifications. Crash fix update with improved stability.",
        image: "Mods/YAPYAP/icon.jpg",
        file: "Mods/YAPYAP/PlayRayYAPYAP.dll",
        readme: "Mods/YAPYAP/README.md"
    }
];

// Load mods to page
function loadMods() {
    const modsGrid = document.getElementById('modsGrid');
    modsGrid.innerHTML = '';
    
    mods.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.className = 'mod-card';
        modCard.innerHTML = `
            <div class="mod-image">
                ${mod.image ? `<img src="${mod.image}" alt="${mod.name}">` : '<span>📦</span>'}
            </div>
            <h3>${mod.name}</h3>
            <div class="game-name">${mod.game}</div>
            <p>${mod.description}</p>
            <button class="download-mod-btn" onclick="showModDetails(${mod.id})">View Details</button>
        `;
        modsGrid.appendChild(modCard);
    });
}

// Show mod details modal
async function showModDetails(modId) {
    const mod = mods.find(m => m.id === modId);
    if (!mod) return;
    
    const modal = document.getElementById('detailsModal');
    const modImage = document.getElementById('modDetailImage');
    const modTitle = document.getElementById('modDetailTitle');
    const modGame = document.getElementById('modDetailGame');
    const detailsContent = document.getElementById('detailsContent');
    
    // Set mod info
    modImage.src = mod.image || '';
    modTitle.textContent = mod.name;
    modGame.textContent = mod.game;
    
    // Load README content
    try {
        const response = await fetch(mod.readme);
        const readmeText = await response.text();
        
        // Convert markdown to HTML (basic conversion)
        let htmlContent = readmeText
            .replace(/### (.*)/g, '<h3>$1</h3>')
            .replace(/## (.*)/g, '<h2>$1</h2>')
            .replace(/# (.*)/g, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
        
        htmlContent = '<p>' + htmlContent + '</p>';
        
        detailsContent.innerHTML = htmlContent;
    } catch (error) {
        detailsContent.innerHTML = '<p>Error loading mod details.</p>';
    }
    
    // Set download button - direct download without ad
    const downloadBtn = document.getElementById('detailsDownloadBtn');
    downloadBtn.onclick = () => downloadMod(modId);
    
    modal.style.display = 'block';
}

// Close details modal
function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

// Download mod
function downloadMod(modId) {
    const mod = mods.find(m => m.id === modId);
    if (mod) {
        // Create download link
        const link = document.createElement('a');
        link.href = mod.file;
        link.download = mod.file.split('/').pop(); // Get filename from path
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const detailsModal = document.getElementById('detailsModal');
    
    if (event.target === detailsModal) {
        closeDetailsModal();
    }
}



// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load mods on page load
loadMods();

// Hide loading screen after page loads
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 1500);
});
