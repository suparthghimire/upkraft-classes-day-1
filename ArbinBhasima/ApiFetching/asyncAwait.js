    // Endpoints for all todos belonging to user IDs 1 through 5
    const userIds = [1, 2, 3, 4, 5];
    const getTodoAPI = userIds.map(
    (id) => `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    );

    async function fetchAllUserTodos(urls) {
    try {
        const fetchPromises = urls.map(async (url) => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Failed to fetch ${url}: Status ${res.status}`);
            }
            return res.json(); 
        });
        const results = await Promise.allSettled(fetchPromises);

        const successfulTodos = [];

        results.forEach((result, index) => {
        const currentUserId = userIds[index];

        if (result.status === "fulfilled") {
            console.log(`${result.value.length} todos found for userId ${currentUserId}:`, result.value);
            successfulTodos.push({
            userId: currentUserId,
            todos: result.value
            });
        } else {
            console.warn(`Failed to load todos for userId ${currentUserId}:`, result.reason.message);
        }
        });

        return successfulTodos;

    } catch (err) {
        console.error(err);
    }
    }

    fetchAllUserTodos(getTodoAPI);
