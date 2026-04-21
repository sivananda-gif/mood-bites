const foodDatabase = [
    {
        id: "f1",
        name: "Classic Margherita Pizza",
        moods: ["happy", "energetic"],
        meals: ["afternoon", "evening", "late"],
        isVeg: true,
        healthGoal: "balanced",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Prepare or buy pizza dough.",
            "Spread fresh tomato sauce evenly.",
            "Add slices of fresh mozzarella cheese.",
            "Bake at 450°F (230°C) for 10-12 minutes.",
            "Garnish with fresh basil before serving."
        ],
        tags: ["Comfort", "Italian"]
    },
    {
        id: "f2",
        name: "Hearty Tomato Basil Soup",
        moods: ["sad", "tired", "stressed"],
        meals: ["afternoon", "evening"],
        isVeg: true,
        healthGoal: "weight_loss",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Roast 6 tomatoes, 1 onion, and 3 garlic cloves with olive oil.",
            "Blend the roasted vegetables until smooth.",
            "Simmer in a pot with 1/2 cup vegetable broth.",
            "Stir in fresh basil and a splash of cream.",
            "Serve hot with a side of crusty bread."
        ],
        tags: ["Warm", "Comforting"]
    },
    {
        id: "f3",
        name: "Vibrant Quinoa Salad Bowl",
        moods: ["energetic", "happy"],
        meals: ["morning", "afternoon"],
        isVeg: true,
        healthGoal: "weight_loss",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Cook 1 cup of quinoa in boiling water until tender.",
            "Chop cucumber, cherry tomatoes, and red onions.",
            "Mix quinoa with the vegetables and some kalamata olives.",
            "Dress with olive oil, lemon juice, salt, and pepper.",
            "Top with feta cheese (optional)."
        ],
        tags: ["Healthy", "Fresh"]
    },
    {
        id: "f4",
        name: "Juicy Beef Burger",
        moods: ["happy", "stressed"],
        meals: ["afternoon", "evening"],
        isVeg: false,
        healthGoal: "muscle",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Form ground beef into patties, season with salt and pepper.",
            "Grill or pan-fry patties for 3-4 minutes per side.",
            "Toast burger buns lightly.",
            "Assemble with lettuce, tomato, cheese, and your favorite sauce.",
            "Serve immediately with fries."
        ],
        tags: ["Indulgent", "Protein"]
    },
    {
        id: "f5",
        name: "Creamy Chicken Alfredo Pasta",
        moods: ["sad", "tired"],
        meals: ["evening"],
        isVeg: false,
        healthGoal: "balanced",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Boil fettuccine pasta in salted water until al dente.",
            "Pan-sear seasoned chicken breast until cooked, then slice.",
            "In a pan, melt butter, add heavy cream and minced garlic.",
            "Stir in parmesan cheese until the sauce thickens.",
            "Toss pasta and chicken in the sauce safely."
        ],
        tags: ["Heavy", "Comfort"]
    },
    {
        id: "f6",
        name: "Energizing Berry Smoothie",
        moods: ["tired", "stressed"],
        meals: ["morning", "afternoon"],
        isVeg: true,
        healthGoal: "weight_loss",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Add 1 cup of mixed frozen berries to a blender.",
            "Add 1 banana and 1/2 cup of Greek yogurt.",
            "Pour in 1/2 cup of almond or oat milk.",
            "Blend on high until smooth and creamy.",
            "Pour into a glass and serve cold."
        ],
        tags: ["Quick", "Refreshing"]
    },
    {
        id: "f7",
        name: "Grilled Steak & Asparagus",
        moods: ["energetic", "happy"],
        meals: ["evening"],
        isVeg: false,
        healthGoal: "muscle",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "Season steak generously with salt, pepper, and garlic powder.",
            "Grill steak over high heat for 4-5 mins per side (medium-rare).",
            "Toss asparagus in olive oil and grill for 3-4 mins.",
            "Let steak rest for 5 minutes before slicing.",
            "Serve hot with a side of mashed potatoes."
        ],
        tags: ["Premium", "Protein"]
    },
    {
        id: "f8",
        name: "Chocolate Fudge Ice Cream",
        moods: ["sad", "stressed"],
        meals: ["afternoon", "evening", "late"],
        isVeg: true,
        healthGoal: "balanced", // Let's be honest, we all need it sometimes
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        recipe: [
            "In a bowl, mix 2 cups heavy cream, 1 cup whole milk, 3/4 cup sugar.",
            "Whisk in 1/2 cup cocoa powder and 1 tsp vanilla extract.",
            "Pour the mixture into an ice cream maker and churn.",
            "Fold in dark chocolate chunks or fudge swirls.",
            "Freeze for 4 hours before serving."
        ],
        tags: ["Sweet", "Dessert"]
    }
];

class AppContext {
    constructor() {
        this.user = JSON.parse(localStorage.getItem('moodUser')) || null;
        this.favorites = JSON.parse(localStorage.getItem('moodFavs')) || [];
        this.history = JSON.parse(localStorage.getItem('moodHistory')) || [];
        this.profile = JSON.parse(localStorage.getItem('moodProfile')) || {
            diet: 'none',
            health: 'balanced'
        };
        this.currentMood = null;
        this.recommendedFoods = [];
    }

    init() {
        if (this.user) {
            document.getElementById('auth-section').classList.remove('section-active');
            document.getElementById('main-section').style.display = 'block';
            this.navigate('home');
            document.getElementById('welcome-msg').innerText = `Hey ${this.user.name}, let's find you something to eat.`;
            
            // Populate profile fields
            document.getElementById('pref-diet').value = this.profile.diet;
            document.getElementById('pref-health').value = this.profile.health;
            this.renderHistory();
        }
    }

    switchAuthTab(tab) {
        document.getElementById('tab-login').classList.remove('active');
        document.getElementById('tab-signup').classList.remove('active');
        document.getElementById(`tab-${tab}`).classList.add('active');
        
        const nameGroup = document.getElementById('name-group');
        const submitBtn = document.getElementById('auth-submit-btn');
        if (tab === 'signup') {
            nameGroup.style.display = 'block';
            submitBtn.innerText = 'Sign Up';
        } else {
            nameGroup.style.display = 'none';
            submitBtn.innerText = 'Log In';
        }
    }

    handleAuth(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const nameInput = document.getElementById('username').value;
        const isSignup = document.getElementById('tab-signup').classList.contains('active');
        
        let name = "Foodie";
        if (isSignup && nameInput) {
            name = nameInput;
        } else if (email) {
            name = email.split('@')[0];
        }

        this.user = { name, email };
        localStorage.setItem('moodUser', JSON.stringify(this.user));
        
        // Reset auth form
        e.target.reset();
        
        this.init();
    }

    logout() {
        localStorage.removeItem('moodUser');
        this.user = null;
        document.getElementById('main-section').style.display = 'none';
        document.getElementById('auth-section').classList.add('section-active');
        // Reset views
        document.getElementById('recommendations-container').style.display = 'none';
    }

    navigate(viewId) {
        document.querySelectorAll('.view').forEach(el => {
            if(el.id !== 'auth-section') el.classList.remove('section-active');
        });
        document.getElementById(`view-${viewId}`).classList.add('section-active');
        
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        if(document.getElementById(`nav-${viewId}`)) {
            document.getElementById(`nav-${viewId}`).classList.add('active');
        }

        if (viewId === 'favorites') this.renderFavorites();
        if (viewId === 'profile') this.renderHistory();
    }

    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 11) return "morning";
        if (hour >= 11 && hour < 16) return "afternoon";
        if (hour >= 16 && hour < 22) return "evening";
        return "late";
    }

    selectMood(mood) {
        this.currentMood = mood;
        
        document.getElementById('recommendations-container').style.display = 'none';
        document.getElementById('loading-spinner').style.display = 'block';
        
        // Record history
        const timeStr = new Date().toLocaleString();
        this.history.unshift({ mood, time: timeStr });
        if(this.history.length > 10) this.history.pop();
        localStorage.setItem('moodHistory', JSON.stringify(this.history));

        setTimeout(() => {
            this.generateRecommendations();
            document.getElementById('loading-spinner').style.display = 'none';
            document.getElementById('recommendations-container').style.display = 'block';
            
            const timeCtx = this.getTimeOfDay();
            document.getElementById('time-context').innerText = `(${timeCtx} time)`;
        }, 1200);
    }

    generateRecommendations() {
        const timeOfDay = this.getTimeOfDay();
        
        let filtered = foodDatabase.filter(food => {
            // Check diet
            if (this.profile.diet === 'veg' && !food.isVeg) return false;
            if (this.profile.diet === 'vegan' && !food.isVeg) return false; // Approximated
            
            // Score based on matching criteria
            let score = 0;
            if (food.moods.includes(this.currentMood)) score += 3;
            if (food.meals.includes(timeOfDay)) score += 2;
            if (food.healthGoal === this.profile.health) score += 1;
            
            food._tempScore = score;
            return score > 0;
        });

        // Sort by score
        filtered.sort((a, b) => b._tempScore - a._tempScore);
        
        // Take top 4
        this.recommendedFoods = filtered.slice(0, 4);
        
        // Fallback if none matched
        if (this.recommendedFoods.length === 0) {
            this.recommendedFoods = foodDatabase.slice(0, 3);
        }

        this.renderFoodGrid(this.recommendedFoods, 'food-grid');
    }

    createFoodCard(food) {
        const isFav = this.favorites.includes(food.id);
        const tagsHtml = food.tags.map(t => `<span class="tag">${t}</span>`).join('');
        
        return `
            <div class="food-card">
                <img src="${food.image}" alt="${food.name}" class="card-img">
                <div class="card-content">
                    <h3 class="card-title">${food.name}</h3>
                    <div class="card-tags">${tagsHtml}</div>
                    <div class="card-actions">
                        <button class="btn-recipe" onclick="appContext.openRecipe('${food.id}')">View Recipe</button>
                        <button class="btn-fav ${isFav ? 'active' : ''}" onclick="appContext.toggleFavorite('${food.id}', this)">
                            <i class="${isFav ? 'ph-fill' : 'ph'} ph-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderFoodGrid(foods, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = foods.map(f => this.createFoodCard(f)).join('');
    }

    renderFavorites() {
        const favFoods = foodDatabase.filter(f => this.favorites.includes(f.id));
        if (favFoods.length === 0) {
            document.getElementById('favorites-grid').innerHTML = '';
            document.getElementById('no-favorites').style.display = 'block';
        } else {
            document.getElementById('no-favorites').style.display = 'none';
            this.renderFoodGrid(favFoods, 'favorites-grid');
        }
    }

    toggleFavorite(id, btnElement) {
        const index = this.favorites.indexOf(id);
        const icon = btnElement.querySelector('i');
        
        if (index > -1) {
            // Remove
            this.favorites.splice(index, 1);
            btnElement.classList.remove('active');
            icon.classList.remove('ph-fill');
            icon.classList.add('ph');
        } else {
            // Add
            this.favorites.push(id);
            btnElement.classList.add('active');
            icon.classList.remove('ph');
            icon.classList.add('ph-fill');
        }
        localStorage.setItem('moodFavs', JSON.stringify(this.favorites));
        
        // Re-render fav view if we are on it
        if(document.getElementById('view-favorites').classList.contains('section-active')) {
            this.renderFavorites();
        }
    }

    openRecipe(id) {
        const food = foodDatabase.find(f => f.id === id);
        if (!food) return;

        document.getElementById('modal-img').src = food.image;
        document.getElementById('modal-title').innerText = food.name;
        document.getElementById('modal-tags').innerHTML = food.tags.map(t => `<span class="tag">${t}</span>`).join('');
        
        const stepsHtml = food.recipe.map((step, idx) => `
            <li>
                <div class="step-num">${idx + 1}</div>
                <div>${step}</div>
            </li>
        `).join('');
        document.getElementById('modal-steps').innerHTML = stepsHtml;

        document.getElementById('recipe-modal').style.display = 'flex';
    }

    closeRecipe() {
        document.getElementById('recipe-modal').style.display = 'none';
    }

    updateProfile() {
        this.profile.diet = document.getElementById('pref-diet').value;
        this.profile.health = document.getElementById('pref-health').value;
    }

    saveProfile() {
        localStorage.setItem('moodProfile', JSON.stringify(this.profile));
        alert('Preferences saved automatically!');
    }

    renderHistory() {
        const list = document.getElementById('history-list');
        if (this.history.length === 0) {
            list.innerHTML = '<li><p>No mood history yet. Go select how you feel today!</p></li>';
            return;
        }
        list.innerHTML = this.history.map(h => {
             const emojiMap = {
                happy: '😄', sad: '🥺', stressed: '😫', tired: '😴', energetic: '🤩'
             };
             return `<li>
                <span>Recorded feeling <strong>${h.mood}</strong> ${emojiMap[h.mood] || ''}</span>
                <span style="color:var(--text-muted); font-size:0.875rem;">${h.time}</span>
             </li>`;
        }).join('');
    }

    suggestRestaurant() {
        // Optional feature mock
        const q = this.recommendedFoods[0] ? this.recommendedFoods[0].name.split(' ')[0] : 'food';
        window.open(`https://www.google.com/maps/search/nearby+${q}+restaurant`, '_blank');
    }
}

// Global binding
window.appContext = new AppContext();

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    window.appContext.init();
});
