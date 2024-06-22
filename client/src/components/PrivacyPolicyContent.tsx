import '../App.css';

function PrivacyPolicyContent() {
    return (


        <div className="container mx-auto p-12 shadow-lg bg-white mt-16 mb-16">
            <header className="flex items-center justify-center py-8">
                <h1 className="text-4xl font-bold text-center text-red-600">Privacy Policy</h1>
                <img
                    className="h-10 ml-4"
                    src="privacy-policy.png"
                    alt="Privacy Policy"
                />
            </header> {/* Main container with margins and padding */}
            <p className="text-gray-500 mb-4">
                <strong>Effective Date:</strong> [01/05/2024]
            </p>

            <h4 id="introduction" className="text-xl font-bold mb-4">Introduction</h4>
            <div className='h-1 bg-red-500 mb-4'></div>
            <p className="text-gray-700 mb-8">
                Welcome to LIFE FLOW. We value the privacy and security of our users.
                This Privacy Policy describes how we collect, use, disclose, and
                safeguard your information when you visit our website [Website URL],
                use our services, or engage with us in other ways. By accessing or using
                our services, you agree to this Privacy Policy.
            </p>
            <h4 id="information-we-collect" className="text-xl font-bold mb-4">1. Information We Collect</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">1.1 Personal Information</h4>
            <ul className='good'>
                <li >Full Name</li>
                <li >Contact Details (email address, phone number, postal address)</li>
                <li >Date of Birth</li>
                <li >Identification Information (government-issued IDs)</li>
                <li >Emergency Contact Information</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">1.2 Health Information</h4>
            <ul className='good' >
                <li >Blood Type</li>
                <li >Donation History</li>
                <li >Medical Conditions and History</li>
                <li >Current Medications</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">1.3 Usage Data</h4>
            <ul className='good'>
                <li>IP Address</li>
                <li>Browser Type and Version</li>
                <li>Operating System</li>
                <li>Referring URLs</li>
                <li>Pages Viewed</li>
                <li>Date and Time of Visit</li>
                <li>Clickstream Data</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">1.4 Cookies and Tracking Technologies</h4>
            <ul className='good'>
                <li>Types of Cookies Used (session cookies, persistent cookies, etc.)</li>
                <li>Web Beacons</li>
                <li>Pixel Tags</li>
                <li>Analytics Services (e.g., Google Analytics)</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="how-we-use">2. How We Use Your Information</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">2.1 To Provide and Manage Our Services</h4>
            <ul className='good'>
                <li>Facilitate Blood Donations</li>
                <li>Schedule and Manage Appointments</li>
                <li>Communicate with Donors</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">2.2 To Improve Our Services</h4>
            <ul className='good'>
                <li>Analyze Usage Trends</li>
                <li>Conduct Research and Surveys</li>
                <li>Develop New Features and Services</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">2.3 For Communication</h4>
            <ul className='good'>
                <li>Send Appointment Reminders</li>
                <li>Provide Updates and News</li>
                <li>Respond to Inquiries and Support Requests</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">2.4 For Legal and Security Purposes</h4>
            <ul className='good'>
                <li>Comply with Legal Obligations</li>
                <li>Protect Against Fraud and Abuse</li>
                <li>Enforce Terms and Conditions</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="disclosure">3. Disclosure of Your Information</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">3.1 With Service Providers</h4>
            <ul className='good'>
                <li>IT and Hosting Services</li>
                <li>Marketing and Communication Services</li>
                <li>Payment Processors</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">3.2 With Healthcare Providers</h4>
            <ul className='good'>
                <li>Hospitals and Clinics</li>
                <li>Medical Professionals</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">3.3 For Legal Reasons</h4>
            <ul className='good'>
                <li>Compliance with Laws</li>
                <li>Responding to Legal Processes</li>
                <li>Protecting Rights and Safety</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">3.4 With Your Consent</h4>
            <ul className='good'>
                <li>For Additional Services</li>
                <li>Sharing Information at Your Request</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="security">4. Data Security</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">4.1 Security Measures</h4>
            <ul className='good'>
                <li>Encryption</li>
                <li>Secure Servers</li>
                <li>Access Controls</li>
                <li>Regular Security Audits</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">4.2 Incident Response</h4>
            <ul className='good'>
                <li>Data Breach Protocols</li>
                <li>Notification Procedures</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="rights">5. Your Rights</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">5.1 Access and Correction</h4>
            <ul className='good'>
                <li>Request Access to Personal Information</li>
                <li>Update or Correct Information</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">5.2 Deletion and Restriction</h4>
            <ul className='good'>
                <li>Request Deletion of Data</li>
                <li>Restrict Processing of Data</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">5.3 Data Portability</h4>
            <ul className='good'>
                <li>Request Transfer of Data to Another Service Provider</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">5.4 Opt-Out</h4>
            <ul className='good'>
                <li>Unsubscribe from Marketing Communications</li>
                <li>Manage Cookie Preferences</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="retention">6. Data Retention</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">6.1 Retention Periods</h4>
            <ul className='good'>
                <li>Retain Data as Long as Necessary for Services</li>
                <li>Legal and Regulatory Requirements</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">6.2 Deletion Protocols</h4>
            <ul className='good'>
                <li>Procedures for Secure Data Deletion</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="cookies">7. Cookies and Tracking Technologies</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">7.1 Types of Cookies</h4>
            <ul className='good'>
                <li>Essential Cookies</li>
                <li>Performance Cookies</li>
                <li>Functionality Cookies</li>
                <li>Targeting Cookies</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">7.2 Managing Cookies</h4>
            <ul className='good'>
                <li>Browser Settings</li>
                <li>Cookie Management Tools</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="third-party-links">8. Third-Party Links</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">8.1 External Websites</h4>
            <ul className='good'>
                <li>Links to Third-Party Sites</li>
                <li>Responsibility for Third-Party Content</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="children">9. Children's Privacy</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">9.1 Age Restrictions</h4>
            <ul className='good'>
                <li>Services Not Directed to Children Under 13</li>
                <li>Parental Consent for Minors</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">9.2 Parental Controls</h4>
            <ul className='good'>
                <li>Managing Child’s Information</li>
                <li>Rights of Parents</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="international">10. International Data Transfers</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">10.1 Transfer Mechanisms</h4>
            <ul className='good'>
                <li>Cross-Border Data Transfers</li>
                <li>Adequacy Decisions and Safeguards</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="changes">11. Changes to This Privacy Policy</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">11.1 Updates and Revisions</h4>
            <ul className='good'>
                <li>Notification of Changes</li>
                <li>Effective Date of Changes</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="contact">12. Contact Us</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">12.1 Contact Information</h4>
            <ul className='good'>
                <li>Email Address: Help@Lifeflow.tech</li>
                <li>Phone Number: +90 7545968228</li>
            </ul>

            <h4 className="text-xl font-bold mb-4" id="legal-basis">13. Legal Basis for Processing (if applicable under GDPR)</h4>
            <div className='h-0.5 bg-red-500 mb-4'></div>
            <h4 className="text-lg font-medium mb-2">13.1 Consent</h4>
            <ul className='good'>
                <li>Obtaining User Consent</li>
                <li>Withdrawing Consent</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">13.2 Contractual Necessity</h4>
            <ul className='good'>
                <li>Processing Necessary for Contracts</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">13.3 Legal Obligations</h4>
            <ul className='good'>
                <li>Compliance with Legal Requirements</li>
            </ul>

            <h4 className="text-lg font-medium mb-2">13.4 Legitimate Interests</h4>
            <ul className='good'>
                <li>Pursuing Legitimate Business Interests</li>
            </ul>

        </div>
    )
}
export default PrivacyPolicyContent
