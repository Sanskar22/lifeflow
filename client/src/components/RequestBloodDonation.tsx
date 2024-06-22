import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { UserContext } from '../UserContext';

function RequestBloodDonation() {
    const user = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        details: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        if (!formData.name || !formData.contact || !formData.details) {
            setErrorMessage('All fields are required.');
            setLoading(false);
            return;
        }
        setErrorMessage('');
        emailjs.send(
            'service_9yw7mrk',
            'template_i254zpi',
            {
                from_name: formData.name,
                to_name: "Sanskar",
                from_email: user?.user?.email,
                to_email: "sanskarverma124@gmail.com",
                contact: formData.contact,
                message: formData.details,
            },
            'eq0HDcCFdgyHzKrrk'
        ).then(
            () => {
                setLoading(false);
                alert("Thank you I will get back to you as soon as possible");
                setFormData({
                    name: "",
                    contact: "",
                    details: "",
                });
            },
        ).catch(err => {
            setLoading(false);
            setErrorMessage('Failed to send email. Please try again.');
            console.error(err);
        });
    }

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8 w-5/6 mx-auto">
            <h2 className="text-gray-900 text-lg mb-4">Request Blood Donation</h2>
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <textarea
                    name="details"
                    placeholder="Enter details about the blood requirement"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                ></textarea>
                <button type="submit" className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-900">
                    Submit Request
                </button>
            </form>
            {loading && <div className="text-gray-500 mt-4">Sending...</div>}
        </div>
    );
}

export default RequestBloodDonation;
