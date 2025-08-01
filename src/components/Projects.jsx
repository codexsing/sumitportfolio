import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Uber fullstack',
      description: 'A full-stack Project of Uber made with technologies like react and node js.',
      image: 'https://imgs.search.brave.com/p8Ev-Gbu-UPzClqBbsXPDsUG8NQHU24u6hMvRn-y4mo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MTI0NzkwNC9waG90/by91YmVyLWNhci13/YWl0aW5nLWZvci1j/dXN0b21lci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9akd5/SXIzTzdONm45Mkxi/OERqempBaVEwQXBP/ZVlPYWx2dE8zMDEy/YTJadz0',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDb', 'Express'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2025',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Real Estate',
      description: 'A real estate project which is totally based on the frontend in which the technologies like react and tailwindcss is used.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'React', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2025',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      title: 'Weather Dashboard',
      description: 'An intuitive weather application providing detailed forecasts, interactive maps, weather alerts, and personalized recommendations. Features beautiful data visualizations and location-based services.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['OpenWeather API', 'Javascript', 'Tailwindcss'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2023',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'A Tic Tac Toe Game',
      description: 'A small but interesting game developed at beginner level',
      image: 'https://imgs.search.brave.com/-c0W3743pekMmTf6pXdfE1vcSfZipfuUrHt8Mp2c_MA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eWl2LmNvbS9jZG4t/Y2dpL2ltYWdlL3F1/YWxpdHk9NzgsZm9y/bWF0PWF1dG8vdGh1/bWIvVGljLVRhYy1U/b2UtMy5qcGc',
      technologies: ['Javascript logic', 'Html', 'Css'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2023',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, mobile apps, and web platforms that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Date badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                    >
                      <Tag size={10} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
       
        </div>
      </div>
    </section>
  );
};

export default Projects;