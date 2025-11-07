import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions - NutriAgent Bot',
  description: 'Terms and Conditions for NutriAgent Bot - Read our terms of service before using the bot.',
}

export default function TermsPage() {
  return (
    <>
      <div className="legal-page">
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1>Terms and Conditions</h1>
        
        <p className="last-updated">Last Updated: November 2025</p>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using NutriAgent Bot (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          <p>NutriAgent Bot is a Telegram bot service that provides nutrition tracking functionality through natural language conversations and image recognition. The Service is operated by an individual developer ("we," "us," or "our") as a personal project and is not a registered company.</p>
        </section>
        
        <section>
          <h2>2. Description of Service</h2>
          <p>NutriAgent Bot is a conversational Telegram bot that helps users track their nutrition and meals through:</p>
          <ul>
            <li>Natural language text conversations</li>
            <li>Image recognition and analysis of meal photos</li>
            <li>AI-powered nutritional information estimation</li>
            <li>Integration with Google Sheets for data storage</li>
          </ul>
          <p>You may interact with the bot by sending text messages describing your meals or by sending photos of your meals. The bot will attempt to identify ingredients and estimate nutritional information based on your input.</p>
        </section>
        
        <section>
          <h2>3. User Account and Google OAuth</h2>
          <h3>3.1 Google Account Connection</h3>
          <p>To use certain features of the Service, you must connect your Google account using OAuth 2.0 authentication. By connecting your Google account, you:</p>
          <ul>
            <li>Authorize NutriAgent Bot to create and manage a Google Sheets spreadsheet in your Google Drive</li>
            <li>Grant permission for the Service to read and write data to this spreadsheet</li>
            <li>Understand that this connection is optional and can be revoked at any time through your Google account settings</li>
          </ul>
          
          <h3>3.2 OAuth Permissions</h3>
          <p>The Service requests the following Google OAuth scopes:</p>
          <ul>
            <li><strong>Google Sheets API:</strong> To create and update spreadsheets for storing your nutrition data</li>
            <li><strong>Google Drive API:</strong> To create files in your Google Drive</li>
          </ul>
          <p>We only access the spreadsheets that we create for you. We do not access, read, or modify any other files in your Google Drive.</p>
          
          <h3>3.3 Revoking Access</h3>
          <p>You may revoke the Service's access to your Google account at any time by:</p>
          <ul>
            <li>Visiting your Google Account settings (https://myaccount.google.com/permissions)</li>
            <li>Removing NutriAgent Bot from your connected apps</li>
          </ul>
          <p>Revoking access will prevent the Service from updating your spreadsheet, but existing data will remain in your Google Sheets.</p>
        </section>
        
        <section>
          <h2>4. User Responsibilities</h2>
          <h3>4.1 Accurate Information</h3>
          <p>You are responsible for providing accurate information about your meals. The Service's AI-powered estimations are approximations and may not be 100% accurate. You should:</p>
          <ul>
            <li>Verify nutritional information when accuracy is critical</li>
            <li>Provide clear descriptions and context when sharing meals</li>
            <li>Use your best judgment regarding the accuracy of nutritional estimates</li>
          </ul>
          
          <h3>4.2 Acceptable Use</h3>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Service in any way that violates any applicable law or regulation</li>
            <li>Attempt to gain unauthorized access to the Service or its systems</li>
            <li>Interfere with or disrupt the Service or servers connected to the Service</li>
            <li>Use the Service to transmit any harmful, offensive, or inappropriate content</li>
            <li>Reverse engineer, decompile, or attempt to extract the source code of the Service</li>
          </ul>
          
          <h3>4.3 Telegram Account</h3>
          <p>You must have a valid Telegram account to use the Service. You are responsible for maintaining the security of your Telegram account and for all activities that occur under your account.</p>
        </section>
        
        <section>
          <h2>5. Data and Privacy</h2>
          <p>Your use of the Service is also governed by our <Link href="/privacy">Privacy Policy</Link>. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
          <p>Key points regarding your data:</p>
          <ul>
            <li>All nutrition data is stored in Google Sheets that you own and control</li>
            <li>We may temporarily process your messages and images to provide the Service</li>
            <li>We do not sell your personal information to third parties</li>
            <li>You can delete your data at any time by deleting the spreadsheet or revoking access</li>
          </ul>
        </section>
        
        <section>
          <h2>6. Nutritional Information Disclaimer</h2>
          <h3>6.1 Estimates and Approximations</h3>
          <p>The nutritional information provided by NutriAgent Bot is based on AI-powered analysis and estimation. These estimates are:</p>
          <ul>
            <li>Approximations based on visual recognition and natural language processing</li>
            <li>Not guaranteed to be 100% accurate</li>
            <li>Subject to variations based on preparation methods, ingredient brands, and portion sizes</li>
            <li>Intended for general tracking purposes, not medical or professional dietary advice</li>
          </ul>
          
          <h3>6.2 Not Medical Advice</h3>
          <p>The Service is not intended to provide medical, nutritional, or dietary advice. The nutritional information provided is for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding your diet or nutrition.</p>
        </section>
        
        <section>
          <h2>7. Service Availability and Modifications</h2>
          <h3>7.1 Availability</h3>
          <p>We strive to maintain the Service's availability, but we do not guarantee that the Service will be available at all times. The Service may be unavailable due to:</p>
          <ul>
            <li>Maintenance or updates</li>
            <li>Technical issues</li>
            <li>Third-party service outages (e.g., Telegram, Google APIs)</li>
            <li>Force majeure events</li>
          </ul>
          
          <h3>7.2 Modifications</h3>
          <p>We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice. We may also update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms.</p>
        </section>
        
        <section>
          <h2>8. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUTRIAGENT BOT AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
          <ul>
            <li>Your use or inability to use the Service</li>
            <li>Any inaccuracy or error in nutritional information provided</li>
            <li>Any unauthorized access to or use of our servers or data</li>
            <li>Any interruption or cessation of transmission to or from the Service</li>
            <li>Any bugs, viruses, or other harmful code that may be transmitted through the Service</li>
          </ul>
          
          <p>IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE PAST TWELVE MONTHS, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.</p>
        </section>
        
        <section>
          <h2>9. Intellectual Property</h2>
          <p>The Service, including its original content, features, and functionality, is owned by NutriAgent Bot and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
          <p>You retain ownership of all data you provide to the Service, including messages, images, and nutrition data stored in your Google Sheets.</p>
        </section>
        
        <section>
          <h2>10. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless NutriAgent Bot and its operators from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your use of the Service or violation of these Terms.</p>
        </section>
        
        <section>
          <h2>11. Termination</h2>
          <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.</p>
          <p>Upon termination, your right to use the Service will cease immediately. However, any data stored in your Google Sheets will remain in your possession and control.</p>
        </section>
        
        <section>
          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved in the appropriate courts of competent jurisdiction.</p>
        </section>
        
        <section>
          <h2>13. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us through:</p>
          <ul>
            <li>Telegram: <a href="https://t.me/nutri_agent_bot" target="_blank" rel="noopener noreferrer">@nutri_agent_bot</a></li>
          </ul>
        </section>
        
        <section>
          <h2>14. Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
        </section>
        
        <section>
          <h2>15. Entire Agreement</h2>
          <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and NutriAgent Bot regarding the use of the Service and supersede all prior agreements and understandings.</p>
        </section>
      </div>
      
      <Footer />
    </>
  )
}




