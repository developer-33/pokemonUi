
import './input.css'
// import Header from './profile/Header'
// import Sidebar from './profile/SideBar'
// import RightSidebar from './profile/RightSideBar'
// import Feed from './profile/Feed'
// import PostModal from './profile/PostModal'
// import Post from './profile/Post'
import NavPage from './pages/NavPage'

 import ProfileLayout from './ProfileLayout.jsx'

function App() {
 

  return (
    <>
   
 {/* <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div> */}
<NavPage />

<ProfileLayout />

    </>
  )
}

export default App
