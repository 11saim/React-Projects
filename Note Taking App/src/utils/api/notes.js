const BASE = "http://localhost:3000/api/notes/"

export const fetchNotes = async (URL) => {
    const response = await fetch(BASE + URL);
    const data = await response.json();
    return data;
};

export const fetchNote = async (noteId) => {
    const response = await fetch(BASE + noteId);
    const data = await response.json();
    return data;
};


export const addNote = async (folderId, body) => {
    const response = await fetch(BASE + `folders/${folderId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        },
    );
    const data = await response.json();

    return data;
};

export const updateNote = async (noteId, body) => {
    const response = await fetch(BASE + noteId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};

export const deleteNote = async (id) => {
    const response = await fetch(BASE + id, {
        method: "DELETE",
    });

    const data = await response.json();
    return data;
};