function ConfirmDialog({ isOpen, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <p className="text-black mb-4">Are you sure you want to delete this task?</p>
                <div className="flex justify-end space-x-2">
                    <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={onConfirm}>Delete</button>
                    <button className="bg-gray-400 text-white px-3 py-1 rounded" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;