import { Code2, Database, Server, Zap, Target, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Node.js', level: 95 },
    { name: 'Express.js', level: 90 },
    { name: 'API Development', level: 92 },
    { name: 'JavaScript', level: 88 },
    { name: 'MongoDB', level: 85 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Hello! I'm Mohit Bhirani, a dedicated Node.js developer with a passion for creating
                  efficient, scalable backend solutions. My journey in software development began with
                  a fascination for how things work behind the scenes, and that curiosity has driven me
                  to master the art of server-side programming.
                </p>
                <p>
                  With years of experience in the Node.js ecosystem, I specialize in building RESTful APIs,
                  microservices architectures, and full-stack applications. I believe in writing clean,
                  maintainable code that not only solves problems but also stands the test of time.
                </p>
                <p>
                  Beyond coding, I'm committed to staying updated with the latest technologies and best
                  practices in the ever-evolving world of web development. I enjoy tackling complex
                  challenges and turning them into elegant, efficient solutions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-emerald-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
                <p className="text-gray-600">
                  Expert in Node.js and Express.js for building robust server-side applications and RESTful APIs.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Management</h3>
                <p className="text-gray-600">
                  Proficient in MongoDB, PostgreSQL, and designing efficient database schemas and queries.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">API Architecture</h3>
                <p className="text-gray-600">
                  Designing scalable API architectures with proper authentication, authorization, and security.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600">
                  Optimizing application performance through caching, indexing, and efficient code practices.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience Highlights</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="space-y-8">
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                  <p className="text-gray-600 mb-2">
                    Developed and maintained multiple full-stack applications using Node.js, Express, and modern
                    JavaScript frameworks, serving thousands of users.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">API Design & Implementation</h3>
                  <p className="text-gray-600 mb-2">
                    Created RESTful APIs with comprehensive documentation, implementing best practices for
                    security, scalability, and maintainability.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App Development</h3>
                  <p className="text-gray-600 mb-2">
                    Built the Compress Image Android app, focusing on local processing, user privacy,
                    and optimal performance for image compression tasks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                To create innovative, efficient, and scalable software solutions that solve real-world problems
                while maintaining the highest standards of code quality and user privacy.
              </p>
              <div className="flex justify-center mt-8">
                <Heart className="w-6 h-6 text-white/80" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
