
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess('Your form has been submitted successfully!');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f5f0e8] px-[7%] py-20 max-md:px-[5%]"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold tracking-[2px] text-[#7898a5]">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-semibold text-[#252a30]">
            Contact Us
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#73777b]">
            Have a question? Send us a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#252a30]">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#7898a5]"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#252a30]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#7898a5]"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#252a30]">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="w-full resize-none border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#7898a5]"
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#252a30] px-7 py-3 text-sm text-white transition-colors hover:bg-[#526d78]"
          >
            Send Message
          </button>

          {success && (
            <p className="text-sm text-green-700">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
