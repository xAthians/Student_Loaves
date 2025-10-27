const recipes = [
    {
        id: "example-food",
        title: "Example food",
        author: "Example Man",
        description: "Example description",
        ingredients: ["ingredient 1", "ingredient 2"],
        tags: ["tag1", "tag2", "tag3"],
        image: "img/8-3-large.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementsByClassName("recipe-area")[0];

    recipes.forEach(recipe => {
        const recipeBox = document.createElement("div");
        recipeBox.classList.add("recipe-box");
        recipeBox.id = recipe.id;

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
    })
});

