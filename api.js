// ===== Video Data Engine =====

// Categories
const categories = [
    'Movies',
    'Music',
    'Instrumental',
    'News',
    'History'
];

// Base videos (real examples)
let videos = [
    {title:"Night of the Living Dead",cat:"Movies",id:"mRXUH_gfQY4"},
    {title:"Metropolis (Full Movie)",cat:"Movies",id:"F-_D6n3t3YQ"},
    {title:"The General 1926",cat:"Movies",id:"XCWY3dK9jPc"},

    {title:"Coldplay Viva La Vida",cat:"Music",id:"dvgZkm1xWPE"},
    {title:"Ed Sheeran Shape of You",cat:"Music",id:"JGwWNGJdvx8"},
    {title:"Blinding Lights",cat:"Music",id:"4NRXx6U8ABQ"},

    {title:"LoFi Beats",cat:"Instrumental",id:"5qap5aO4i9A"},
    {title:"Epic Orchestra",cat:"Instrumental",id:"hKRUPYrAQoE"},

    {title:"BBC News",cat:"News",id:"jO9Tuzk2ySU"},
    {title:"CNN Live",cat:"News",id:"b0M6scG0gZc"},

    {title:"WW2 Documentary",cat:"History",id:"HUqy-XFqf8I"},
    {title:"Vietnam War",cat:"History",id:"RCYt5qoDHbM"}
];

// Expand to 200+
while(videos.length < 210){
    let n = videos.length + 1;

    videos.push({
        title:"Extra Video " + n,
        cat:categories[Math.floor(Math.random()*categories.length)],
        id:"dQw4w9WgXcQ"
    });
}
