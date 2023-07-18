import { ListOfPosts } from "./ListOfPost"

export default async function Post ({params}) {
    return (
        <div className="list-group" style={{width: '60rem', margin: 'auto', padding: '5rem'}}>

            <ListOfPosts />
        </div>
        
    )
};

