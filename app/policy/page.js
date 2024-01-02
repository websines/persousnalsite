import Link from "next/link";
export default function page() {
  return (
    <main className="bg-white text-black">
      <section className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32 relative">
        <video
          src="/video-main.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">
            Privacy Policy
          </h1>
          <p className="my-4 text-sm font-medium">
            Our Trained Professionals will visit your home once weekly to slice,
            dice, mix and organize 3 meals a day for your family for 5 days of
            the week!
          </p>
          <Link
            href="/menu"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-cyan-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
          >
            View our Menu
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <section className="p-8 md:p-16">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-black">
            Privacy Policy
          </h2>
        </div>
        <span className="p-8 md:p-16 space-y-2">
          <p className="text-lg font-semibold">Purpose</p>

          <p>
            The purpose of this privacy policy (this "Privacy Policy") is to
            inform users of our Site of the following: The personal data we will
            collect; Use of collected data; Who has access to the data
            collected; The rights of Site users; and The Site's cookie policy.
            This Privacy Policy applies in addition to the terms and conditions
            of our Site.
          </p>

          <p className="text-lg font-semibold">Consent</p>

          <p>
            By using our Site users agree that they consent to: The conditions
            set out in this Privacy Policy; and The collection, use, and
            retention of the data listed in this Privacy Policy.
          </p>

          <p className="text-lg font-semibold">Personal Data We Collect</p>

          <p>
            We only collect data that helps us achieve the purpose set out in
            this Privacy Policy. We will not collect any additional data beyond
            the data listed below without notifying you first.
          </p>

          <p className="text-lg font-semibold">Data Collected Automatically</p>

          <p>
            When you visit and use our Site, we may automatically collect and
            store the following information:
            <br />
            Location;
            <br />
            Hardware and software details;
            <br />
            Clicked links; and
            <br />
            Content viewed.
          </p>

          <p className="text-lg font-semibold">
            Data Collected in a Non-Automatic Way
          </p>

          <p>
            We may also collect the following data when you perform certain
            functions on our Site:
            <br />
            First and last name;
            <br />
            Email address; and
            <br />
            Phone number.
            <br />
            This data may be collected using the following methods:
            <br />
            Online Form.
          </p>

          <p className="text-lg font-semibold">How We Use Personal Data</p>

          <p>
            Data collected on our Site will only be used for the purposes
            specified in this Privacy Policy or indicated on the relevant pages
            of our Site. We will not use your data beyond what we disclose in
            this Privacy Policy. The data we collect automatically is used for
            the following purposes: Statistics; and Marketing. The data we
            collect when the user performs certain functions may be used for the
            following purposes: Communication.
          </p>

          <p className="text-lg font-semibold">
            Who We Share Personal Data With
          </p>

          <p>Employees</p>

          <p>
            We may disclose user data to any member of our organization who
            reasonably needs access to user data to achieve the purposes set out
            in this Privacy Policy.
          </p>

          <p className="text-lg font-semibold">Other Disclosures</p>

          <p>
            We will not sell or share your data with other third parties, except
            in the following cases: If the law requires it; If it is required
            for any legal proceeding; To prove or protect our legal rights; and
            To buyers or potential buyers of this company in the event that we
            seek to sell the company. If you follow hyperlinks from our Site to
            another Site, please note that we are not responsible for and have
            no control over their privacy policies and practices.
          </p>

          <p className="text-lg font-semibold">
            How Long We Store Personal Data
          </p>

          <p>
            User data will be stored until the purpose the data was collected
            for has been achieved. You will be notified if your data is kept for
            longer than this period.
          </p>

          <p className="text-lg font-semibold">
            How We Protect Your Personal Data
          </p>

          <p>
            In order to protect your security, we use the strongest available
            browser encryption and store all of our data on servers in secure
            facilities. All data is only accessible to our employees. Our
            employees are bound by strict confidentiality agreements and a
            breach of this agreement would result in the employee's termination.
            While we take all reasonable precautions to ensure that user data is
            secure and that users are protected, there always remains the risk
            of harm. The Internet as a whole can be insecure at times and
            therefore we are unable to guarantee the security of user data
            beyond what is reasonably practical.
          </p>

          <p className="text-lg font-semibold">Children</p>

          <p>
            We do not knowingly collect or use personal data from children under
            13 years of age. If we learn that we have collected personal data
            from a child under 13 years of age, the personal data will be
            deleted as soon as possible. If a child under 13 years of age has
            provided us with personal data their parent or guardian may contact
            our privacy officer.
          </p>

          <p className="text-lg font-semibold">
            How to Access, Modify, Delete, or Challenge the Data Collected
          </p>

          <p>
            If you would like to know if we have collected your personal data,
            how we have used your personal data, if we have disclosed your
            personal data and to who we disclosed your personal data, or if you
            would like your data to be deleted or modified in any way, please
            contact our privacy officer here:
          </p>

          <p className="text-lg font-semibold">
            How to Opt-Out of Data Collection, Use or Disclosure
          </p>

          <p>
            In addition to the method(s) described in the How to Access, Modify,
            Delete, or Challenge the Data Collected section, we provide the
            following specific opt-out methods for the forms of collection, use,
            or disclosure of your personal data specified below: You can opt-out
            of the use of your personal data for marketing emails and phone
            calls. You can opt-out by unsubscribe to emails or text STOP to end
            SMS messaging.
          </p>

          <p className="text-lg font-semibold">Cookie Policy</p>

          <p>
            A cookie is a small file, stored on a user's hard drive by a
            website. Its purpose is to collect data relating to the user's
            browsing habits. You can choose to be notified each time a cookie is
            transmitted. You can also choose to disable cookies entirely in your
            internet browser, but this may decrease the quality of your user
            experience. We use the following types of cookies on our Site:
            Analytical cookies Analytical cookies allow us to improve the design
            and functionality of our Site by collecting data on how you access
            our Site, for example data on the content you access, how long you
            stay on our Site, etc; Targeting cookies Targeting cookies collect
            data on how you use the Site and your preferences. This allows us to
            personalize the information you see on our Site for you; and
            Third-Party Cookies Third-party cookies are created by a website
            other than ours. We may use third-party cookies to achieve the
            following purposes: Monitor user preferences to tailor
            advertisements around their interests.
          </p>

          <p className="text-lg font-semibold">Modifications</p>

          <p>
            This Privacy Policy may be amended from time to time in order to
            maintain compliance with the law and to reflect any changes to our
            data collection process. When we amend this Privacy Policy we will
            update the "Effective Date" at the top of this Privacy Policy. We
            recommend that our users periodically review our Privacy Policy to
            ensure that they are notified of any updates. If necessary, we may
            notify users by email of changes to this Privacy Policy.
          </p>

          <p className="text-lg font-semibold">Contact Information</p>

          <p>
            If you have any questions, concerns or complaints, you can contact
            our privacy officer, Brian Jackson, at: brian@persousnalchef.com
          </p>
        </span>
      </section>
    </main>
  );
}
