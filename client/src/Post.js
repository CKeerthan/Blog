const postData = [
    {
      id: 1,
      title: "Harmony in Complexity",
      author: "james",
      date: "2024-01-01",
      image: "a.jpg",  
      para: "In the intricate dance between algorithms and data, Artificial Intelligence orchestrates a symphony of complexity, unveiling patterns, insights, and innovations. Much like a conductor guiding a multitude of instruments, AI navigates the vast landscape of information, weaving together the threads of knowledge to create a harmonious blend of efficiency and understanding. In this intricate tapestry of technology, the true beauty lies in the seamless collaboration between human ingenuity and machine intelligence, composing a melody that resonates with the promise of a transformative future. In the quest for innovation, AI serves as a compass navigating through the vast seas of data, illuminating the unexplored realms of possibility. Each algorithmic note played contributes to a collective intelligence, harmonizing the symphony of progress. As we embrace the evolving cadence of artificial intelligence, it becomes a testament to our capacity for collaboration with machines, echoing the melody of a future where the complexities of today find resolution in the elegant simplicity of tomorrow.",
    },
    {
      id: 2,
      title: "The Power of Social Media: Connecting Beyond Boundaries",
      author: "Ram",
      date: "2024-01-02",
      image: "a2.jpg",  
      para: "In the digital age, social media platforms serve as more than just avenues for sharing updates;  its impact on communication, and the threads that weave our interconnected stories.",
    },
    {
      id: 3,
      title: "Tech Marvels: A Glimpse into Tomorrow's Wonders",
      author: "Harry",
      date: "2024-01-03",
      image: "a3.jpg",  
      para: "In the ever-accelerating journey of technology, each day brings us closer to innovations that once seemed the stuff of science fiction. From artificial intelligence shaping our daily interactions to the rise of smart cities redefining urban living, the tech landscape is a canvas of endless possibilities. As quantum computing pushes the boundaries of what we thought was computationally feasible and augmented reality transforms the way we perceive our surroundings, the present moment is a thrilling intersection of the futuristic and the now. Join us on a brief exploration of the technological wonders that are reshaping our world, offering a glimpse into a future where the only constant is the relentless march of progress.",
    },
  ];
  
  export default function Post() {
    return (
      <>
        {postData.map((post) => (
          <div key={post.id} className="post">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/' + post.image} alt={post.title} />
            </div>
            <div className="texts">
              <h2>{post.title}</h2>
              <p className="info">
                <a className="author" href="./">
                  {post.author}
                </a>
                <time>{post.date}</time>
              </p>
              <p className="para">{post.para}</p>
            </div>
          </div>
        ))}
      </>
    );
  }