import SideBar from "@/components/SideBar";
import Content from "@/components/Content";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <div style={{display:"flex",justifyContent:"space-between"}}>
    <div style={{flex:"0 0 20%"}} >
  <SideBar />
    </div>
    <div style={{flex:"0 0 80%"}} >
  <Content  />
    </div>
  </div>
  </>
  );
}
