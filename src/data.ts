// Mock recipe data
export const recipes = {
  "1": {
    id: "1",
    title: "Classic Chocolate Chip Cookies",
    author: "Sarah Johnson",
    createdAt: "2024-01-15T10:30:00Z",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup (2 sticks) butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips",
    ],
    instructions: `
## Step 1: Preheat and Prepare

Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.

## Step 2: Mix Dry Ingredients

In a small bowl, combine flour, baking soda, and salt. Set aside.

## Step 3: Cream Butter and Sugars

In a large bowl, beat softened butter with both sugars until creamy and light (about 2-3 minutes).

## Step 4: Add Eggs and Vanilla

Beat in eggs one at a time, then add vanilla extract. Mix until well combined.

## Step 5: Combine Wet and Dry

Gradually stir in the flour mixture until just combined. Don't overmix!

## Step 6: Add Chocolate Chips

Fold in chocolate chips until evenly distributed throughout the dough.

## Step 7: Bake

Drop rounded tablespoons of dough onto prepared baking sheets, spacing them 2 inches apart. Bake for 9-11 minutes or until golden brown.

## Step 8: Cool and Enjoy

Let cookies cool on baking sheet for 2 minutes, then transfer to a wire rack. Enjoy warm or store in an airtight container!
    `,
  },
  "2": {
    id: "2",
    title: "Homemade Pizza Margherita",
    author: "Marco Rossi",
    createdAt: "2024-02-20T14:45:00Z",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    ingredients: [
      "500g tipo 00 flour",
      "325ml warm water",
      "10g salt",
      "7g instant yeast",
      "2 tbsp olive oil",
      "400g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "Extra virgin olive oil for drizzling",
    ],
    instructions: `
## Step 1: Make the Dough

Combine flour, yeast, salt, and warm water. Knead for 10 minutes until smooth and elastic.

## Step 2: First Rise

Place dough in an oiled bowl, cover, and let rise for 1-2 hours until doubled in size.

## Step 3: Prepare the Sauce

Mix crushed tomatoes with a pinch of salt and a drizzle of olive oil. Keep it simple!

## Step 4: Shape the Pizza

Divide dough into portions, stretch each into a circle. Don't use a rolling pin - use your hands!

## Step 5: Top and Bake

Spread sauce, add torn mozzarella, and bake at 500°F (260°C) for 10-12 minutes until crust is golden.

## Step 6: Finish

Top with fresh basil and a drizzle of extra virgin olive oil. Slice and serve immediately!
    `,
  },
};

// Mock comments data
export const comments = {
  "1": [
    {
      id: "1",
      recipeId: "1",
      author: "Emily Chen",
      text: "These cookies turned out amazing! I added some sea salt on top before baking and they were perfect. My whole family loved them!",
      rating: 5,
      createdAt: "2024-01-16T09:15:00Z",
    },
    {
      id: "2",
      recipeId: "1",
      author: "Michael Brown",
      text: "Good recipe but I found them a bit too sweet. Next time I'll reduce the sugar by 1/4 cup.",
      rating: 4,
      createdAt: "2024-01-17T14:30:00Z",
    },
    {
      id: "3",
      recipeId: "1",
      author: "Jessica Taylor",
      text: "Perfect! Exactly what I was looking for. The cookies stay soft for days when stored properly.",
      rating: 5,
      createdAt: "2024-01-18T11:45:00Z",
    },
    {
      id: "4",
      recipeId: "1",
      author: "David Kim",
      text: "Made these for a bake sale and they sold out in minutes! Will definitely make again.",
      rating: 5,
      createdAt: "2024-01-19T16:20:00Z",
    },
  ],
  "2": [
    {
      id: "5",
      recipeId: "2",
      author: "Sofia Martinez",
      text: "Best homemade pizza I've ever made! The dough recipe is foolproof.",
      rating: 5,
      createdAt: "2024-02-21T10:30:00Z",
    },
    {
      id: "6",
      recipeId: "2",
      author: "James Wilson",
      text: "Really good but my oven doesn't go to 500°F. I baked at 450°F for a bit longer and it worked well.",
      rating: 4,
      createdAt: "2024-02-22T13:15:00Z",
    },
    {
      id: "7",
      recipeId: "2",
      author: "Olivia Anderson",
      text: "Authentically delicious! Tastes just like the pizza I had in Naples.",
      rating: 5,
      createdAt: "2024-02-23T18:45:00Z",
    },
  ],
};