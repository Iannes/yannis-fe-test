import { AppRouter } from "./components/AppRouter";
import { PostsProvider } from "./lib/contexts/PostsProvider";
import { AuthProvider } from "./lib/contexts/AuthProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PostsProvider>
          <AppRouter />
        </PostsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
