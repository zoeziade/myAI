import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Chatbot
        </Link>
        <h1 className="text-3xl font-bold">AI Chatbot</h1>
        <h2 className="text-2xl font-semibold">
          Terms of Use and Disclaimer for AI Chatbot
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-gray-700">
            <span className="font-semibold">Acceptance of Terms:</span> By
            accessing, using, or interacting with the AI chatbot (hereinafter
            referred to as "Stewie") provided by UNC (Zoe Ziade), you acknowledge
            that you have read, understood, and agree to be legally bound by these
            Terms of Use. If you do not agree with any part of these terms, you must
            immediately discontinue the use of the Chatbot. Use of the Chatbot constitutes
            your agreement to these Terms and any modifications that may be made to them
            in the future.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">No Warranties:</span> The Chatbot is provided
            "as is" and "as available" without any warranties of any kind, whether express,
            implied, or statutory. Zoe Ziade makes no representations or warranties regarding
            the accuracy, reliability, completeness, timeliness, or suitability of the
            Chatbot for any purpose. All warranties, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement, are expressly disclaimed to the fullest extent permitted by
            applicable law. You acknowledge that the Chatbot may contain errors or inaccuracies
            and agree to use it at your own risk.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Guarantees on Availability or Support:
            </span>{" "}
            Zoe Ziade does not guarantee that the Chatbot will be continuously available,
            uninterrupted, secure, or free from errors or omissions. The availability of
            the Chatbot may be subject to limitations, delays, and other technical issues,
            and no assurances are made regarding its uptime or performance. Zoe Ziade is
            not obligated to provide any technical support, maintenance, updates, or
            enhancements to the Chatbot, and users are solely responsible for troubleshooting
            any issues that may arise.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Limitation of Liability:</span> To the fullest
            extent permitted by law, Zoe Ziade shall not be liable for any direct, indirect,
            incidental, consequential, special, exemplary, or punitive damages arising out of
            or related to your use or inability to use the Chatbot. This includes, but is not
            limited to, loss of profits, data, business opportunities, goodwill, or any other
            intangible losses, whether or not such damages were foreseeable or whether Zoe
            Ziade has been advised of the possibility of such damages. In no event shall Zoe
            Ziade's total liability exceed the amount you have paid for the use of the Chatbot,
            if any.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Legal, Financial, or Professional Advice:
            </span>{" "}
            The Chatbot is intended solely for informational and general purposes and does not
            constitute, nor should it be construed as, legal, financial, medical, professional,
            or any other type of advice. The information provided by the Chatbot is generated
            based on algorithms and data but is not guaranteed to be accurate, comprehensive,
            or applicable to your specific circumstances. You should seek professional guidance
            from appropriate experts or specialists before making any decisions based on the
            Chatbot's output. Any reliance on the information provided by the Chatbot is at your
            own risk.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Responsibility:</span> You are solely
            responsible for your interactions with the Chatbot and any actions, decisions, or
            outcomes resulting from its use. Zoe Ziade is not liable for any damages, losses,
            or negative consequences arising from the use or misuse of the Chatbot. You are
            advised to verify the information provided and exercise caution when making any
            decisions based on the Chatbot’s responses.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Data Security and Privacy:</span> By using the
            Chatbot, you acknowledge that any data transmitted to or through the Chatbot is not
            guaranteed to be secured, confidential, or protected from unauthorized access. Do
            not share or transmit any sensitive, confidential, or personally identifiable
            information through the Chatbot. Conversations with the Chatbot are considered to be
            public and may be processed, stored, or shared by third parties. Zoe Ziade makes no
            guarantees regarding the privacy or security of data shared through the Chatbot, and
            you agree to assume full responsibility for any risks associated with sharing
            information.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Indemnification:</span> You agree to indemnify,
            defend, and hold harmless Zoe Ziade, its affiliates, contractors, and partners from
            and against any claims, liabilities, damages, losses, and expenses, including
            reasonable attorney’s fees, arising out of or related to your use of the Chatbot,
            your violation of these Terms of Use, or any third-party claims arising from your
            actions in connection with the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Modifications to Terms:</span> Zoe Ziade reserves
            the right to modify, update, or revise these Terms of Use at any time, without
            prior notice. Any changes made to the Terms of Use will be effective immediately
            upon posting, and your continued use of the Chatbot after such modifications
            constitutes your acceptance of the updated terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Governing Law:</span> These Terms of Use shall be
            governed by and construed in accordance with the laws of the applicable jurisdiction
            without regard to its conflict of law principles. Any legal disputes related to the
            Chatbot or these Terms of Use shall be resolved in the appropriate court located within
            the jurisdiction of Zoe Ziade's legal residence or business operations.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Contact Information:</span> If you have any questions,
            concerns, or requests regarding these Terms of Use, please contact Zoe Ziade at
            zoeziade@gmail.com.
          </li>
        </ol>
      </div>
    </div>
  );
}

