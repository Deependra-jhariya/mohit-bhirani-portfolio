import { FileText, Award, AlertCircle, Shield, UserCheck, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">Last Updated: December 2025</p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="space-y-8">
              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These Terms & Conditions govern your use of the Compress Image app, developed by
                      Mohit Bhirani. By downloading, installing, or using this app, you agree to be bound
                      by these terms. If you do not agree with any part of these terms, please do not use
                      the app.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. License</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      You are granted a limited, non-exclusive, non-transferable, revocable license to use
                      the Compress Image app for personal, non-commercial purposes. This license does not
                      include the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Copy, modify, or create derivative works of the app</li>
                      <li>Reverse engineer, decompile, or disassemble the app</li>
                      <li>Distribute, sell, lease, rent, or sublicense the app</li>
                      <li>Remove any proprietary notices or labels from the app</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. No Warranty</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      The Compress Image app is provided "as is" and "as available" without any warranties
                      or guarantees of any kind, either express or implied. This includes, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Warranties of merchantability or fitness for a particular purpose</li>
                      <li>Guarantees that the app will be error-free or uninterrupted</li>
                      <li>Warranties regarding the accuracy or reliability of results</li>
                      <li>Guarantees of compatibility with all devices or operating systems</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Limitation of Liability</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      To the maximum extent permitted by law, the developer (Mohit Bhirani) shall not be
                      responsible or liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Data loss or corruption of any kind</li>
                      <li>Device malfunction or performance issues</li>
                      <li>Damage caused by misuse of the app or user error</li>
                      <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                      <li>Loss of profits, revenue, data, or business opportunities</li>
                      <li>Costs of procurement of substitute goods or services</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      You use the Compress Image app at your own risk and discretion. It is your
                      responsibility to maintain backups of important data.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. User Responsibilities</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      As a user of the Compress Image app, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Use the app only for lawful purposes and in compliance with all applicable laws</li>
                      <li>Not reverse engineer, decompile, or attempt to extract the source code</li>
                      <li>Not misuse, abuse, or exploit the app in any way</li>
                      <li>Not illegally distribute, share, or sell the app to others</li>
                      <li>Maintain the security of your device and data</li>
                      <li>Not use the app in any way that could damage, disable, or impair the service</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Changes to Terms</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We reserve the right to modify these Terms & Conditions at any time. Changes will
                      be effective immediately upon posting on this page. Your continued use of the app
                      after any changes constitutes acceptance of the new terms. We encourage you to
                      review these terms periodically.
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Contact</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      If you have any questions, concerns, or feedback regarding these Terms & Conditions
                      or the Compress Image app, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 mb-2"><span className="font-semibold">Developer:</span> Mohit Bhirani</p>
                      <a
                        href="mailto:mankudeveloper786@gmail.com"
                        className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>mankudeveloper786@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <span>Important Notice</span>
            </h3>
            <p className="text-gray-600">
              By using the Compress Image app, you acknowledge that you have read, understood, and agree
              to be bound by these Terms & Conditions. These terms constitute a legally binding agreement
              between you and Mohit Bhirani.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
