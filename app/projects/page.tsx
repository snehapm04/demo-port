export default function ProjectsPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Projects</h1>

      {/* Diabetes Diagnostic Tool */}
      <div className="flex space-x-6 items-center">
        <div className="flex-shrink-0 w-48">
          <a
            href="https://github.com/snehapm04/diabetes-pred"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src="/diabetes.jpg"
              alt="Diabetes Diagnostic Tool"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Diabetes Diagnostic Tool</h2>
          <h3 className="text-gray-500">May 2024</h3>
          <p>
            Developed a simple Django-based Diabetes Diagnostic tool with an intuitive
            HTML interface. This application efficiently provides diagnostic results
            along with explanations to enhance user understanding.
          </p>
          
        </div>
      </div>

      {/* Blood Donation Management System */}
      <div className="flex space-x-6 items-center">
        <div className="flex-shrink-0 w-48">
          <a
            href="https://github.com/snehapm04/Blood-donation-mgt-system"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src="/blood.jpg"
              alt="Blood Donation Management System"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Blood Donation Database Management System</h2>
          <h3 className="text-gray-500">Feb 2022</h3>
          <p>
            A Tkinter-based desktop application that connects to a MySQL database to
            manage blood donor information. Users can search for donors by blood group,
            sign up as a donor, or log in to manage their account.
          </p>
          
        </div>
      </div>
    </div>
  );
}

  
  
  
  
