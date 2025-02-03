import Layout from "./Layouts/Layout";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-semibold">Welcome, User</h1>
      </div>
      <PostContainer />
    </Layout>
  )
}

export default App;
