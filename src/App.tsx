import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutContextProvider from "./context/LayoutContext";
import NotFound from "./pages/404/404";
import Analytics from "./pages/Aalalytics/Analytics";
import AddGroup from "./pages/AddGroup/AddGroup";
import EditGroup from "./pages/EditGroup/EditGroup";
import Groups from "./pages/Groups/Groups";

const App = () => {
  return (
    <LayoutContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/add-group" element={<AddGroup />} />
          <Route path="/edit-group/:id" element={<EditGroup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </LayoutContextProvider>
  );
};

export default App;
