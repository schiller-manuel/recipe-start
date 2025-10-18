import { formatDate } from "date-fns";
import { marked } from "marked";
import _ from "lodash";
import { SaveButton } from "../components/SaveButton";
import { CommentForm } from "../components/CommentForm";
import { createServerFn } from '@tanstack/react-start';
import { recipes, comments as commentsData } from '~/data';
import { createFileRoute, notFound } from '@tanstack/react-router'
import { z } from 'zod/v4';

const getRecipeById = createServerFn().inputValidator(z.string()).handler(async ({ data: id }) => {
    // Get data directly from our data source (simulating database access)
    // In production, this would be actual database queries
    const recipe = recipes[id as keyof typeof recipes];
    const comments = commentsData[id as keyof typeof commentsData] || [];
    if (!recipe) {
        throw notFound();
    }
    const formattedDate = formatDate(new Date(recipe.createdAt), "MMMM dd, yyyy");
    const htmlInstructions = marked(recipe.instructions);
    const sortedComments = _.sortBy(comments, "createdAt").reverse();
    return { formattedDate, htmlInstructions, sortedComments, recipe, comments };
})

export const Route = createFileRoute('/recipes2/$id')({
    loader: ({ params }) => getRecipeById({ data: params.id }),
    notFoundComponent: () => (<div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600">Recipe not found</p>
    </div>),
    component: RouteComponent,
})




function RouteComponent() {
    const { id } = Route.useParams();
    const { recipe, formattedDate, htmlInstructions, sortedComments } = Route.useLoaderData();

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Approach indicator */}
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <div className="flex items-center">
                        <span className="text-2xl mr-3">🟢</span>
                        <div>
                            <h3 className="font-bold text-green-800">
                                Start Server Function
                            </h3>
                            <p className="text-sm text-green-600">
                                move all data fetching and processing to the server function
                            </p>
                        </div>
                    </div>
                </div>

                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Recipe image */}
                    <div className="relative h-96">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {recipe.title}
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Posted on <span className="font-semibold">{formattedDate}</span>{" "}
                            by <span className="font-semibold">{recipe.author}</span>
                        </p>

                        {/* Ingredients section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Ingredients
                            </h2>
                            <ul className="space-y-2">
                                {recipe.ingredients.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Instructions section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Instructions
                            </h2>
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: htmlInstructions }}
                            />
                        </section>

                        <div className="mb-8">
                            <SaveButton recipeId={id} />
                        </div>

                        <section className="border-t pt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Comments ({sortedComments.length})
                            </h2>
                            <div className="space-y-6">
                                {sortedComments.map((comment) => (
                                    <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="font-semibold text-gray-900">
                                                {comment.author}
                                            </p>
                                            <p className="text-yellow-500">
                                                {"⭐".repeat(comment.rating)}
                                            </p>
                                        </div>
                                        <p className="text-gray-700 mb-2">{comment.text}</p>
                                        <p className="text-sm text-gray-500">
                                            {formatDate(new Date(comment.createdAt), "MMMM dd, yyyy")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="mt-8 border-t pt-8">
                            <CommentForm recipeId={id} />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

