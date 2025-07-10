import { useState } from "react";

function FilterCategory({ categoryHandle }) {
    const categories = [
        { value: "all", label: "All Books" },
        { value: "computersInternet", label: "Computers Internet Books" },
        { value: "sciencefiction", label: "Science Fiction Books" },
        { value: "actionadventure", label: "Action Adventure Books" },
        { value: "comics", label: "Comics" },
    ];

    const [activeCategory, setActiveCategory] = useState("all");

    const handleClick = (category) => {
        setActiveCategory(category);         // update current category
        categoryHandle(category);            // notify parent
    };

    return (
        <section className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-6">
            <ul className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                    <li key={cat.value}>
                        <button
                            onClick={() => handleClick(cat.value)}
                            className={`px-4 py-2 rounded-md text-sm sm:text-base transition duration-300
                                ${activeCategory === cat.value
                                    ? "bg-white text-blue-600 border border-blue-600"
                                    : "bg-blue-600 text-white hover:bg-blue-700"}
                            `}
                        >
                            {cat.label}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FilterCategory;
