// Glossary search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('glossarySearch');
    const glossaryTerms = document.getElementById('glossaryTerms');
    
    if (searchInput && glossaryTerms) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = glossaryTerms.querySelectorAll('.card');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
