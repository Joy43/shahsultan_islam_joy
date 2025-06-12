'use client';

import { useState, ChangeEvent } from 'react';
import { toast } from 'sonner';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://portfollio-server-seven.vercel.app/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('Submitted successfully! 📩', {
          description: 'Please check your email for more details.',
          position: 'top-center',
        });
      } else {
        toast.error('Error submitting form 😥', {
          description: 'Please try again later.',
        });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Network issue. Try again!');
    }
  };

  return (
    <div className="mt-16">
      <div className="grid sm:grid-cols-2 gap-16 p-8 max-w-4xl mx-auto shadow-md rounded-md font-sans">
        {/* Left Side */}
        <div>
       <h1 className="text-3xl font-extrabold">Let&apos;s communicate</h1>
          <p className="text-sm mt-2 text-gray-600">
            Have a big idea or brand to develop? we love to hear about your project.
          </p>

          <div className="mt-10">
            <h2 className="text-lg font-bold">Email</h2>
            <a href="mailto:ssjoy43@gmail.com" className="text-blue-600 mt-2 block">
              ssjoy43@gmail.com
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold">Socials</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="https://www.linkedin.com/in/shahsultan-islam-joy/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-3"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-4"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
