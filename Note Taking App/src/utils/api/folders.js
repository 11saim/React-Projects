const BASE = "http://localhost:3000/api/folders/"

export const fetchFolders = async (URL) => {
    const response = await fetch(BASE + URL);
    const data = await response.json();
    return data
};

export const addFolder = async (body) => {
    const response = await fetch(BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
}

export const updateFolder = async (folderId, body) => {
    const response = await fetch(BASE + folderId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
};

export const deleteFolder = async (folderId) => {
    const response = await fetch(BASE + folderId, {
        method: "DELETE",
    });

    const data = await response.json();
    return data;
};