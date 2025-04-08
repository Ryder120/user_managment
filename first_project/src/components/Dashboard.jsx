import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'

const Dashboard = () => {
    const { id } = useParams(); // Get the 'id' from the URL
    const [user, setUser] = useState(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for edit popup
    const [editFormData, setEditFormData] = useState({ name: '', email: '' }); // State for form data
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // State for delete confirmation popup
    const navigate = useNavigate();

    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${id}`);
                setUser(response.data);
            } catch (error) {
                toast.error('Error fetching user data');
                navigate('/login'); // Redirect to home if user not found  
            }
        };
        fetchUser();
    }, [id]);

    // Open edit popup
    const openEditPopup = () => {
        setEditFormData({ name: user.name, email: user.email }); // Pre-fill form with current user data
        setIsEditPopupOpen(true);
    };

    // Close edit popup
    const closeEditPopup = () => {
        setIsEditPopupOpen(false);
    };

    // Open delete confirmation popup
    const openDeletePopup = () => {
        setIsDeletePopupOpen(true);
    };

    // Close delete confirmation popup
    const closeDeletePopup = () => {
        setIsDeletePopupOpen(false);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    // Handle edit user
    const handleEdit = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/user/${id}`, editFormData);
            setUser(response.data);
            toast.success('User updated successfully');
            closeEditPopup(); // Close popup after successful update
        } catch (error) {
            toast.error('Error updating user');
        }
    };

    // Handle delete user
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/user/${id}`);
            toast.success('User deleted successfully');
            setUser(null); // Clear user data after deletion
            closeDeletePopup(); // Close popup after successful deletion
        } catch (error) {
            toast.error('Error deleting user');
        }
    };

    const ppr = () => {
        navigate('/user/pro');
    }


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {user ? (
                <div className="bg-white shadow-md rounded p-4">
                    <h1 className="text-2xl font-bold mb-4">User Details</h1>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2 font-bold">ID:</td>
                                <td className="px-4 py-2">{user._id}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2 font-bold">Name:</td>
                                <td className="px-4 py-2">{user.name}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2 font-bold">Email:</td>
                                <td className="px-4 py-2">{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex space-x-4 mt-4">
                        <button
                            onClick={openEditPopup}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={openDeletePopup}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                    <button
                        onClick={ppr}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
                    >
                        Go to protected route
                    </button>
                </div>
            ) : (
                <p className="text-center text-gray-500">No user data available</p>
            )}
            <Toaster richColors />
            {/* Edit Popup */}
            {isEditPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-bold mb-4">Edit User</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={editFormData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={editFormData.email}
                                onChange={handleInputChange}

                                className="w-full px-3 py-2 border rounded "
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={closeEditPopup}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleEdit}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Popup */}
            {isDeletePopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                        <p className="mb-4">Are you sure you want to delete this user?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={closeDeletePopup}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
