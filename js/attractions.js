// Attraction filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const attractionCards = document.querySelectorAll('.attraction-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter attractions
            attractionCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    if (card.hasAttribute('data-category') && 
                        card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

// Enhanced card interactions for attraction pages
document.addEventListener('DOMContentLoaded', function() {
    const attractionCards = document.querySelectorAll('.attraction-card.detailed');
    
    attractionCards.forEach(card => {
        // Expand/collapse functionality for detailed cards
        const content = card.querySelector('.card-content');
        const familyTips = card.querySelector('.family-tips');
        
        // Initially hide family tips on mobile
        if (window.innerWidth <= 768) {
            familyTips.style.display = 'none';
            
            // Add expand button
            const expandBtn = document.createElement('button');
            expandBtn.textContent = 'Show Family Tips';
            expandBtn.className = 'expand-btn';
            expandBtn.addEventListener('click', function() {
                if (familyTips.style.display === 'none') {
                    familyTips.style.display = 'block';
                    this.textContent = 'Hide Family Tips';
                } else {
                    familyTips.style.display = 'none';
                    this.textContent = 'Show Family Tips';
                }
            });
            
            content.insertBefore(expandBtn, familyTips);
        }
    });
});

// Star rating interaction
function handleRatingClick(rating, attractionId) {
    // This would typically send data to a backend
    console.log(`Rating ${rating} stars for attraction ${attractionId}`);
    
    // Visual feedback
    const ratingElement = document.querySelector(`[data-attraction="${attractionId}"] .rating`);
    if (ratingElement) {
        ratingElement.innerHTML = `<i class="fas fa-star"></i> ${rating} (Your rating)`;
        ratingElement.style.color = '#FFB347';
    }
}

// Add to favorites functionality
function toggleFavorite(attractionId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(attractionId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        console.log(`Removed ${attractionId} from favorites`);
    } else {
        favorites.push(attractionId);
        console.log(`Added ${attractionId} to favorites`);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const attractionId = btn.getAttribute('data-attraction');
        if (favorites.includes(attractionId)) {
            btn.innerHTML = '<i class="fas fa-heart"></i>';
            btn.classList.add('favorited');
        } else {
            btn.innerHTML = '<i class="far fa-heart"></i>';
            btn.classList.remove('favorited');
        }
    });
}

// Search functionality for attractions
function searchAttractions(query) {
    const cards = document.querySelectorAll('.attraction-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       tags.some(tag => tag.includes(searchTerm));
        
        if (matches) {
            card.style.display = 'block';
            // Highlight matching terms
            highlightSearchTerms(card, searchTerm);
        } else {
            card.style.display = 'none';
        }
    });
}

function highlightSearchTerms(card, searchTerm) {
    // Remove previous highlights
    card.querySelectorAll('.highlight').forEach(el => {
        el.outerHTML = el.innerHTML;
    });
    
    // Add new highlights
    const textElements = card.querySelectorAll('h3, p');
    textElements.forEach(element => {
        const text = element.innerHTML;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
    });
}

// Add search bar if it doesn't exist
document.addEventListener('DOMContentLoaded', function() {
    const filterSection = document.querySelector('.attractions-filter .container');
    
    if (filterSection && !document.querySelector('.search-bar')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" id="attraction-search" placeholder="Search attractions...">
                <button type="button" id="clear-search"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        filterSection.appendChild(searchContainer);
        
        const searchInput = document.getElementById('attraction-search');
        const clearButton = document.getElementById('clear-search');
        
        searchInput.addEventListener('input', function() {
            searchAttractions(this.value);
            clearButton.style.display = this.value ? 'block' : 'none';
        });
        
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            searchAttractions('');
            this.style.display = 'none';
            searchInput.focus();
        });
    }
});
