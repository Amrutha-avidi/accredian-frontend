import TopNav from './components/TopNav'
import Nav from './components/Nav'
import Refer from './components/Refer'


const App = () => {

  return (
    <div>
      <TopNav />
      <div >
        <div className="w-full md:max-w-7xl md:mx-auto px-4 mt-6">
          <Nav />

        </div>

        {/* Menu Component */}
        <div className="flex justify-center my-4">
          <ul className="flex justify-around items-center bg-[#1A73E826] px-5 py-1 md:px-8 md:py-4 rounded-4xl md:w-[50%] w-[90%] text-15px md:text-[25px]  text-[#4B4B4B]">
            <li className="cursor-pointer font-normal text-blue-600">Refer</li>
            <li className="cursor-pointer font-normal" >Benefits</li>
            <li className="cursor-pointer font-normal " >FAQs</li>
            <li className="cursor-pointer font-normal " >Support</li>
          </ul>
        </div>

        {/* Refer Section */}
        <div className="w-full md:max-w-7xl md:mx-auto px-4 mt-6" ><Refer /></div>

       
      </div>
    </div>
  )
}

export default App;
