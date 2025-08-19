import Dashboard from "@/components/Dashboard";
import Floating from "@/components/Floating";
import Navigation from "@/components/Navigation";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
     <>
       <Navigation/>
       <Welcome/>
       <Dashboard/>
       <Floating/>
     </>
  );
}
