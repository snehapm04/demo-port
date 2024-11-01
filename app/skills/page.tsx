export default function SkillsPage() {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Skills Proficiency</h1>
        {/* Replace with actual skill names and levels */}
        <div>
        <label>Python</label>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
          <label>C</label>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>

          <label>JavaScript</label>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    );
  }
  