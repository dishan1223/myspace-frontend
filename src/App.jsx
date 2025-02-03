import Navbar from "./components/Navbar/Navbar";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <div className="w-full h-dvh flex flex-col gap-4 items-center">
      <Navbar />
      <div className="w-5xl h-dvh m-auto">
        <div className="w-full flex justify-center">
          <h1 className="text-3xl font-semibold">Welcome, User</h1>
        </div>
        <PostContainer />
      </div>
    </div>
  )
}

export default App;
