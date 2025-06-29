import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Works' })

export default function Works() {
  return (
    <>
      <div className="animate-slide-up-head divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work Experience
          </h1>
        </div>

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Life Media (PT. SaranaInsan MudaSelaras)
          </h1>
          <h1 className="text-base font-thin italic leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-base sm:leading-10 md:text-base md:leading-14">
            Full Stack Developer (Jan 2024 - Present)
          </h1>
          <p>
            During my time in hospitality technology, I spearheaded the development of a
            comprehensive Android application that revolutionized the guest experience. Built using
            Java, this application served as a central hub for hotel services, room controls, and
            IPTV streaming capabilities. To complement this guest-facing solution, I designed and
            implemented a robust Content Management System (CMS) using PHP and Laravel, which
            empowered hotel staff and administrators to manage IPTV content, schedules, and user
            settings in real-time.
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

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Square Indonesia
          </h1>
          <h1 className="text-base font-thin italic leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-base sm:leading-10 md:text-base md:leading-14">
            Full Stack Developer (Jan 2023 - Present)
          </h1>
          <p>
            My time at Square Indonesia was focused on enhancing user experience and website
            functionality. I designed an intuitive graphical user interface that streamlined user
            interaction and improved overall accessibility. Additionally, I converted mockups into a
            functional landing page using HTML, Javascript, and TailwindCSS.
          </p>
          <p>
            Collaborating closely with UI designers, I redesigned the company profile page,
            fostering a more engaging first impression for visitors. Furthermore, I actively engaged
            with clients to address their needs and optimize the website based on their feedback.
          </p>
        </div>

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Kardusinfo Indonesia
          </h1>
          <h1 className="text-base font-thin italic leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-base sm:leading-10 md:text-base md:leading-14">
            Web Programmer (Apr 2021 – Nov 2022)
          </h1>
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

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Highlights from Freelance & Internship Projects
          </h1>
          <ul className="list-disc break-all">
            <li className="mt-6">
              <span className="font-bold">PT. RIMBA ANANTA VIKASA</span>
              <br />
              <span className="italic">Web Programmer Freelance (Feb 2023 - May 2023)</span>
              <br />
              Collaborated with UI designers to translate mockups into functional frontend code,
              increasing usability by 15%.
            </li>
            <li className="mt-6">
              <span className="font-bold">UNIVERSITY of AMIKOM YOGYAKARTA</span>
              <br />
              <span className="italic">Student Staff UPT Laboratorium (May 2022 - Nov 2022)</span>
              <br />
              Demonstrated proficiency in network configuration and system maintenance, enhancing
              the university's computer lab efficiency.
            </li>
            <li className="mt-6">
              <span className="font-bold">COLLABORATIVE RESEARCH PROGRAMS</span>
              <br />
              <span className="italic">
                Assistant Researcher for Bachelor Thesis (Mar 2021 - Mar 2022)
              </span>
              <br />
              Developed and analyzed a deep learning model for emotion recognition and collaborated
              on research for a thesis project.
            </li>
            <li className="mt-6">
              <span className="font-bold">CRSL</span>
              <br />{' '}
              <span className="italic">Backend Developer Freelance (Jun 2021 - Aug 2021)</span>
              <br />
              Assisted in designing and developing integrated REST APIs for an e-commerce mobile
              application, improving API usability and contributing to efficient database
              development.
            </li>
          </ul>
        </div>
        {/* <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  )
}
