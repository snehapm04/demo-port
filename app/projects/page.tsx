export default function ProjectsPage() {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div>
          <h2>Diabetes Diagnostic Tool</h2>
          <h3>   May 2024</h3>
          <p>Developed a simple Django-based Diabetes Diagnostic tool with an intuitive HTML interface. This application efficiently provides diagnostic results along with explanations to enhance user understanding.</p>
          <a href="https://github.com/snehapm04/diabetes-pred" target="_blank" className="text-blue-400">GitHub Link</a>
        </div>
        <div>
        <h3>Blood donation database management system</h3>
        <p>   Feb 2022</p>
        <p>A Tkinter-based desktop application that connects to a MySQL database to manage blood donor information. Users can search for donors by blood group, sign up as a donor, or log in to manage their account.</p>
        <a href="https://github.com/snehapm04/Blood-donation-mgt-system" target="_blank" className="text-blue-400">GitHub Link</a>
      </div>
      </div>
    );
  }
  
  
  
  
