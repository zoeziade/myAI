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
        <h1 className="text-3xl font-bold">Personal AI Chatbot</h1>
        <h2 className="text-2xl font-semibold">Terms of Use and Disclaimer</h2>

        <p className="text-gray-700">
          The following terms govern your access to and use of this AI chatbot,
          a personal artificial intelligence tool provided for your convenience.
          By using the chatbot, you agree to these terms. If you do not agree,
          please refrain from using the service.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">General Information</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-gray-700">
              <span className="font-semibold">Service and Purpose:</span> This
              chatbot is designed to assist users with a range of inquiries and
              tasks. It is offered for personal use and is not guaranteed to
              produce accurate or complete results.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Third-Party Involvement:</span>{" "}
              The chatbot may rely on third-party services to function.
              Accordingly, your inputs might be processed or stored by external
              systems, and complete confidentiality and security cannot be
              assured.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">No Guarantee of Accuracy:</span>{" "}
              While efforts are made to offer helpful responses, the chatbot may
              occasionally generate inaccurate, incomplete, or outdated content.
              You are encouraged to verify any information independently.
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Liability</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-gray-700">
              <span className="font-semibold">Use at Your Own Risk:</span> The
              AI chatbot is provided on an "as-is" and "as-available" basis. To
              the fullest extent permitted by law:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                <li>
                  All warranties, express or implied, including those of
                  merchantability or fitness for a particular purpose, are
                  disclaimed.
                </li>
                <li>
                  The owner is not liable for any errors, inaccuracies, or
                  omissions in the information provided.
                </li>
              </ul>
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">No Liability for Damages:</span>{" "}
              Under no circumstance shall the owner or associated parties be
              liable for any direct, indirect, incidental, consequential, or
              punitive damages arising from your use of the chatbot.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">
                Modification or Discontinuation:
              </span>{" "}
              The owner reserves the right to modify, suspend, or discontinue
              the chatbot’s functionalities at any time without prior notice.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Future Fees:</span> Although the
              chatbot is currently available free of charge, the owner may, in
              the future, institute fees for its use.
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">User Responsibilities</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-gray-700">
              <span className="font-semibold">Eligibility:</span> Use of the
              chatbot is restricted to individuals aged 18 or older.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Prohibited Conduct:</span> By
              using the chatbot, you agree not to:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                <li>
                  Transmit or post content that is defamatory, offensive,
                  threatening, or otherwise inappropriate.
                </li>
                <li>
                  Engage in any unlawful or unethical activities using the
                  chatbot.
                </li>
                <li>
                  Attempt to compromise the security or functionality of the
                  service.
                </li>
                <li>
                  Reverse engineer, copy, or extract the underlying code or
                  structure of the chatbot without authorization.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Data Privacy and Security</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-gray-700">
              <span className="font-semibold">No Privacy Guarantee:</span> This
              AI chatbot does not guarantee complete privacy or security. Your
              interactions may be recorded or processed to improve the service.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Public Nature of Data:</span>{" "}
              Information you provide through the chatbot may not remain
              confidential.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Data Transmission:</span> Inputs
              to the chatbot may be transmitted and processed by external
              third-party services.
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Content Ownership and Use</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-gray-700">
              <span className="font-semibold">Submission License:</span> By
              using the chatbot, you grant the owner a non-exclusive,
              irrevocable, worldwide, royalty-free license to use, modify, and
              distribute any content you provide.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">Improvement and Research:</span>{" "}
              The owner reserves the right to use both your submissions and the
              generated outputs to enhance the chatbot’s functionality,
              including for research or commercial purposes.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold">No Claim to Benefits:</span> You
              agree that you have no right to any profits or benefits that might
              arise from the use or distribution of your provided content.
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Indemnification</h3>
          <p className="text-gray-700">
            By using the chatbot, you agree to indemnify and hold harmless the
            owner and any related parties from any claims, damages, losses, or
            liabilities arising out of your use of the service or breach of
            these terms.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Governing Law and Jurisdiction
          </h3>
          <p className="text-gray-700">
            These terms are governed by and construed in accordance with
            applicable laws. Any disputes arising in connection with these terms
            shall be subject to the exclusive jurisdiction of the appropriate
            courts.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Acceptance of Terms</h3>
          <p className="text-gray-700">
            By using the AI chatbot, you confirm that you have read, understood,
            and agreed to these Terms of Use and Disclaimer. If you do not agree
            with any part of these terms, please discontinue use of the chatbot.
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>Last Updated: January 22, 2025</p>
        </div>
      </div>
    </div>
  );
}
