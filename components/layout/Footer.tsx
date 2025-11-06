// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 font-medium">
              © {new Date().getFullYear()} Shireesh - Doc Tutor Bot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
