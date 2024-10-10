import React, { useState } from 'react'
import Navbar from '../layout/navbar/Navbar'
import Footer from '../layout/footer/Footer'
import './CreateWebtoon.css'
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


const CreateWebtoon = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!title || !image || !description) {
            alert("All fields are required!");
            return;
        }
    
        try {
            // Create form data
            const formData = new FormData();
            formData.append('title', title);
            formData.append('image', image);
            formData.append('description', description);
    
            const response = await axios.post("https://webtoon-1.onrender.com/api/v1/webtoon/post-webtoon", formData);
    
            if (response.data.success) {
                toast.success("Webtoon created successfully!!!!");
    
                // Delay the navigation by 3 seconds (3000 milliseconds)
                setTimeout(() => {
                    // Reset form fields
                    setTitle('');
                    setImage(null);
                    setDescription('');
    
                    // Navigate to another page
                    navigate("/");
                }, 3000); 
    
            } else {
                toast.error(response.data.message || "Failed to create webtoon");
            }
    
        } catch (error) {
            console.error("Error creating webtoon:", error);
            toast.error("Something went wrong!");
        }
    };
    
    

    // Handle image change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <>
            <Navbar/>
            <div className="create-webtoon-container">
            <div className='card1'>
            <h2>Create Webtoon</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter the title"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter a description"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="create-button">Create</button>
            </form>
            </div>
            </div>
            <Footer/>
        </>
    );
};

export default CreateWebtoon;
