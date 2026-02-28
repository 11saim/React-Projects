import React from "react";

export default function DeleteModal({ setDeleteAlert, handler }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-[#1e1e1e] p-6 rounded-lg w-87.5 text-white">
        <h3 className="text-lg font-semibold mb-4">Delete Folder?</h3>

        <p className="text-sm text-gray-400 mb-6">
          All the notes inside this folder will also be deleted.
        </p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setDeleteAlert(null)}
            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              handler();
              setDeleteAlert(null);
            }}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
