import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-6"></div>
          </div>

          <div className="mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Me Directly</h2>
              <a
                href="mailto:mankudeveloper786@gmail.com"
                className="text-lg text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                mankudeveloper786@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600">
              I typically respond to all inquiries within 24-48 hours. For urgent matters,
              please send an email directly to{' '}
              <a
                href="mailto:mankudeveloper786@gmail.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                mankudeveloper786@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
