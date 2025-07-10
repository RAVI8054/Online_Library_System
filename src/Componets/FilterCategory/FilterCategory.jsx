function FilterCategory({ categoryHandle }) {
    // Static category list, added "All"
    const categories = [
        "all",
        "computersInternet",
        "sciencefiction",
        "actionadventure",
        "comics"
    ];
      

    // Minimal fix: call categoryHandle with category on button click
    return (
        <>
            <section>
                <h2>Categories:</h2>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button onClick={() => categoryHandle(cat)}>
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default FilterCategory;
