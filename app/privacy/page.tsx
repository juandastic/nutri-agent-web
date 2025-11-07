import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - NutriAgent Bot',
  description: 'Privacy Policy for NutriAgent Bot - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <div className="legal-page">
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1>Privacy Policy</h1>
        
        <p className="last-updated">Last Updated: November 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>NutriAgent Bot ("we," "us," or "our") is a personal project operated by an individual developer (the "Operator"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Telegram bot service (the "Service").</p>
          <p>By using NutriAgent Bot, you consent to the data practices described in this Privacy Policy. Please read this policy carefully to understand our practices regarding your personal information.</p>
        </section>
        
        <section>
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide</h3>
          <p>When you use NutriAgent Bot, we collect the following types of information:</p>
          <ul>
            <li><strong>Telegram Messages:</strong> Text messages you send to the bot describing your meals, snacks, or nutrition-related questions</li>
            <li><strong>Images:</strong> Photos of meals you send to the bot for image recognition and nutritional analysis</li>
            <li><strong>Telegram User Information:</strong> Your Telegram user ID, username (if available), and basic profile information necessary to identify your account</li>
            <li><strong>Google Account Information:</strong> When you connect your Google account via OAuth, we receive:
              <ul>
                <li>Your Google account email address</li>
                <li>Basic profile information (name, if available)</li>
                <li>Access tokens to create and manage Google Sheets in your Google Drive</li>
              </ul>
            </li>
          </ul>
          
          <h3>2.2 Automatically Collected Information</h3>
          <p>We may automatically collect certain information when you use the Service:</p>
          <ul>
            <li>Usage data and interaction logs (e.g., timestamps, message types)</li>
            <li>Technical information about your device and Telegram client</li>
            <li>Error logs and diagnostic information for troubleshooting</li>
          </ul>
          
          <h3>2.3 Information Stored in Google Sheets</h3>
          <p>All nutrition data derived from your messages and images is stored in Google Sheets that we create in your Google Drive. This data includes:</p>
          <ul>
            <li>Meal descriptions</li>
            <li>Estimated nutritional information (calories, macronutrients, etc.)</li>
            <li>Timestamps of meals</li>
            <li>Any additional information you provide through conversation</li>
          </ul>
          <p><strong>Important:</strong> This data is stored in your own Google Sheets that you own and control. We access this data only to write new entries when you interact with the bot.</p>
        </section>
        
        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          
          <h3>3.1 Service Provision</h3>
          <ul>
            <li>To process your messages and images and provide nutritional information</li>
            <li>To create and update your Google Sheets spreadsheet with nutrition data</li>
            <li>To maintain and improve the Service's functionality</li>
            <li>To respond to your questions and provide customer support</li>
          </ul>
          
          <h3>3.2 AI Processing</h3>
          <p>Your messages and images are processed using AI and machine learning technologies to:</p>
          <ul>
            <li>Recognize ingredients from images</li>
            <li>Extract nutritional information from text descriptions</li>
            <li>Estimate calorie and macronutrient content</li>
            <li>Understand natural language queries about nutrition</li>
          </ul>
          <p>This processing may involve sending your messages and images to third-party AI service providers (such as OpenAI, Google AI, or similar services) for analysis. These providers are bound by their own privacy policies and terms of service.</p>
          <p>We do not use your content to train our own machine learning models. Where available, we configure third-party providers so that content processed via their APIs is not used to train their models beyond what is necessary to provide the Service.</p>
          
          <h3>3.3 Service Improvement</h3>
          <ul>
            <li>To analyze usage patterns and improve the Service's accuracy</li>
            <li>To fix bugs and technical issues</li>
            <li>To develop new features and functionality</li>
          </ul>
          
          <h3>3.4 Communication</h3>
          <ul>
            <li>To send you important updates about the Service</li>
            <li>To respond to your inquiries and provide support</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Google OAuth Integration</h2>
          
          <h3>4.1 OAuth Scopes</h3>
          <p>When you connect your Google account, NutriAgent Bot requests the following OAuth 2.0 scopes:</p>
          <ul>
            <li><strong>https://www.googleapis.com/auth/spreadsheets</strong> - To create and update Google Sheets spreadsheets</li>
            <li><strong>https://www.googleapis.com/auth/drive.file</strong> - To create files in your Google Drive</li>
          </ul>
          
          <h3>4.2 What We Access</h3>
          <p>We only access:</p>
          <ul>
            <li>The Google Sheets spreadsheets that we create for you in your Google Drive</li>
            <li>Basic profile information (email, name) necessary to identify your account</li>
          </ul>
          
          <h3>4.3 What We Do NOT Access</h3>
          <p>We do NOT access, read, or modify:</p>
          <ul>
            <li>Any other files or folders in your Google Drive</li>
            <li>Your Gmail messages</li>
            <li>Your Google Calendar</li>
            <li>Any other Google services or data</li>
          </ul>
          
          <h3>4.4 Data Storage Location</h3>
          <p>All nutrition data is stored in Google Sheets that are created in your own Google Drive. This means:</p>
          <ul>
            <li>You own and control the data</li>
            <li>The data is stored on Google's servers, subject to Google's terms and privacy policies</li>
            <li>You can access, edit, or delete the data at any time</li>
            <li>You can revoke our access at any time through your Google account settings</li>
          </ul>
        </section>
        
        <section>
          <h2>5. Data Sharing and Disclosure</h2>
          
          <h3>5.1 Third-Party Service Providers</h3>
          <p>We may share your information with third-party service providers who perform services on our behalf:</p>
          <ul>
            <li><strong>AI Service Providers:</strong> We may send your messages and images to AI service providers (such as OpenAI, Google AI, or similar) for processing and analysis</li>
            <li><strong>Cloud Infrastructure:</strong> Our Service may use cloud hosting providers to store and process data</li>
            <li><strong>Telegram:</strong> We receive messages and information through Telegram's platform, which is subject to Telegram's privacy policy</li>
          </ul>
          <p>These service providers are contractually obligated to protect your information and use it only for the purposes we specify.</p>
          
          <h3>5.2 Legal Requirements</h3>
          <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</p>
          
          <h3>5.3 Project Transfer</h3>
          <p>If this personal project is ever transferred to another maintainer, your information may be transferred as part of that change. We will notify you of any such change in ownership or control of your personal information.</p>
          
          <h3>5.4 What We Do NOT Share</h3>
          <p>We do NOT:</p>
          <ul>
            <li>Sell your personal information to third parties</li>
            <li>Share your data with advertisers</li>
            <li>Use your data for marketing purposes without your consent</li>
          </ul>
        </section>
        
        <section>
          <h2>6. Data Retention</h2>
          
          <h3>6.1 Messages and Images</h3>
          <p>We may temporarily retain your messages and images only for:</p>
          <ul>
            <li>Processing and providing the Service</li>
            <li>Troubleshooting and support purposes</li>
          </ul>
          <p>Any transient copies are deleted after the above purposes are fulfilled; in any case, we aim to delete or anonymize such data within 90 days of processing.</p>
          
          <h3>6.2 Google Sheets Data</h3>
          <p>Nutrition data stored in your Google Sheets remains in your Google Drive until you choose to delete it. We do not delete this data unless you explicitly request it or revoke access to your Google account.</p>
          
          <h3>6.3 Account Information</h3>
          <p>We retain your Telegram user ID and basic account information as long as you use the Service. You can request deletion of your account information by contacting us.</p>
        </section>
        
        <section>
          <h2>7. Your Rights and Choices</h2>
          
          <h3>7.1 Access to Your Data</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access all nutrition data stored in your Google Sheets at any time</li>
            <li>Request a copy of any personal information we hold about you</li>
            <li>Review the data we have collected about you</li>
          </ul>
          
          <h3>7.2 Data Correction and Deletion</h3>
          <p>You can:</p>
          <ul>
            <li>Edit or delete any data in your Google Sheets directly</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your account and associated data</li>
          </ul>
          
          <h3>7.3 Revoking Access</h3>
          <p>You can revoke NutriAgent Bot's access to your Google account at any time by:</p>
          <ul>
            <li>Visiting your Google Account settings: https://myaccount.google.com/permissions</li>
            <li>Removing NutriAgent Bot from your connected apps</li>
          </ul>
          <p>Revoking access will prevent the Service from updating your spreadsheet, but your existing data will remain in your Google Sheets.</p>
          
          <h3>7.4 Opting Out</h3>
          <p>You can stop using the Service at any time by:</p>
          <ul>
            <li>Simply not sending messages to the bot</li>
            <li>Revoking Google account access</li>
            <li>Requesting account deletion</li>
          </ul>
          
          <h3>7.5 Data Portability</h3>
          <p>Since all your nutrition data is stored in your own Google Sheets, you have full control and can export it at any time using Google Sheets' built-in export functionality.</p>
        </section>
        
        <section>
          <h2>8. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your information:</p>
          <ul>
            <li>Secure OAuth 2.0 authentication for Google account access</li>
            <li>Encryption of data in transit</li>
            <li>Secure storage of authentication tokens</li>
            <li>Regular security assessments and updates</li>
            <li>Limited access to personal information on a need-to-know basis</li>
          </ul>
          <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
        </section>
        
        <section>
          <h2>9. Children's Privacy</h2>
          <p>NutriAgent Bot is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
        </section>
        
        <section>
          <h2>10. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.</p>
          <p>By using the Service, you consent to the transfer of your information to these countries. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>
        </section>
        
        <section>
          <h2>11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
          <ul>
            <li>Posting the new Privacy Policy on this page</li>
            <li>Updating the "Last Updated" date at the top of this Privacy Policy</li>
            <li>Sending you a notification through the Telegram bot (if significant changes occur)</li>
          </ul>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </section>
        
        <section>
          <h2>12. Third-Party Services</h2>
          <p>Our Service integrates with the following third-party services:</p>
          
          <h3>12.1 Telegram</h3>
          <p>We use Telegram as the platform for our bot. Your use of Telegram is subject to Telegram's Terms of Service and Privacy Policy. We receive messages and user information through Telegram's API.</p>
          
          <h3>12.2 Google Services</h3>
          <p>We use Google OAuth, Google Sheets API, and Google Drive API. Your use of these services is subject to Google's Terms of Service and Privacy Policy. Data stored in Google Sheets is subject to Google's data protection practices.</p>
          
          <h3>12.3 AI Service Providers</h3>
          <p>We may use third-party AI service providers for image recognition and natural language processing. These providers have their own privacy policies governing how they handle your data.</p>
        </section>
        
        <section>
          <h2>13. Your California Privacy Rights</h2>
          <p>If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA), including:</p>
          <ul>
            <li>The right to know what personal information we collect about you</li>
            <li>The right to delete your personal information</li>
            <li>The right to opt-out of the sale of your personal information (we do not sell your information)</li>
            <li>The right to non-discrimination for exercising your privacy rights</li>
          </ul>
          <p>To exercise these rights, please contact us through the methods provided in the "Contact Us" section.</p>
        </section>
        
        <section>
          <h2>14. European Privacy Rights (GDPR)</h2>
          <p>If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR), including:</p>
          <ul>
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure ("right to be forgotten")</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, please contact us through the methods provided in the "Contact Us" section.</p>
        </section>
        
        <section>
          <h2>15. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <ul>
            <li>Telegram: <a href="https://t.me/nutri_agent_bot" target="_blank" rel="noopener noreferrer">@nutri_agent_bot</a></li>
          </ul>
          <p>We will respond to your inquiry within a reasonable timeframe.</p>
        </section>
        
        <section>
          <h2>16. Consent</h2>
          <p>By using NutriAgent Bot, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Service.</p>
        </section>
      </div>
      
      <Footer />
    </>
  )
}




