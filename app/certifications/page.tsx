"use client"; // Keep this line to enable client-side rendering
import Image from "next/image"; // Import Image from Next.js if you're using it

export default function CertificationPage() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      {/* Certification Item */}
      <div className="flex items-center mb-8"> {/* Flexbox for alignment */}
        <div className="w-1/3"> {/* Thumbnail section */}
          <Image
            src="/path/to/your/certificate-image.jpg" // Replace with your actual image path
            alt="Certificate Thumbnail"
            width={150} // Set appropriate width
            height={100} // Set appropriate height
            className="rounded-lg shadow-lg" // Add styling
          />
        </div>
        <div className="w-2/3 pl-4"> {/* Description section */}
          <h3 className="text-2xl font-bold text-cyan">Certificate Title</h3>
          <p className="mt-2 text-lg">
            This certificate was awarded for completing [Course/Program Name] at [Institution/Organization Name]. 
            It signifies proficiency in [Skills/Knowledge Acquired]. 
            Date of completion: [Completion Date].
          </p>
        </div>
      </div>

      {/* Repeat the above structure for additional certificates */}
    </div>
  );
}
