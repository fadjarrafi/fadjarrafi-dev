import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Works' })

export default function Works() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      {/* Page Title */}
      <div className="mb-16">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Work Experience
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          A journey through my professional development as a full-stack developer, from internships
          to leading comprehensive projects in hospitality technology and digital marketing.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {/* Life Media */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Life Media (PT. SaranaInsan MudaSelaras)
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack Developer • Jan 2024 - Present
            </p>
          </div>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              During my time in hospitality technology, I spearheaded the development of a
              comprehensive Android application that revolutionized the guest experience. Built
              using Java, this application served as a central hub for hotel services, room
              controls, and IPTV streaming capabilities. To complement this guest-facing solution, I
              designed and implemented a robust Content Management System (CMS) using PHP and
              Laravel, which empowered hotel staff and administrators to manage IPTV content,
              schedules, and user settings in real-time.
            </p>
            <p>
              A key achievement was the seamless integration of APIs that facilitated fluid
              communication between the Android application, the CMS, and the company's backend
              infrastructure, ensuring instantaneous updates and data synchronization. Beyond
              development, I took charge of maintaining and optimizing internal systems, with a
              particular focus on network monitoring tools, which was crucial in delivering reliable
              service across both internal operations and customer-facing products.
            </p>
          </div>
        </div>

        {/* Square Indonesia */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Square Indonesia
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack Developer • Jan 2023 - Present
            </p>
          </div>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              My time at Square Indonesia was focused on enhancing user experience and website
              functionality. I designed an intuitive graphical user interface that streamlined user
              interaction and improved overall accessibility. Additionally, I converted mockups into
              a functional landing page using HTML, Javascript, and TailwindCSS.
            </p>
            <p>
              Collaborating closely with UI designers, I redesigned the company profile page,
              fostering a more engaging first impression for visitors. Furthermore, I actively
              engaged with clients to address their needs and optimize the website based on their
              feedback.
            </p>
          </div>
        </div>

        {/* Kardusinfo Indonesia */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Kardusinfo Indonesia
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Web Programmer • Apr 2021 – Nov 2022
            </p>
          </div>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              At Kardusinfo Indonesia, I played a key role in building robust and user-centric web
              applications. I designed and implemented an efficient backend system using the Laravel
              framework, catering specifically to user requirements.
            </p>
            <p>
              I also contributed to the design and development of databases using MySQL, ensuring
              seamless integration with frontend systems. Through collaboration with other teams, I
              helped define user features and requirements, leading to a significant reduction in
              feature gaps. Additionally, I executed end-to-end REST API development, including
              integration, documentation, and testing using PostmanAPI.
            </p>
          </div>
        </div>
      </div>

      {/* Freelance & Other Projects */}
      <div className="mt-16">
        <h2 className="mb-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          Freelance & Other Projects
        </h2>

        <div className="space-y-8">
          {/* PT. RIMBA ANANTA VIKASA */}
          <div>
            <div className="mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                PT. RIMBA ANANTA VIKASA
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Web Programmer Freelance • Feb 2023 - May 2023
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Collaborated with UI designers to translate mockups into functional frontend code,
              increasing usability by 15%.
            </p>
          </div>

          {/* University of AMIKOM */}
          <div>
            <div className="mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                University of AMIKOM Yogyakarta
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Student Staff UPT Laboratorium • May 2022 - Nov 2022
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Demonstrated proficiency in network configuration and system maintenance, enhancing
              the university's computer lab efficiency.
            </p>
          </div>

          {/* Collaborative Research */}
          <div>
            <div className="mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Collaborative Research Programs
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Assistant Researcher for Bachelor Thesis • Mar 2021 - Mar 2022
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Developed and analyzed a deep learning model for emotion recognition and collaborated
              on research for a thesis project.
            </p>
          </div>

          {/* CRSL */}
          <div>
            <div className="mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">CRSL</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Backend Developer Freelance • Jun 2021 - Aug 2021
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Assisted in designing and developing integrated REST APIs for an e-commerce mobile
              application, improving API usability and contributing to efficient database
              development.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Interested in working together?{' '}
          <a
            href="mailto:contact@fadjar.dev"
            className="underline transition-colors hover:text-lime-500 dark:hover:text-lime-400"
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </div>
  )
}
