import { useState } from "react"
import emailjs from 'emailjs-com'


function Contact_Main() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setloading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setloading(true)
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setErrorMessage('All fields are required.');
            return;
        }
        setErrorMessage('');

        emailjs.send(
            'service_djy66op',
            'template_5168a75',
            {
                from_name: formData.name,
                to_name: "Sanskar",
                from_email: formData.email,
                to_email: "sanskarverma124@gmail.com",
                subject: formData.subject,
                message: formData.message,
            },
            'eq0HDcCFdgyHzKrrk'
        ).then(
            () => {
                setloading(false);
                alert("Thank you I will get back too u as soon as possible");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            },
        );
    };

    return (
        <div>
            <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
                <div className="error text-red-500" id="error-message">{errorMessage}</div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="subject">
                        Subject:
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full p-2 border border-gray-300 rounded"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    {!loading ? "Send" : "Sending.."}
                </button>
            </form>
        </div>

    )
}

export default Contact_Main
