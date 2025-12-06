import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Server, Database, Image } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium animate-fadeIn">
              Node.js Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slideUp">
              Mohit Bhirani
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              Building scalable backend solutions with Node.js, Express, and modern web technologies
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-slideUp"
              style={{ animationDelay: '0.2s' }}
            >
              <span>Contact Me</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-50 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
            Hi, I'm Mohit Bhirani, a passionate Node.js developer with expertise in building robust, scalable backend systems.
            I specialize in API development, database design, and creating efficient server-side solutions that power modern applications.
            With a strong foundation in JavaScript and Node.js ecosystem, I bring ideas to life through clean, maintainable code.
          </p>
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              <span>Learn more about me</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Node.js & Express</h3>
              <p className="text-gray-600">
                Expert in building RESTful APIs and server-side applications using Node.js and Express framework.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Design</h3>
              <p className="text-gray-600">
                Proficient in MongoDB, PostgreSQL, and database architecture for scalable applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API Development</h3>
              <p className="text-gray-600">
                Designing and implementing secure, efficient APIs with proper authentication and authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Project
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-blue-500 p-12 flex items-center justify-center">
                <Image className="w-24 h-24 text-white" />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compress Image</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An efficient Android application that compresses images directly on the user's device.
                  Built with performance and privacy in mind, all processing happens locally with no data
                  collection or external uploads. Perfect for users who need to reduce image file sizes
                  while maintaining quality.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Android</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Image Processing</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Privacy-First</span>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
