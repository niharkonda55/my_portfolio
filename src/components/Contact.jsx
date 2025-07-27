import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        alert("Message sent! (Demo only)");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="flex flex-col items-center">
            <h2 className="text-green-400 text-3xl font-bold mb-8">Contact</h2>
            <form onSubmit={handleSubmit} className="bg-[#181818] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
                <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows={4} value={form.message} onChange={handleChange} required />
                <button type="submit" className="btn mt-2">Send</button>
            </form>
        </section>
    );
};

export default Contact;