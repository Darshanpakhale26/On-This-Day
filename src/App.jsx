import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";  // ✅ Import Footer

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />  {/* ✅ Add Footer */}
    </div>
  );
}

export default App;
