import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
            toast.error('Please fill in all fields.', {
                position: 'top-center',
                autoClose: 3000,
            });
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                });
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            } else {
                toast.error('Failed to send message. Please try again.', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
            <ToastContainer />
            <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's work together</h1>
            <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
                I would love to hear from you! Please fill out the form below.
            </p>
            {/* Input Fields */}
            <form className='mt-8 block w-full overflow-hidden' onSubmit={handleSubmit}>
                <div className='flex flex-cols md:flex-row items-center justify-center gap-4'>
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
                    />

                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
                    />
                </div>
                <div className='flex mt-5 flex-cols md:flex-row items-center justify-center gap-4'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
                    />

                    <input
                        type='text'
                        name='phone'
                        placeholder='Phone Number'
                        value={formData.phone}
                        onChange={handleChange}
                        className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
                    />
                </div>
                <textarea 
                    name='message'
                    className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
                    rows={7}
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <div className='mt-4'>
                    <button type='submit' className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;