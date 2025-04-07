import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import "../styles/Skills.css";

const Skills = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current);
      const option = {
        radar: {
          indicator: [
            { name: 'React', max: 100 },
            { name: 'Python', max: 100 },
            { name: 'UI/UX', max: 100 },
            { name: 'Node.js', max: 100 },
            { name: 'JavaScript', max: 100},
            { name: 'TypeScript', max: 100 },
            { name: 'HTML/CSS', max: 100 }
          ],
          radius: '65%',
          splitNumber: 4,
          axisName: {
            color: '#333',
            fontSize: 14,
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(255, 255, 255, 0.1)'],
              shadowColor: 'rgba(0, 0, 0, 0.05)',
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
          },
        },
        series: [
          {
            name: 'Skills',
            type: 'radar',
            data: [
              {
                value: [90, 95, 92, 85, 88, 90],
                name: 'Skills',
                areaStyle: {
                  color: 'rgba(147, 51, 234, 0.6)',
                },
                lineStyle: {
                  color: '#9333EA',
                  width: 2,
                },
                itemStyle: {
                  color: '#9333EA',
                },
              },
            ],
          },
        ],
      };
      chart.setOption(option);
      const resizeChart = () => chart.resize();
      window.addEventListener('resize', resizeChart);

      return () => {
        window.removeEventListener('resize', resizeChart);
        chart.dispose();
      };
    }
  }, []);

  return (
    <section id="skills" className="skills">
  <h2>My Skills</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    I've developed expertise in various technologies and methodologies
    throughout my career, with a focus on full stack development,
    Python programming, and UI/UX design.
  </p>

  <div className="skills-content">
    {/* Radar Chart */}
    <div className="skills-chart" ref={chartRef}></div>

    {/* Bars + Tools */}
    <div className="skills-details">
      {[
        { name: "Frontend Development", percentage: 95 },
        { name: "UI/UX Design", percentage: 85 },
        { name: "Backend Development", percentage: 80 },
        { name: "Mobile Development", percentage: 75 },
        { name: "DevOps", percentage: 70 },
      ].map((skill, index) => (
        <div className="bar-container" key={index}>
          <div className="bar-header">
            <span>{skill.name}</span>
            <span className="text-blue-500">{skill.percentage}%</span>
          </div>
          <div className="progress-bg">
            <div
              className="progress-fill"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}

      <div className="tools">
        <h3>Tools & Technologies</h3>
        <div className="tags">
          {[
            "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Kivy",
            "Python", "Git", "Figma", "UI/UX Design", "Webpack", "Jest", "Docker",
          ].map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Skills;
