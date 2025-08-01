import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React',  'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Express', 'PostMan', 'MongoDB',]
    },
    {
      title: 'Languages',
      icon: Smartphone,
      color: 'from-teal-500 to-green-500',
      skills: ['C', 'C++', 'Javascript']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: ['MySQL', 'MongoDB']
    },
 

  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I have experience with a wide range of technologies and tools. Here are some of the key areas I specialize in.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                        {skill}
                      </span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <span className="text-gray-300 mr-2">Always learning:</span>
            <span className="text-white font-semibold">Believe in consistency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;