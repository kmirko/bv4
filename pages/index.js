import {API_URL} from '../config/index'

export default function Home({events}) {
  return (
    <div>
     <h1>Sajt</h1>
     {events.map(evt=>(
       <h3 key={evt.id}>{evt.id}</h3>
     ))}
    </div>
  )
}
export async function getServerSideProps(){
  const res = await fetch(`${API_URL}/api/events`)
  const json = await res.json()

  const events = json.data;
  // console.log(events)

  return{
    props:{
      events
    }
  }
}
