recipes = [
    {
        id: "example-food",
        category: "breakfast",
        title: "Example food",
        author: "Example Man",
        description: "Example description",
        ingredients: ["ingredient 1", "ingredient 2"],
        tags: ["tag1", "tag2", "tag3"],
        image: "img/8-3-large.jpg"
    },
    {
        id: "example-food2",
        category: "lunch",
        title: "Example lunch",
        author: "Example Chef",
        description: "Example description",
        ingredients: ["ingredient 1", "ingredient 2"],
        tags: ["tag1", "tag2", "tag3"],
        image: "img/8-3-large.jpg"
    },
    {
        id: "example-food3",
        category: "snacks",
        title: "Bread snack?",
        author: "Example Chef",
        description: "Example description",
        ingredients: ["ingredient 1", "ingredient 2"],
        tags: ["tag1", "tag2", "tag3"],
        image: "img/8-3-large.jpg"
    },
    {
        id: "example-food4",
        category: "dinner",
        title: "Baguette dinner",
        author: "Gordon Ramsay",
        description: "Example description",
        ingredients: ["ingredient 1", "ingredient 2"],
        tags: ["tag1", "tag2", "tag3"],
        image: "img/8-3-large.jpg"
    },
    {
        id: "example-food5",
        category: "beforebed",
        title: "Example food 5",
        author: "Example Chef",
        description: "Example description",
        ingredients: ["ingredient 1", "ingredient 2"],
        tags: ["tag1", "tag2", "tag3"],
        image: "img/8-3-large.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    recipes.forEach(recipe => {
        const container = document.querySelector(`#${recipe.category} .recipe-area`);
        if (!container) return;

        const recipeBox = document.createElement("div");
        recipeBox.classList.add("recipe-box");
        recipeBox.dataset.id = recipe.id;

        const recipeTitle = document.createElement("h2");
        recipeTitle.textContent = recipe.title;

        const recipeCreator = document.createElement("p");
        recipeCreator.textContent = recipe.author;

        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.image;

        const recipeTags = document.createElement("div");
        recipeTags.textContent = recipe.tags.join(", ");

        recipeBox.appendChild(recipeTitle);
        recipeBox.appendChild(recipeCreator);
        recipeBox.appendChild(recipeImage);
        recipeBox.appendChild(recipeTags);

        container.appendChild(recipeBox);
    });
});

