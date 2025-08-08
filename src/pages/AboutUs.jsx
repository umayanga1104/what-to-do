export default function AboutUs() {
    return (<>
        <div className="about-container w-screen h-screen bg-black/92 text-white">

            <div className="ml-10 text-white p-10">
                <h1 className="text-3xl font-bold mb-4">About This App</h1>
                <p className="animate-pulse m-auto mb-2 w-1/2 bg-white/20 p-10 rounded-lg text-center"><span className="text-3xl">Hey there!</span> I am <span className="text-4xl">Umayanga</span> a Lazy developer try not to code but want to win the life with coding!</p>
                <p className="animate-pulse m-auto mb-2 w-1/2 bg-white/20 p-10 rounded-lg text-center">This todo app was built using <span className="text-3xl">React</span> as a learning project. It includes features like task adding, deleting with confirmation.</p>
                <p className="animate-pulse m-auto mb-2 w-1/2 bg-white/20 p-10 rounded-lg text-center">It helped me understand React fundamentals, component structuring, and state management, usage of properties.</p>
            </div>
        </div>
    </>);
}