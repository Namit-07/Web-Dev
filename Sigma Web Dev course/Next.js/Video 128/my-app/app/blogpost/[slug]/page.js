export default function Page({params}){
    throw new Error('Error thrown from a dynamic route')    
    // fetch your blog post using the slug
    let languages = ['javascript', 'python', 'java', 'c++', 'ruby'];
    if(languages.includes(params.slug)){
        return <div>This is a blog post about {params.slug}</div>
    }
    else{
        return <div>Not a valid blog post</div>
    }
    return <div>My Post: {params.slug}</div>

}