export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-green-400">6S GreenTech</h2>
            <p className="text-sm text-gray-400 mt-2">Empowering modern farming with advanced machinery.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Terms</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-800 pt-8">
          &copy; {new Date().getFullYear()} 6S GreenTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
