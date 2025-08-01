import { Award, Trophy, Star, Target, Zap, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: '100+ On Leetcode',
      date: '2024',
      description: 'Won the company-wide innovation award for developing an AI-powered customer service chatbot that reduced response time by 70%.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Star,
      title: 'Full Stack Certification',
      date: '2024',
      description: 'Completed advanced full-stack development certification covering React, Node.js, and cloud technologies.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'LOR',
      date: '2025',
      description: 'Successfully got letter of recomendation for making a web app for college project',
      color: 'from-teal-400 to-green-500'
    },
   
    {
      icon: Zap,
      title: 'Intra College Quiz Winner',
      date: '2024',
      description: 'Active contributor to several open-source projects with over 500+ stars on GitHub repositories.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Award,
      title: 'Certifications',
      date: '2024',
      description: 'Completed the frontend course certification from platform Coursera. ',
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Milestones and recognitions that mark my journey as a developer and highlight my commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Achievement items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      {/* Date badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${achievement.color} text-white mb-4`}>
                        {achievement.date}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '10+', label: 'Projects Completed(including major and minor)' },
            { number: '1.5+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies' },
            { number: '100%', label: 'On-Time Delivery' } ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;