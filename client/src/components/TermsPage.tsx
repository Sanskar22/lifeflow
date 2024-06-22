
import Footer from "./Footer"
import { useState } from "react";
import Header_Terms_Donate from "./Header_Terms_Donate";

function TermsPage() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <Header_Terms_Donate />
      <main className="p-4 mt-12 mb-12">
        <section className="terms-section max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="mb-5 text-3xl text-red-600">Terms and Conditions</h2>
          <p className="mb-6">
            Welcome to LifeFlow. These terms and conditions outline the rules and
            regulations for the use of our website.
          </p>
          <div className="accordion border-t border-gray-300">
            {accordionItems.map((item, index) => (
              <div key={index} className="accordion-item border-b border-gray-300">
                <h5
                  className={`accordion-title cursor-pointer p-4 bg-gray-100 text-gray-800 font-bold relative transition-colors ${activeIndex === index ? "bg-gray-200" : "bg-gray-100"
                    }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="absolute right-4 text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </h5>
                <div
                  className={`accordion-content ${activeIndex === index ? "block" : "hidden"
                    } p-4 bg-white`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const accordionItems: { title: string; content: JSX.Element }[] = [
  {
    title: "1. Introduction",
    content: (
      <p>
        By accessing this website, you agree to be bound by these terms and
        conditions. If you disagree with any part of these terms, please do not
        use our website.
      </p>
    ),
  },
  {
    title: "2. Intellectual Property Rights",
    content: (
      <p>
        Unless otherwise stated, LifeFlow and/or its licensors own the
        intellectual property rights for all material on this website. All
        intellectual property rights are reserved.
      </p>
    ),
  },
  {
    title: "3. User Content",
    content: (
      <>
        <p>
          In these terms and conditions, “Your Content” shall mean any audio,
          video, text, images or other material you choose to display on this
          website. By displaying Your Content, you grant LifeFlow a
          non-exclusive, worldwide irrevocable, sub-licensable license to use,
          reproduce, adapt, publish, translate, and distribute it in any and
          all media.
        </p>
        <p>
          Your Content must be your own and must not be infringing on any third
          party’s rights. LifeFlow reserves the right to remove any of Your
          Content from this website at any time without notice.
        </p>
      </>
    ),
  },
  {
    title: "4. No Warranties",
    content: (
      <p>
        This website is provided “as is,” with all faults, and LifeFlow makes no
        express or implied representations or warranties, of any kind related to
        this website or the materials contained on this website. Additionally,
        nothing contained on this website shall be construed as providing
        consult or advice to you.
      </p>
    ),
  },
  {
    title: "5. Limitation of Liability",
    content: (
      <p>
        In no event shall LifeFlow, nor any of its officers, directors and
        employees, be held liable for anything arising out of or in any way
        connected with your use of this website, whether such liability is under
        contract, tort or otherwise, and LifeFlow, including its officers,
        directors and employees shall not be held liable for any indirect,
        consequential or special liability arising out of or in any way related
        to your use of this website.
      </p>
    ),
  },
  {
    title: "6. Indemnification",
    content: (
      <p>
        You hereby indemnify to the fullest extent LifeFlow from and against any
        and/or all liabilities, costs, demands, causes of action, damages and
        expenses arising in any way related to your breach of any of the
        provisions of these Terms.
      </p>
    ),
  },
  {
    title: "7. Severability",
    content: (
      <p>
        If any provision of these Terms is found to be invalid under any
        applicable law, such provisions shall be deleted without affecting the
        remaining provisions herein.
      </p>
    ),
  },
  {
    title: "8. Variation of Terms",
    content: (
      <p>
        LifeFlow is permitted to revise these Terms at any time as it sees fit,
        and by using this website you are expected to review these Terms on a
        regular basis.
      </p>
    ),
  },
  {
    title: "9. Assignment",
    content: (
      <p>
        The LifeFlow is allowed to assign, transfer, and subcontract its rights
        and/or obligations under these Terms without any notification. However,
        you are not allowed to assign, transfer, or subcontract any of your
        rights and/or obligations under these Terms.
      </p>
    ),
  },
  {
    title: "10. Entire Agreement",
    content: (
      <p>
        These Terms constitute the entire agreement between LifeFlow and you in
        relation to your use of this website, and supersede all prior agreements
        and understandings.
      </p>
    ),
  },
  {
    title: "11. Governing Law & Jurisdiction",
    content: (
      <p>
        These Terms will be governed by and interpreted in accordance with the
        laws of the State of [Your State], and you submit to the non-exclusive
        jurisdiction of the state and federal courts located in [Your State] for
        the resolution of any disputes.
      </p>
    ),
  },
]

export default TermsPage
