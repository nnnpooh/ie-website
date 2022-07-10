import HomeNewsCard from "./HomeNewsCard"
import styles from "./News.module.css";

function HomeNews(){
    return (
        <div className="section_conatiner">
            <div className="text-center">
                <h1 className="section_title text-white">NEWS $ ACTIVITIES</h1>
            </div>
            <div className=" mx-auto md:px-52 flex-wrap md:flex mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">ALL</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">NEWS</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">ACTIVITIES</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">RESEARCH</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">CAREER</button>
            </div>
            <div className=" mx-auto md:px-52 flex-wrap mt-4">
                <HomeNewsCard />
                <HomeNewsCard />
                <HomeNewsCard />
            </div>
            <div className="text-center mt-10">
            <button className={styles.btnMore}>More</button>
            </div>
        </div>
    )
}

export default HomeNews