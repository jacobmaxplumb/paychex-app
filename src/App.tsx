import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import { TopBar } from "./components/TopBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TimeEntries } from "./pages/TimeEntries";

function App({ signOut }: any) {
  return (
    <View className="App">
      <TopBar signOut={signOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time-entries" element={<TimeEntries />} />
      </Routes>
    </View>
  );
}

export default withAuthenticator(App);
