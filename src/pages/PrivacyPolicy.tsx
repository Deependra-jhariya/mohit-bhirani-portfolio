import { Shield, Database, Users, Lock, RefreshCw, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last Updated: December 2025</p>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy for Compress Image</h2>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Developer:</span> Mohit Bhirani</p>
                <p><span className="font-semibold">App Name:</span> Compress Image</p>
                <p><span className="font-semibold">Contact Email:</span> <a href="mailto:mankudeveloper786@gmail.com" className="text-emerald-600 hover:text-emerald-700">mankudeveloper786@gmail.com</a></p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The Compress Image app does not collect, store, or share any personal information.
                      All image compression operations are performed locally on the user's device. No data
                      is transmitted to external servers or third parties at any time.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Permissions</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      The app may request access to storage permissions only for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Selecting images from your device for compression</li>
                      <li>Saving compressed images to your device</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      No data is uploaded, shared, or transmitted outside of your device. All processing
                      happens locally to ensure complete privacy.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Data Sharing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We do not share any data with third parties. The Compress Image app operates entirely
                      offline and does not communicate with any external servers. Your images and data remain
                      private and under your control at all times.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Children's Privacy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The Compress Image app does not target children under the age of 13 and does not
                      knowingly collect personal information from children. Since no data is collected at all,
                      the app is safe for users of all ages.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Changes to This Policy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may update this privacy policy from time to time to reflect changes in our practices
                      or for other operational, legal, or regulatory reasons. Any changes will be posted on
                      this page with an updated revision date. We encourage you to review this policy
                      periodically.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Contact</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      If you have any questions or concerns about this privacy policy or the Compress Image
                      app, please contact us:
                    </p>
                    <a
                      href="mailto:mankudeveloper786@gmail.com"
                      className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>mankudeveloper786@gmail.com</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Your Privacy Matters</span>
            </h3>
            <p className="text-gray-600">
              We are committed to protecting your privacy. The Compress Image app was designed with
              privacy as a core principle, ensuring that all your data stays on your device where it belongs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
